import { TimeConvertionInterface } from "@/app/utils/TimeConvertion";
import { Dispatch, SetStateAction } from "react";

export interface CoverModelInterface {
    detailCover : CoverKeyValue
  
    isVisible: boolean;
    setVisible?: Dispatch<SetStateAction<boolean>>;
    onCoverClick: () => void;
  }


  export interface CoverKeyValue {
    Date: Date | TimeConvertionInterface
    ImgCover:  string
    TitleCover: string
    Visible: boolean
  }