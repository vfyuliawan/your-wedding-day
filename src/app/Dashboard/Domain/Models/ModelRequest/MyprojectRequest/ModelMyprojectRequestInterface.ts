// To parse this data:
//
//   import { Convert, ModelMyprojectRequestInterface } from "./file";
//
//   const modelMyprojectRequestInterface = Convert.toModelMyprojectRequestInterface(json);

export interface ModelMyprojectRequestInterface {
    currentPage: number;
    size: number;
    title?: string;
}

// Converts JSON strings to/from your types
export class ConvertModelMyprojectRequestInterface {
    public static toModelMyprojectRequestInterface(json: string): ModelMyprojectRequestInterface {
        return JSON.parse(json);
    }

    public static modelMyprojectRequestInterfaceToJson(value: ModelMyprojectRequestInterface): string {
        return JSON.stringify(value);
    }
}
