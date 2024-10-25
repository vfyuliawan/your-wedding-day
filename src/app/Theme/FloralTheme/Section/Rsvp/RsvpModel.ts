import { Timestamp } from "firebase/firestore"

export interface RSVPViewInterface {
    Message: RSVPKeyValue[]
    userId:string,
    slug:string
    getDetail: () => void
}


export interface RSVPKeyValue{
    Confirm: boolean
    Date: Timestamp
    Name: string
    Text: string
}