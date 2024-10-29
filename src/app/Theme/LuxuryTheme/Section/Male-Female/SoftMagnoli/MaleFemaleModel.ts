import { BraidInfo } from "../../../../../Manifest/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";
import { title } from 'process';

export interface MaleFemaleProps {
    Male:MaleFemaleValue
    Female:MaleFemaleValue
    Visible:boolean
  }

  export interface MaleFemaleViewInterface {
    MaleFemaleDetail: BraidInfo
    primColor: string
    ref:any,
    title:string
  }
  
  export interface MaleFemaleValue{
    Name: string;
    Ibu: string;
    Ayah: string;
    Photo: string;
  }
  