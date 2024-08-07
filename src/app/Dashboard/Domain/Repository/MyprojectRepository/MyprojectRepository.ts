// import { deleted } from "@/app/Dashboard/Core/Api";
// import { ConvertModelLogoutResponseInterface, ModelLogoutResponseInterface } from "../../Models/ModelResponse/LogoutRepository/ModelLogoutResponseInterface";

import { get, patch, post } from "@/app/Dashboard/Core/Api";
import {
  ConvertModelMyprojectResponseInterface,
  ModelMyprojectResponseInterface,
} from "../../Models/ModelResponse/MyprojectResponse/ModelMyprojectResponseInterface";
import { ModelMyprojectRequestInterface } from "../../Models/ModelRequest/MyprojectRequest/ModelMyprojectRequestInterface";
import { title } from "process";
import { ConvertModelRequestUpdateProjectInterface, ModelRequestUpdateProjectInterface, ModelRequestUpdateProjectPatch } from "../../Models/ModelRequest/MyprojectRequest/ModelRequestUpdateProjectInterface";

class MyprojectRepository {
  constructor() {}

  async myproject(
    props: ModelMyprojectRequestInterface
  ): Promise<ModelMyprojectResponseInterface | null> {
    const res = await get({
      path: `/api/v1/project/myProjects?currentPage=${props.currentPage}&size=${props.size}`,
      isNeedToken: true,
    });
    if (res != null) {
      const result =
        ConvertModelMyprojectResponseInterface.toModelMyprojectResponseInterface(
          res
        );
      return result;
    }
    return null;
  }

  async updateProject(
    props: ModelRequestUpdateProjectPatch
  ): Promise<ModelMyprojectResponseInterface | null> {
    const res = await patch({
      path: `/api/v1/project/update?idProject=`,
      reqBody: ConvertModelRequestUpdateProjectInterface.modelRequestUpdateProjectInterfaceToJson(props.body),
      isNeedToken: true,
    });
    if (res != null) {
      const result =
        ConvertModelMyprojectResponseInterface.toModelMyprojectResponseInterface(
          res
        );
      return result;
    }
    return null;
  }
}

export default new MyprojectRepository();
