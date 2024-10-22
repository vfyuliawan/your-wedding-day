import { Dispatch, SetStateAction } from "react";
import { Timestamp } from "firebase/firestore";
import { Cover } from "../../../../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";

export interface CoverModelInterface {
    detailCover : Cover | undefined
    guest: string;
    isVisible: boolean;
    setVisible?: Dispatch<SetStateAction<boolean>>;
    onCoverClick: () => void;
    }


  export interface CoverKeyValue {
    Date: Timestamp
    ImgCover:  string
    TitleCover: string
    Visible: boolean
  }