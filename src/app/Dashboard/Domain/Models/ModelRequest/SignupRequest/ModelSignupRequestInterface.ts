// To parse this data:
//
//   import { Convert, ModelSignupRequestInterface } from "./file";
//
//   const modelSignupRequestInterface = Convert.toModelSignupRequestInterface(json);

export interface ModelSignupRequestInterface {
    username: string;
    email: string;
    password: string;
    name: string;
}

// Converts JSON strings to/from your types
export class ConvertModelSignupRequestInterface {
    public static toModelSignupRequestInterface(json: string): ModelSignupRequestInterface {
        return JSON.parse(json);
    }

    public static modelSignupRequestInterfaceToJson(value: ModelSignupRequestInterface): string {
        return JSON.stringify(value);
    }
}
