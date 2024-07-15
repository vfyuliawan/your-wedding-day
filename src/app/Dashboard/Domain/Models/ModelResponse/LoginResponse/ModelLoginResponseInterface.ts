// To parse this data:
//
//   import { Convert, ModelLoginResponseInterface } from "./file";
//
//   const modelLoginResponseInterface = Convert.toModelLoginResponseInterface(json);

export interface ModelLoginResponseInterface {
    code:         string;
    message:      string;
    messageError: null;
    result:       ResultModelLoginResponseInterface;
}

export interface ResultModelLoginResponseInterface {
    username:       string;
    token:          string;
    tokenExpiredAt: number;
}

// Converts JSON strings to/from your types
export class ConvertModelLoginResponseInterface {
    public static toModelLoginResponseInterface(json: string): ModelLoginResponseInterface {
        return JSON.parse(json);
    }

    public static modelLoginResponseInterfaceToJson(value: ModelLoginResponseInterface): string {
        return JSON.stringify(value);
    }
}
