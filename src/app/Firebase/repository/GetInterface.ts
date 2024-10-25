import { CollectionReference, DocumentData, Query } from "firebase/firestore";

export interface GetInterface {
  collectionName: string;
  queryGet: (
    queryGet: CollectionReference<DocumentData, DocumentData>
  ) => Query<DocumentData, DocumentData>;
}

interface ResultInterface {
  idDoc: string;
}
