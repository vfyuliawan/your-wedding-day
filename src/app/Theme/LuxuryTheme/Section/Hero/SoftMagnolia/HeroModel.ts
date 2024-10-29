import { Cover } from "../../../../../Manifest/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";
import { TimeConvertionInterface } from "../../../../../Utils/TimeConvertion";

export interface HeroKeyValue{
    HeroImg: string;
    Visble: boolean;
    HeroTittle: string;
    HeroDate:Date | TimeConvertionInterface;
  }
  
export  interface HeroViewInterface {
    HeroDetail: Cover;
    getTitle?:string
    backgroundColor:string
  }