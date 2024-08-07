export interface ModelGetProjectDetailRequestInterface {
    id?: string; 
}

// Converts JSON strings to/from your types
export class ConvertModelGetProjectDetailRequestInterface {
    public static toModelGetProjectDetailRequestInterface(json: string): ModelGetProjectDetailRequestInterface {
        return JSON.parse(json);
    }

    public static modelGetProjectDetailRequestInterfaceToJson(value: ModelGetProjectDetailRequestInterface): string {
        return JSON.stringify(value);
    }
}