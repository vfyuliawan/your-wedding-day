import { TimeConvertionInterface } from "@/app/utils/TimeConvertion";
import { Dispatch, SetStateAction } from "react";
import { HeroViewInterface } from "../Hero/HeroModel";
import { Timestamp } from "firebase/firestore";

export interface CoverModelInterface {
    detailCover : CoverKeyValue
    guest: string;
    isVisible: boolean;
    setVisible?: Dispatch<SetStateAction<boolean>>;
    onCoverClick: () => void;
    hero:{
      HeroDate:Timestamp;
    }
    }


  export interface CoverKeyValue {
    Date: Date | TimeConvertionInterface
    ImgCover:  string
    TitleCover: string
    Visible: boolean
  }