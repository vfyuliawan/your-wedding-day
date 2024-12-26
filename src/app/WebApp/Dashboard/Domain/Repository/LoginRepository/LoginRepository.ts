import { post } from "@/app/Manifest/Core/api";
// import { post } from "../../../../../Manifest/Core/api";
import { ConvertModelLoginRequestInterface, ModelLoginRequestInterface, ModelLoginRequestPatch } from "../../Models/ModelRequest/LoginRequest/ModelLoginRequestInterface";
import {
  ConvertModelLoginResponseInterface,
  ModelLoginResponseInterface,
} from "../../Models/ModelResponse/LoginResponse/ModelLoginResponseInterface";

class LoginRepository {
  constructor() {}

  async login  (
    props: ModelLoginRequestPatch
  ): Promise<ModelLoginResponseInterface | null>  {
    const res = await post({ 
      path: "/api/v1/auth/authenticate", 
      reqBody: ConvertModelLoginRequestInterface.modelLoginRequestInterfaceToJson(props.body),
      isNeedToken: false
    });  
    
    if (res != null) {
      const result =
        ConvertModelLoginResponseInterface.toModelLoginResponseInterface(res);
        return result;
    }
    return null;
  };
}

export default new LoginRepository();
