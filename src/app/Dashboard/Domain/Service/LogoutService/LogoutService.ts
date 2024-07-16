// import { ModelLoginRequestInterface } from "../../Models/ModelRequest/LoginRequest/ModelLoginRequestInterface";
// import { ModelLoginResponseInterface } from "../../Models/ModelResponse/LoginResponse/ModelLoginResponseInterface";
// import LoginRepository from "../../Repository/LoginRepository/LoginRepository";

import { ModelLogoutResponseInterface } from "../../Models/ModelResponse/LogoutRepository/ModelLogoutResponseInterface";
import Logoutrepository from "../../Repository/LogoutRepository/Logoutrepository";

// import { ModelSignupRequestInterface } from "../../Models/ModelRequest/SignupRequest/ModelSignupRequestInterface";
// import { ModelSignupResponseInterface } from "../../Models/ModelResponse/SignupResponse/ModelSignupResponseInterface";
// import SignupRepository from "../../Repository/SignupRepository/SignupRepository";

class LogoutService {
    constructor() {}

  async logoutService (): Promise<ModelLogoutResponseInterface | null> {
    const result = await Logoutrepository.logout();
    if (result != null) {
      return result;
    }
    return null;
  };
}

export default new LogoutService();
