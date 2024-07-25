// import { deleted } from "@/app/Dashboard/Core/Api";
// import { ConvertModelLogoutResponseInterface, ModelLogoutResponseInterface } from "../../Models/ModelResponse/LogoutRepository/ModelLogoutResponseInterface";

import { get } from "@/app/Dashboard/Core/Api";
import { ModelGetProjectDetailRequestInterface } from "../../Models/ModelRequest/GetProjectDetailRequest/GetProjectDetailRequest";
import { ConvertModelGetProjectDetailResponseInterface, ModelGetProjectDetailResponseInterface } from "../../Models/ModelResponse/GetProjectDetailResponse/GetProjectDetailResponse";
// import { ConvertModelMyprojectResponseInterface, ModelMyprojectResponseInterface } from "../../Models/ModelResponse/MyprojectResponse/ModelMyprojectResponseInterface";
// import { ModelMyprojectRequestInterface } from "../../Models/ModelRequest/MyprojectRequest/ModelMyprojectRequestInterface";
// import { title } from "process";

class GetProjectDetailRepository {
    constructor() {}
  
    async getProjectDetail  (props: ModelGetProjectDetailRequestInterface): Promise<ModelGetProjectDetailResponseInterface | null>  {
      const res = await get({ 
        path: "/api/v1/project/get",
        // reqBody: {},
        params: {
          id: props.id, 
        }, 
        isNeedToken: true 
      });
      if (res != null) {
        const result =
        ConvertModelGetProjectDetailResponseInterface.toModelGetProjectDetailResponseInterface(res);
          return result;
      }
      return null;
    };
  }
  
  export default new GetProjectDetailRepository();