// To parse this data:
//
//   import { Convert, ModelResponsePostMessage } from "./file";
//
//   const modelResponsePostMessage = Convert.toModelResponsePostMessage(json);

export interface ModelResponsePostMessage {
    code:         string;
    message:      string;
    messageError: string;
    result:       Result;
}

export interface Result {
    messageId: string;
    name:      string;
    text:      string;
    present:   string;
    time:      Date;
}

// Converts JSON strings to/from your types
export class ConvertModelResponsePostMessage {
    public static toModelResponsePostMessage(json: string): ModelResponsePostMessage {
        return JSON.parse(json);
    }

    public static modelResponsePostMessageToJson(value: ModelResponsePostMessage): string {
        return JSON.stringify(value);
    }
}
