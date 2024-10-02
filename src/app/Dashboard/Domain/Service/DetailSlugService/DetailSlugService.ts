import { ModelRequestDetailSlug } from "../../Models/ModelRequest/ModelRequestDetailSlug/ModelRequestDetailSlug";
import { ModelResponseDetailSlug } from "../../Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";
import DetailSlugRepository from "../../Repository/DetailSlugRepository/DetailSlugRepository";

class DetailSlugService {
    
    /**
     * getDetailSlug
     */
    public getDeatailBySlug = async (
        props: ModelRequestDetailSlug
      ): Promise<ModelResponseDetailSlug | null> => {
        const resp = await DetailSlugRepository.getDeatailBySlug(props);
        if (resp != null) {
            return resp;
        }
        return null;
    }


}


export default new DetailSlugService;