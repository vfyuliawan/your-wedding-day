// import { deleted } from "@/app/Dashboard/Core/Api";
// import { ConvertModelLogoutResponseInterface, ModelLogoutResponseInterface } from "../../Models/ModelResponse/LogoutRepository/ModelLogoutResponseInterface";

import { get, post } from "@/app/Dashboard/Core/Api";
import { ModelGetProjectDetailRequestInterface } from "../../Models/ModelRequest/GetProjectDetailRequest/GetProjectDetailRequest";
import { ConvertModelGetProjectDetailResponseInterface, ModelGetProjectDetailResponseInterface } from "../../Models/ModelResponse/GetProjectDetailResponse/GetProjectDetailResponse";
import { ConvertModelRequestUpdateProjectInterface, ModelRequestUpdateProjectInterface, ModelRequestUpdateProjectPatch } from "../../Models/ModelRequest/MyprojectRequest/ModelRequestUpdateProjectInterface";
 

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

    async createProject(
      props: ModelRequestUpdateProjectPatch
    ): Promise<ModelGetProjectDetailResponseInterface | null> {
      const res = await post({
        path: `/api/v1/project/createNew`,
        reqBody: ConvertModelRequestUpdateProjectInterface.modelRequestUpdateProjectInterfaceToJson(props.body),
        isNeedToken: true,
      });
      if (res != null) {
        const result =
          ConvertModelGetProjectDetailResponseInterface.toModelGetProjectDetailResponseInterface(
            res
          );
        return result;
      }
      return null;
    }
  }
  
  export default new GetProjectDetailRepository();