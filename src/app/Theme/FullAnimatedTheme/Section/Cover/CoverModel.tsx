import { TimeConvertionInterface } from "@/app/Utils/TimeConvertion";
import { Dispatch, SetStateAction } from "react";
import { Timestamp } from "firebase/firestore";
import { HomeKeyValue, HomeViewInterface } from "@/app/Theme/FloralTheme/Section/Home/HomeModel";

export interface CoverModelInterface {
  home: HomeKeyValue
  detailCover: CoverKeyValue;
  themeName: string;
  guest: string;
  isVisible: boolean;
  setVisible?: Dispatch<SetStateAction<boolean>>;
  onCoverClick: () => void;
  hero: {
    HeroDate: Timestamp;
  };
}

export interface CoverKeyValue {
  Date: Timestamp;
  ImgCover: string;
  TitleCover: string;
  Visible: boolean;
}
