import { post } from "@/app/Dashboard/Core/Api";
import { ModelLoginRequestInterface } from "../../Models/ModelRequest/LoginRequest/ModelLoginRequestInterface";
import {
  ConvertModelLoginResponseInterface,
  ModelLoginResponseInterface,
} from "../../Models/ModelResponse/LoginResponse/ModelLoginResponseInterface";

class LoginRepository {
  constructor() {}

  async login  (
    props: ModelLoginRequestInterface
  ): Promise<ModelLoginResponseInterface | null>  {
    const res = await post({
      // path: "/auth/authenticate",
      path: "/api/v1/auth/authenticate",
      reqBody: {
        username: props.username,
        password: props.password,
      },
      isNeedToken: false
    });
    if (res != null) {
      const result =
        ConvertModelLoginResponseInterface.toModelLoginResponseInterface(res);
        return result;
    }
    return null;
  };
}

export default new LoginRepository();
