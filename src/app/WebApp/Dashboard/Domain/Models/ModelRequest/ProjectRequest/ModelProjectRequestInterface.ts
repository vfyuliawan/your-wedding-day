// To parse this data:
//
//   import { Convert, ModelProjectRequestInterface } from "./file";
//
//   const modelProjectRequestInterface = Convert.toModelProjectRequestInterface(json);
export interface ModelRequestCreateProjectPatch{
    body:ModelProjectRequestInterface, 
}

export interface ModelProjectRequestInterface {
    infoAcara:        InfoAcaraModelProjectRequestInterface;
    healtProtocol:    boolean;
    livelink:         string;
    theme:            ThemeModelProjectRequestInterface;
    gift:             ModelProjectRequestInterfaceGift;
    countdown:        Date | null;
    story:            ModelProjectRequestInterfaceStory;
    videoLink:        string;
    igFilter:         string;
    cover:            CoverModelProjectRequestInterface;
    title:            string;
    isShowLinkFilter: boolean;
    galery:           GaleryModelProjectRequestInterface;
    braidInfo:        BraidInfoModelProjectRequestInterface;
    hero:             CoverModelProjectRequestInterface;
    home:             HomeModelProjectRequestInterface;
}


export interface BraidInfoModelProjectRequestInterface {
    male:   MaleModelProjectRequestInterface;
    female: MaleModelProjectRequestInterface;
    isShow: boolean;
}

export interface MaleModelProjectRequestInterface {
    name:  string;
    mom:   string;
    dad:   string;
    photo: string;
}

export interface CoverModelProjectRequestInterface {
    img:    string;
    isShow: boolean;
}

export interface GaleryModelProjectRequestInterface {
    galeries: string[];
    isShow:   boolean;
}

export interface ModelProjectRequestInterfaceGift {
    gifts:  GiftElementModelProjectRequestInterface[];
    isShow: boolean;
}

export interface GiftElementModelProjectRequestInterface {
    image: string;
    name:  string;
    noRek: string;
}

export interface HomeModelProjectRequestInterface {
    quotes: string;
    img:    string;
    isShow: boolean;
}

export interface InfoAcaraModelProjectRequestInterface {
    akad:    AkadModelProjectRequestInterface;
    resepsi: ResepsiModelProjectRequestInterface;
}

export interface AkadModelProjectRequestInterface {
    titleAkad:  string;
    mapAkad:    string;
    imgAkad:    string;
    lokasiAkad: string;
    dateAkad:   Date | null;
}

export interface ResepsiModelProjectRequestInterface {
    titleResepsi:  string;
    mapResepsi:    string;
    imgResepsi:    string;
    lokasiResepsi: string;
    dateResepsi:   Date | null;
}

export interface ModelProjectRequestInterfaceStory {
    stories: StoryElementModelProjectRequestInterface[];
    isShow:  boolean;
}

export interface StoryElementModelProjectRequestInterface {
    title: string;
    text:  string;
    image: string;
    date:  Date | null;
}

export interface ThemeModelProjectRequestInterface {
    primaryColor:   string;
    music:          string;
    theme:          string;
    alamat:         string;
    slug:           string;
    secondaryColor: string;
    embeded:        string;
    textColor1:     string;
    textColor2:     string;
    thirdColor:     string;
}

// Converts JSON strings to/from your types
export class ConvertModelProjectRequestInterface {
    public static toModelProjectRequestInterface(json: string): ModelProjectRequestInterface {
        return JSON.parse(json);
    }

    public static modelProjectRequestInterfaceToJson(value: ModelProjectRequestInterface): string {
        return JSON.stringify(value);
    }
}
