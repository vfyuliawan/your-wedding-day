import { get } from "@/app/Dashboard/Core/Api";
import { ConvertModelCekUserLoginResponseInterface, ModelCekUserLoginResponseInterface } from "../../Models/ModelResponse/CekUserLoginResponseInterface/CekUserLoginResponseInterface";

class CekUserLoginRepository {
    constructor() {}
  
    async cekUserLogin  (): Promise<ModelCekUserLoginResponseInterface | null>  {
      const res = await get({ 
        path: "/api/v1/auth/cekUserLogin",
        // reqBody: {},
        isNeedToken: true
      });
      if (res != null) {
        const result =
          ConvertModelCekUserLoginResponseInterface.toModelCekUserLoginResponseInterface(res);
          return result;
      }
      return null;
    };
  }
  
  export default new CekUserLoginRepository();