import { ModelLoginRequestInterface } from "../../Models/ModelRequest/LoginRequest/ModelLoginRequestInterface";
import { ModelLoginResponseInterface } from "../../Models/ModelResponse/LoginResponse/ModelLoginResponseInterface";
import LoginRepository from "../../Repository/LoginRepository/LoginRepository";

class LoginService {
    constructor() {}

  async loginService (
    props: ModelLoginRequestInterface
  ): Promise<ModelLoginResponseInterface | null> {
    const result = await LoginRepository.login(props);
    if (result != null) {
      return result;
    }
    return null;
  };
}

export default new LoginService();
