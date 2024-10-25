import {
  ModelRequestBodyPostMessage,
  ModelRequestGetMessage,
  ModelRequestPostMessage,
} from "../../Models/ModelRequest/ModelRequestMessage/ModelRequestGetMessage";
import { ModelResponseGetMessage } from "../../Models/ModelResponse/ModalResponseMessage/ModelResponseGetMessage";
import { ModelResponsePostMessage } from "../../Models/ModelResponse/ModalResponseMessage/ModelResponsePostMessage";
import MessageRepository from "../../Repository/MessageRepository/MessageRepository";

class MessageService {
  /**
   * getMessage
   */
  public async getMessage(
    props: ModelRequestGetMessage
  ): Promise<ModelResponseGetMessage | null> {
    const resp = await MessageRepository.getProjectMessage({
      projectId: props.projectId,
    });
    if (resp != null) {
      return resp;
    }
    return null;
  }

  public postMessage = async (
    propsparams: ModelRequestPostMessage,
    propsBody: ModelRequestBodyPostMessage
  ): Promise<ModelResponsePostMessage | null> => {
    const resp = await MessageRepository.postMessage(
      {
        idProject: propsparams.idProject,
      },
      {
        name: propsBody.name,
        text: propsBody.text,
        present: propsBody.present,
      }
    );
    if (resp != null) {
      return resp;
    }
    return resp;
  };
}

export default new MessageService();
