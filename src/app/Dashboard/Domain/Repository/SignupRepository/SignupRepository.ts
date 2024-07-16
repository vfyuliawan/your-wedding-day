// import { post } from "@/app/Dashboard/Core/Api";
// import { ModelSignupRequestInterface } from "../../Models/ModelRequest/SignupRequest/ModelSignupRequestInterface";
// import { ConvertModelSignupResponseInterface, ModelSignupResponseInterface } from "../../Models/ModelResponse/SignupResponse/ModelSignupResponseInterface";
// import { ModelSignupRequestInterface } from "../../Models/ModelRequest/SignupRequest/ModelSignupRequestInterface";
// import {
//   ConvertModelSignupResponseInterface,
//   ModelSignupResponseInterface,
// } from "../../Models/ModelResponse/SignupResponse/ModelSignupResponseInterface";

import { post } from "@/app/Dashboard/Core/Api";
import { ModelSignupRequestInterface } from "../../Models/ModelRequest/SignupRequest/ModelSignupRequestInterface";
import { ConvertModelSignupResponseInterface, ModelSignupResponseInterface } from "../../Models/ModelResponse/SignupResponse/ModelSignupResponseInterface";

class SignupRepository {
  constructor() {}

  async signup  (
    props: ModelSignupRequestInterface
  ): Promise<ModelSignupResponseInterface | null>  {
    const res = await post({
      // path: "/auth/authenticate",
      path: "/api/v1/auth/register",
      reqBody: {
        username: props.username,
        email: props.email,
        password: props.password,
        name: props.name
      },
      isNeedToken: false
    });
    if (res != null) {
      const result =
        ConvertModelSignupResponseInterface.toModelSignupResponseInterface(res);
        return result;
    }
    return null;
  };
}

export default new SignupRepository();
