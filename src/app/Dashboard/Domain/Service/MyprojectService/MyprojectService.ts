// import { ModelLoginRequestInterface } from "../../Models/ModelRequest/LoginRequest/ModelLoginRequestInterface";
// import { ModelLoginResponseInterface } from "../../Models/ModelResponse/LoginResponse/ModelLoginResponseInterface";
// import LoginRepository from "../../Repository/LoginRepository/LoginRepository";

import { ModelMyprojectResponseInterface } from "../../Models/ModelResponse/MyprojectResponse/ModelMyprojectResponseInterface";
import MyprojectRepository from "../../Repository/MyprojectRepository/MyprojectRepository";

// import { ModelLogoutResponseInterface } from "../../Models/ModelResponse/LogoutRepository/ModelLogoutResponseInterface";
// import Logoutrepository from "../../Repository/LogoutRepository/Logoutrepository";

// import { ModelSignupRequestInterface } from "../../Models/ModelRequest/SignupRequest/ModelSignupRequestInterface";
// import { ModelSignupResponseInterface } from "../../Models/ModelResponse/SignupResponse/ModelSignupResponseInterface";
// import SignupRepository from "../../Repository/SignupRepository/SignupRepository";

class MyprojectService {
    constructor() {}

  async myprojectService (): Promise<ModelMyprojectResponseInterface | null> {
    const result = await MyprojectRepository.myproject();
    if (result != null) {
      return result;
    }
    return null;
  };
}

export default new MyprojectService();
