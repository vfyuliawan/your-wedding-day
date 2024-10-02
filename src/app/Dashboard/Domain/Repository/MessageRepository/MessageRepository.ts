import { get, post } from "../../../Core/Api";
import { ConvertModelRequestBodyPostMessage, ModelRequestBodyPostMessage, ModelRequestGetMessage, ModelRequestPostMessage } from "../../Models/ModelRequest/ModelRequestMessage/ModelRequestGetMessage";
import {
  ConvertModelResponseGetMessage,
  ModelResponseGetMessage,
} from "../../Models/ModelResponse/ModalResponseMessage/ModelResponseGetMessage";
import { ConvertModelResponsePostMessage, ModelResponsePostMessage } from "../../Models/ModelResponse/ModalResponseMessage/ModelResponsePostMessage";

class MessageRepository {
  /**
   * name
   */
  public getProjectMessage = async (
    props: ModelRequestGetMessage
  ): Promise<ModelResponseGetMessage | null> => {
    const resp = await get({
      path: `/message/getByProjectId?${
        props.projectId != undefined ? `projectId=${props.projectId}` : ""
      }`,
      isNeedToken: false,
    });
    if (resp != null) {
      return ConvertModelResponseGetMessage.toModelResponseGetMessage(resp);
    }
    return null;
  };


  public postMessage = async (
    propsparams: ModelRequestPostMessage,
    propsBody: ModelRequestBodyPostMessage
  ): Promise<ModelResponsePostMessage | null> => {
    const resp = await post({
      path: `/message/postMessage?idProject=${propsparams.idProject}`,
      isNeedToken: false,
      reqBody:ConvertModelRequestBodyPostMessage.modelRequestBodyPostMessageToJson(propsBody)
    });
    if (resp != null) {
      return ConvertModelResponsePostMessage.toModelResponsePostMessage(resp)
    }
    return null;
  };
}


export default new MessageRepository;
