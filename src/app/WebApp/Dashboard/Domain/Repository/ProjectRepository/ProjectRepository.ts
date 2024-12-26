
import { get, patch, post } from "@/app/Manifest/Core/api";
import {
  ConvertModelMyprojectResponseInterface,
  ModelMyprojectResponseInterface,
} from "../../Models/ModelResponse/MyprojectResponse/ModelMyprojectResponseInterface";
import { ConvertModelProjectRequestInterface, ModelRequestCreateProjectPatch } from "../../Models/ModelRequest/ProjectRequest/ModelProjectRequestInterface";

class ProjectRepository {
  constructor() {}

  async createProject(
    props: ModelRequestCreateProjectPatch
  ): Promise<ModelMyprojectResponseInterface | null> {
    const res = await post({
      path: `/api/v1/project/create`,
      reqBody: ConvertModelProjectRequestInterface.modelProjectRequestInterfaceToJson(props.body),
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

export default new ProjectRepository();
