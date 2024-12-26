export interface ModelMyprojectResponseInterface {
    code:         string;
    message:      string;
    messageError: string;
    result:       ResultModelMyprojectResponseInterface;
}

export interface ResultModelMyprojectResponseInterface {
    projects: ProjectModelMyprojectResponseInterface[];
    paging:   PagingModelMyprojectResponseInterface;
}

export interface PagingModelMyprojectResponseInterface {
    currentPage: number;
    totalPage:   number;
    size:        number;
}

export interface ProjectModelMyprojectResponseInterface {
    id:       string;
    username: string;
    title:    string;
    date:     Date;
    theme:    ThemeModelMyprojectResponseInterface;
}

export interface ThemeModelMyprojectResponseInterface {
    slug:    string;
    alamat:  string;
    embeded: string;
    theme:   ThemeDetailModelMyprojectResponseInterface;
    music:   string;
    primaryColor:   string;
    secondaryColor:   string;
    thirdColor:   string;
    textColor1:   string;
    textColor2:   string;
}
export interface ThemeDetailModelMyprojectResponseInterface {
    slug:    string;
    primaryColor: string;
    secondaryColor: string;
    textColor1: string;
    textColor2: string;
    themeName: string;
}

// Converts JSON strings to/from your types
export class ConvertModelMyprojectResponseInterface {
    public static toModelMyprojectResponseInterface(json: string): ModelMyprojectResponseInterface {
        return JSON.parse(json);
    }

    public static modelMyprojectResponseInterfaceToJson(value: ModelMyprojectResponseInterface): string {
        return JSON.stringify(value);
    }
}