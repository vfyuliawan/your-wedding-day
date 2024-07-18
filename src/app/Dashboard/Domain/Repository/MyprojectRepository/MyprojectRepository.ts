// import { deleted } from "@/app/Dashboard/Core/Api";
// import { ConvertModelLogoutResponseInterface, ModelLogoutResponseInterface } from "../../Models/ModelResponse/LogoutRepository/ModelLogoutResponseInterface";

import { get } from "@/app/Dashboard/Core/Api";
import { ConvertModelMyprojectResponseInterface, ModelMyprojectResponseInterface } from "../../Models/ModelResponse/MyprojectResponse/ModelMyprojectResponseInterface";
import { ModelMyprojectRequestInterface } from "../../Models/ModelRequest/MyprojectRequest/ModelMyprojectRequestInterface";
import { title } from "process";

class MyprojectRepository {
    constructor() {}
  
    async myproject  (props: ModelMyprojectRequestInterface): Promise<ModelMyprojectResponseInterface | null>  {
      const res = await get({ 
        path: "/api/v1/project/myProjects",
        // reqBody: {},
        params: {
          currentPage: props.currentPage,
          size: props.size,
          title: props.title ?? '',
        }, 
        isNeedToken: true 
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