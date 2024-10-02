// To parse this data:
//
//   import { Convert, ModelResponseGetMessage } from "./file";
//
//   const modelResponseGetMessage = Convert.toModelResponseGetMessage(json);

export interface ModelResponseGetMessage {
    code:         string;
    message:      string;
    messageError: string;
    result:       Result;
}

export interface Result {
    messagesRequest: MessagesRequest[];
}

export interface MessagesRequest {
    messageId: string;
    name:      string;
    text:      string;
    present:   string;
    time:      Date;
}

// Converts JSON strings to/from your types
export class ConvertModelResponseGetMessage {
    public static toModelResponseGetMessage(json: string): ModelResponseGetMessage {
        return JSON.parse(json);
    }

    public static modelResponseGetMessageToJson(value: ModelResponseGetMessage): string {
        return JSON.stringify(value);
    }
}
