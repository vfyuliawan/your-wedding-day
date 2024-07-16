import { deleted } from "@/app/Dashboard/Core/Api";
import { ConvertModelLogoutResponseInterface, ModelLogoutResponseInterface } from "../../Models/ModelResponse/LogoutRepository/ModelLogoutResponseInterface";

class LogoutRepository {
    constructor() {}
  
    async logout  (): Promise<ModelLogoutResponseInterface | null>  {
      const res = await deleted({ 
        path: "/api/v1/auth/logout",
        reqBody: {},
        isNeedToken: true
      });
      if (res != null) {
        const result =
          ConvertModelLogoutResponseInterface.toModelLogoutResponseInterface(res);
          return result;
      }
      return null;
    };
  }
  
  export default new LogoutRepository();