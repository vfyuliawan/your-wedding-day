import { ModelCekUserLoginResponseInterface } from "../../Models/ModelResponse/CekUserLoginResponseInterface/CekUserLoginResponseInterface";
import CekUserLoginRepository from "../../Repository/CekUserLoginRepository/CekUserLoginRepository"; 

class CekUserLoginService {
    constructor() {}

  async cekUserLoginService (): Promise<ModelCekUserLoginResponseInterface | null> {
    const result = await CekUserLoginRepository.cekUserLogin();
    if (result != null) {
      return result;
    }
    return null;
  };
}

export default new CekUserLoginService();
