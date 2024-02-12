import { TimeConvertionInterface } from "@/app/utils/TimeConvertion";
import { Dispatch, SetStateAction } from "react";
import { HeroViewInterface } from "../Hero/HeroModel";

export interface CoverModelInterface {
    detailCover : CoverKeyValue
    guest: string;
    isVisible: boolean;
    setVisible?: Dispatch<SetStateAction<boolean>>;
    onCoverClick: () => void;
    hero:{
      HeroDate:Date | TimeConvertionInterface;
    }
    }


  export interface CoverKeyValue {
    Date: Date | TimeConvertionInterface
    ImgCover:  string
    TitleCover: string
    Visible: boolean
  }