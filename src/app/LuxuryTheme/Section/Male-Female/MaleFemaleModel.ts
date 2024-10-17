import { BraidInfo } from "../../../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";

export interface MaleFemaleProps {
    Male:MaleFemaleValue
    Female:MaleFemaleValue
    Visible:boolean
  }

  export interface MaleFemaleViewInterface {
    MaleFemaleDetail: BraidInfo
    ref:any
  }
  
  export interface MaleFemaleValue{
    Name: string;
    Ibu: string;
    Ayah: string;
    Photo: string;
  }
  