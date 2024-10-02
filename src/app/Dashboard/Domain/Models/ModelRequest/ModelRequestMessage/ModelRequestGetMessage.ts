export interface ModelRequestGetMessage {
  projectId: string;
}

export interface ModelRequestPostMessage {
  idProject: string;
}


export interface ModelRequestBodyPostMessage {
    name:    string;
    text:    string;
    present: string;
}

// Converts JSON strings to/from your types
export class ConvertModelRequestBodyPostMessage {
    public static toModelRequestBodyPostMessage(json: string): ModelRequestBodyPostMessage {
        return JSON.parse(json);
    }

    public static modelRequestBodyPostMessageToJson(value: ModelRequestBodyPostMessage): string {
        return JSON.stringify(value);
    }
}
