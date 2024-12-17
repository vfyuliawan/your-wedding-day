// To parse this data:
//
//   import { Convert, ModelLoginRequestInterface } from "./file";
//
//   const modelLoginRequestInterface = Convert.toModelLoginRequestInterface(json);

export interface ModelLoginRequestInterface {
    username: string;
    password: string;
}

// Converts JSON strings to/from your types
export class ConvertModelLoginRequestInterface {
    public static toModelLoginRequestInterface(json: string): ModelLoginRequestInterface {
        return JSON.parse(json);
    }

    public static modelLoginRequestInterfaceToJson(value: ModelLoginRequestInterface): string {
        return JSON.stringify(value);
    }
}
