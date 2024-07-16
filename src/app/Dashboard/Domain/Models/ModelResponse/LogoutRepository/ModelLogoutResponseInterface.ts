// To parse this data:
//
//   import { Convert, ModelLoginResponseInterface } from "./file";
//
//   const modelLoginResponseInterface = Convert.toModelLoginResponseInterface(json);

export interface ModelLogoutResponseInterface {
    code:         string;
    message:      string;
    messageError: null;
    result:       boolean;
}


// Converts JSON strings to/from your types
export class ConvertModelLogoutResponseInterface {
    public static toModelLogoutResponseInterface(json: string): ModelLogoutResponseInterface {
        return JSON.parse(json);
    }

    public static modelLogoutResponseInterfaceToJson(value: ModelLogoutResponseInterface): string {
        return JSON.stringify(value);
    }
}
