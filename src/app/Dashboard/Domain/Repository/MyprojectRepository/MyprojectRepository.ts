// import { deleted } from "@/app/Dashboard/Core/Api";
// import { ConvertModelLogoutResponseInterface, ModelLogoutResponseInterface } from "../../Models/ModelResponse/LogoutRepository/ModelLogoutResponseInterface";

import { get } from "@/app/Dashboard/Core/Api";
import { ConvertModelMyprojectResponseInterface, ModelMyprojectResponseInterface } from "../../Models/ModelResponse/MyprojectResponse/ModelMyprojectResponseInterface";

class MyprojectRepository {
    constructor() {}
  
    async myproject  (): Promise<ModelMyprojectResponseInterface | null>  {
      const res = await get({ 
        path: "/api/v1/auth/myProjects",
        // reqBody: {},
        isNeedToken: false
      });
      if (res != null) {
        const result =
          ConvertModelMyprojectResponseInterface.toModelMyprojectResponseInterface(res);
          return result;
      }
      return null;
    };
  }
  
  export default new MyprojectRepository();