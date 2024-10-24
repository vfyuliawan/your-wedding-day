import { Cover } from "../../../../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";
import { TimeConvertionInterface } from "../../../../utils/TimeConvertion";

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