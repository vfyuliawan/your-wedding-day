import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
} from "firebase/firestore";
import { app, getDb } from "../api/firebase";
import Swal from "sweetalert2";
import { GetInterface } from "../repository/GetInterface";
import { ModelLoginRequestInterface } from "../Dashboard/Domain/Models/ModelRequest/LoginRequest/ModelLoginRequestInterface";
import { ConvertModelLoginResponseInterface, ModelLoginResponseInterface } from "../Dashboard/Domain/Models/ModelResponse/LoginResponse/ModelLoginResponseInterface";
import { post } from "../Dashboard/Core/Api";

class Service {
  constructor() {}

  async UPDATE(props: UpdatetDataInterface): Promise<boolean> {
    console.log(`Update data ${props.collectionName} ...`);
    console.log("Request body", {
      docId: props.docId,
      collectionName: props.collectionName,
      dataRequest: props.dataToPost,
    });
    if (props.docId !== "" && props.collectionName !== "") {
      try {
        const documentRef = doc(getDb, props.collectionName, props.docId);
        const documentSnapshot = await getDoc(documentRef);
        if (documentSnapshot.exists()) {
          const update = await updateDoc(documentRef, props.dataToPost);
          console.log("Update Berhasil");
          return true;
        } else {
          console.log("Tiidak ada doc.");
          Swal.fire({
            title: "Dokumen Not Found",
            text: `Terjadi Kesalahan `,
            icon: "question",
          });
          return false;
        }
      } catch (error) {
        Swal.fire({
          title: { error },
          text: `Terjadi Kesalahan ${error}`,
          icon: "question",
        });
        return false;
      }
    } else {
      console.log("terJadi Kesalahan ....");
      return false;
    }
  }

  async GET(props: GetInterface): Promise<DocumentData[] | undefined | null> {
    console.log(`Get data ${props.collectionName}...`);
    console.log("Request body", {
      collectionName: props.collectionName,
    });
    try {
      const firestore = getFirestore(app);
      const collectionRef: CollectionReference = collection(
        firestore,
        props.collectionName
      );
      const queryGet = props.queryGet(collectionRef) ?? query(collectionRef)
      const querySnapshot = await getDocs(queryGet);
      const result = querySnapshot.docs.map((doc) => {
        return {
          idDoc: doc.id,
          ...doc.data(),
        };
      }) as DocumentData[];
      if (result?.length !== 0 || result !==null) {
        console.log(`Get data ${props.collectionName} Berhasil...`);
        console.log("Response Body", result);
        return result;
      }else{
        console.log("Gagal");
      }
      return;
    } catch (error) {
      console.log("Error Get Dat", error);
      Swal.fire({
        title: "SERVER?",
        text: "Sayangnya Server Sedang Error?",
        icon: "question"
      });
      return null;
    }
  }

  async DELETE(props: DeleteInterface): Promise<boolean | null> {
    console.log(`Delete data ${props.collectionName}....`);
    console.log("Request body", {
      collectionName: props.collectionName,
      docId: props.docId,
    });
    try {
      if (props.docId !== "" && props.collectionName !== "") {
        const documentRef = doc(getDb, props.collectionName, props.docId);
        const result = await deleteDoc(documentRef);
        console.log(`Delete data ${props.collectionName} Berhasil....`);
        return true;
      } else {
        console.log("TerJadii Kesalahan");
        return false;
      }
    } catch (error) {
      Swal.fire({
        title: { error },
        text: `Terjadi Kesalahan ${error}`,
        icon: "question",
      });
      return false;
    }
  }

  async POST(props: PostInterface): Promise<boolean | null> {
    console.log(`POST data ${props.collectionName}....`,{
        "Request body": {
            collectionName: props.collectionName,
            dataToPost: props.dataToPost,
          }
    });
    if (props.dataToPost.length !== 0 && props.collectionName !== "") {
      try {
        const docRef = await addDoc(
          collection(getDb, props.collectionName),
          props.dataToPost
        );
        if (docRef.id !== null || docRef.id !== undefined) {
          console.log(`POST Data ${props.collectionName} Berhasil`);
          return true;
        } else {
          console.log(`POST Data ${props.collectionName} Gagal`);
          return false;
        }
      } catch (error) {
        console.error("Cek Error :", error);
        return false;
      }
    }else{
        console.log("Terjadi Kesalahan");
        return false
    }
  }


  async login  (
    props: ModelLoginRequestInterface
  ): Promise<ModelLoginResponseInterface | null>  {
    const res = await post({
      path: "/auth/authenticate",
      reqBody: {
        username: props.username,
        password: props.password,
      },
    });
    if (res != null) {
      const result =
        ConvertModelLoginResponseInterface.toModelLoginResponseInterface(res);
    }
    return null;
  };
}

  


export default new Service();
