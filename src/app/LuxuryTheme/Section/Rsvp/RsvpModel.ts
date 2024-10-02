import { Timestamp } from "firebase/firestore"
import { MessagesRequest } from "../../../Dashboard/Domain/Models/ModelResponse/ModalResponseMessage/ModelResponseGetMessage";

export interface RSVPViewInterface {
    message: MessagesRequest[];
    setMessage:React.Dispatch<React.SetStateAction<MessagesRequest[]>>
    postMessage:(name: string, text: string, present: string) => Promise<void>;
}


export interface RSVPKeyValue{
    present: string
    name: string
    text: string
}