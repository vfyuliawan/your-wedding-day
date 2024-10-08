import { get } from "../../../Core/api";
import { ModelRequestDetailSlug } from "../../Models/ModelRequest/ModelRequestDetailSlug/ModelRequestDetailSlug";
import {
  ConvertModelResponseDetailSlug,
  ModelResponseDetailSlug,
} from "../../Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";

class DetailSlugRepository {
  /**
   * name
   */
  public getDeatailBySlug = async (
    props: ModelRequestDetailSlug
  ): Promise<ModelResponseDetailSlug | null> => {
    const resp = await get({
      isNeedToken: false,
      path: `/project/getBySlug?slug=${props.slug}`,
    });
    if (resp != null) {
      return ConvertModelResponseDetailSlug.toModelResponseDetailSlug(resp);
    }

    return null;
  };
}


export default new DetailSlugRepository;
