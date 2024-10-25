export interface MaleFemaleProps {
    Male:MaleFemaleValue
    Female:MaleFemaleValue
    Visible:boolean
  }

  export interface MaleFemaleViewInterface {
    MaleFemaleDetail: MaleFemaleProps
    themeName: string
  }
  
  export interface MaleFemaleValue{
    Name: string;
    Ibu: string;
    Ayah: string;
    Photo: string;
  }
  