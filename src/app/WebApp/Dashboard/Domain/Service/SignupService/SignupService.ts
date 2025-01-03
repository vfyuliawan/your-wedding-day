import { ModelSignupRequestInterface, ModelSignupRequestPatch } from "../../Models/ModelRequest/SignupRequest/ModelSignupRequestInterface";
import { ModelSignupResponseInterface } from "../../Models/ModelResponse/SignupResponse/ModelSignupResponseInterface";
import SignupRepository from "../../Repository/SignupRepository/SignupRepository";

class SignupService {
    constructor() {}

  async signupService (props: ModelSignupRequestPatch ): Promise<ModelSignupResponseInterface | null> {
    const result = await SignupRepository.signup(props);
    if (result != null) {
      return result;
    }
    return null;
  };
}

export default new SignupService();