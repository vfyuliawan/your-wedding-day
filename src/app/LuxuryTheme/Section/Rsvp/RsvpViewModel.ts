import { useEffect, useState } from "react";
import { RSVPKeyValue } from "./RsvpModel";
import Service from "@/app/services/Service";
import {
  CollectionReference,
  DocumentData,
  Query,
  Timestamp,
  addDoc,
  arrayUnion,
  collection,
  doc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDb } from "@/app/api/firebase";

interface RsvpViewModelInterface {
  userId: string;
  slug: string;
  getDetail: () => void;
}

export const RsvpViewModel = (props: RsvpViewModelInterface) => {
  const [message, setMessage] = useState<RSVPKeyValue | undefined>();
  const [progress, seTprogress] = useState(true);
  const [loading, setLoading] = useState(false);

  const submitMessage = async () => {
    setLoading(true);
    seTprogress(!progress);
    const result = await Service.GET({
      collectionName: "UserId",
      queryGet: function (
        queryGet: CollectionReference<DocumentData, DocumentData>
      ): Query<DocumentData, DocumentData> {
        const nameQuery = query(queryGet, where("Slug", "==", props.slug));
        return nameQuery;
      },
    });
    if ((result?.length ?? 0) > 0) {
      try {
        const messageToSend = {
          Confirm: message?.Confirm,
          Name: message?.Name,
          Date: Timestamp.fromDate(new Date()),
          Text: message?.Text,
        } as RSVPKeyValue;
        const userDocRef = doc(getDb, "UserId", props.userId);
        await updateDoc(userDocRef, {
          Message: arrayUnion(messageToSend),
        }).then((res) => {
          props.getDetail();
        });
        setMessage({Confirm:false, Date:Timestamp.fromDate(new Date()), Name:"", Text:"", }as RSVPKeyValue )
        console.log("Hero added successfully!");
        setLoading(false);
      } catch (error) {
        console.log("thisIsError", error);
      }
    }
  };
  return {
    message,
    setMessage,
    submitMessage,
    progress,
    seTprogress,
    loading,
    setLoading,
  };
};
