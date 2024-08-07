// To parse this data:
//
//   import { Convert, ModelRequestUpdateProjectInterface } from "./file";
//
//   const modelRequestUpdateProjectInterface = Convert.toModelRequestUpdateProjectInterface(json);
export interface ModelRequestUpdateProjectPatch{
    body:ModelRequestUpdateProjectInterface,
    param: string
}

export interface ModelRequestUpdateProjectInterface {
    title:     string;
    countdown: Date;
    hero:      Cover;
    home:      Home;
    cover:     Cover;
    theme:     Theme;
    infoAcara: InfoAcara;
    braidInfo: BraidInfo;
    story:     ModelRequestUpdateProjectInterfaceStory;
    galery:    Galery;
    gift:      ModelRequestUpdateProjectInterfaceGift;
}

export interface BraidInfo {
    male:   Male;
    female: Male;
    isShow: boolean;
}

export interface Male {
    name:  string;
    mom:   string;
    dad:   string;
    photo: string;
}

export interface Cover {
    img:    string;
    isShow: boolean;
}

export interface Galery {
    galeries: string[];
    isShow:   boolean;
}

export interface ModelRequestUpdateProjectInterfaceGift {
    gifts:  GiftElement[];
    isShow: boolean;
}

export interface GiftElement {
    image: string;
    name:  string;
    noRek: string;
}

export interface Home {
    quotes: string;
    img:    string;
    isShow: boolean;
}

export interface InfoAcara {
    akad:    Akad;
    resepsi: Resepsi;
}

export interface Akad {
    titleAkad:  string;
    mapAkad:    string;
    imgAkad:    string;
    lokasiAkad: string;
    dateAkad:   Date;
}

export interface Resepsi {
    titleResepsi:  string;
    mapResepsi:    string;
    imgResepsi:    string;
    lokasiResepsi: string;
    dateResepsi:   Date;
}

export interface ModelRequestUpdateProjectInterfaceStory {
    stories: StoryElement[];
    isShow:  boolean;
}

export interface StoryElement {
    title: string;
    text:  string;
    image: string;
    date:  Date;
}

export interface Theme {
    slug:    string;
    alamat:  string;
    embeded: string;
    theme:   string;
    music:   string;
}

// Converts JSON strings to/from your types
export class ConvertModelRequestUpdateProjectInterface {
    public static toModelRequestUpdateProjectInterface(json: string): ModelRequestUpdateProjectInterface {
        return JSON.parse(json);
    }

    public static modelRequestUpdateProjectInterfaceToJson(value: ModelRequestUpdateProjectInterface): string {
        return JSON.stringify(value);
    }
}
