import { TimeConvertionInterface } from "@/app/utils/TimeConvertion";

export interface HeroKeyValue{
    HeroImg: string;
    Visble: boolean;
    HeroTittle: string;
    HeroDate:Date | TimeConvertionInterface;
  }
  
export  interface HeroViewInterface {
    HeroDetail: HeroKeyValue;
  }