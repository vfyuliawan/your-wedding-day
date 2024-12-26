import { ModelRequestCreateProjectPatch } from "../../Models/ModelRequest/ProjectRequest/ModelProjectRequestInterface";
import { ModelMyprojectResponseInterface } from "../../Models/ModelResponse/MyprojectResponse/ModelMyprojectResponseInterface";
import ProjectRepository from "../../Repository/ProjectRepository/ProjectRepository";

class ProjectServices {
  constructor() {} 

  async createProjectService (props: ModelRequestCreateProjectPatch): Promise<ModelMyprojectResponseInterface | null> {
    const result = await ProjectRepository.createProject(props);
    if (result != null) {
      return result;
    }
    return null;
  };
}

export default new ProjectServices();