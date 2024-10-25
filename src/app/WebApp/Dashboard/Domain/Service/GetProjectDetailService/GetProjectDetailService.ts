// import { ModelLoginRequestInterface } from "../../Models/ModelRequest/LoginRequest/ModelLoginRequestInterface";
// import { ModelLoginResponseInterface } from "../../Models/ModelResponse/LoginResponse/ModelLoginResponseInterface";
// import LoginRepository from "../../Repository/LoginRepository/LoginRepository";

import { ModelGetProjectDetailRequestInterface } from "../../Models/ModelRequest/GetProjectDetailRequest/GetProjectDetailRequest";
import { ModelRequestUpdateProjectPatch } from "../../Models/ModelRequest/MyprojectRequest/ModelRequestUpdateProjectInterface";
import { ModelGetProjectDetailResponseInterface } from "../../Models/ModelResponse/GetProjectDetailResponse/GetProjectDetailResponse";
import GetProjectDetailRepository from "../../Repository/GetProjectDetailRepository/GetProjectDetailRepository";

// import { ModelMyprojectRequestInterface } from "../../Models/ModelRequest/MyprojectRequest/ModelMyprojectRequestInterface";
// import { ModelMyprojectResponseInterface } from "../../Models/ModelResponse/MyprojectResponse/ModelMyprojectResponseInterface";
// import MyprojectRepository from "../../Repository/MyprojectRepository/MyprojectRepository";

// import { ModelLogoutResponseInterface } from "../../Models/ModelResponse/LogoutRepository/ModelLogoutResponseInterface";
// import Logoutrepository from "../../Repository/LogoutRepository/Logoutrepository";

// import { ModelSignupRequestInterface } from "../../Models/ModelRequest/SignupRequest/ModelSignupRequestInterface";
// import { ModelSignupResponseInterface } from "../../Models/ModelResponse/SignupResponse/ModelSignupResponseInterface";
// import SignupRepository from "../../Repository/SignupRepository/SignupRepository";

class GetProjectDetailService {
    constructor() {}

  async getProjectDetailService (props: ModelGetProjectDetailRequestInterface): Promise<ModelGetProjectDetailResponseInterface | null> {
    const result = await GetProjectDetailRepository.getProjectDetail(props);
    if (result != null) {
      return result;
    }
    return null;
  };

  async createProjectService (props: ModelRequestUpdateProjectPatch): Promise<ModelGetProjectDetailResponseInterface | null> {
    const result = await GetProjectDetailRepository.createProject(props);
    if (result != null) {
      return result;
    }
    return null;
  };
}

export default new GetProjectDetailService();
