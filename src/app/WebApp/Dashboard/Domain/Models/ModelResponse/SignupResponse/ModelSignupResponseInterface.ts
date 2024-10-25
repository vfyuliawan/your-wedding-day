// To parse this data:
//
//   import { Convert, ModelLoginResponseInterface } from "./file";
//
//   const modelLoginResponseInterface = Convert.toModelLoginResponseInterface(json);

export interface ModelSignupResponseInterface {
    code:         string;
    message:      string;
    messageError: null;
    result:       ResultModelSignupResponseInterface;
}

export interface ResultModelSignupResponseInterface {
    token:          string;
}

// Converts JSON strings to/from your types
export class ConvertModelSignupResponseInterface {
    public static toModelSignupResponseInterface(json: string): ModelSignupResponseInterface {
        return JSON.parse(json);
    }

    public static modelSignupResponseInterfaceToJson(value: ModelSignupResponseInterface): string {
        return JSON.stringify(value);
    }
}
