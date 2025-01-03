import { post } from "@/app/Manifest/Core/api";
import { ConvertModelSignupRequestInterface, ModelSignupRequestInterface, ModelSignupRequestPatch } from "../../Models/ModelRequest/SignupRequest/ModelSignupRequestInterface";
import { ConvertModelSignupResponseInterface, ModelSignupResponseInterface } from "../../Models/ModelResponse/SignupResponse/ModelSignupResponseInterface";

class SignupRepository {
  constructor() {}

  async signup  (
    props: ModelSignupRequestPatch
  ): Promise<ModelSignupResponseInterface | null>  {
    const res = await post({
      // path: "/auth/authenticate",
      path: "/api/v1/auth/register",
      reqBody: ConvertModelSignupRequestInterface.modelSignupRequestInterfaceToJson(props.body),
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
