// To parse this data:
//
//   import { Convert, ModelLoginResponseInterface } from "./file";
//
//   const modelLoginResponseInterface = Convert.toModelLoginResponseInterface(json);

export interface ModelCekUserLoginResponseInterface {
    code:         string;
    message:      string;
    messageError: string;
    result:       boolean;
}


// Converts JSON strings to/from your types
export class ConvertModelCekUserLoginResponseInterface {
    public static toModelCekUserLoginResponseInterface(json: string): ModelCekUserLoginResponseInterface {
        return JSON.parse(json);
    }

    public static modelCekUserLoginResponseInterfaceToJson(value: ModelCekUserLoginResponseInterface): string {
        return JSON.stringify(value);
    }
}
