export interface ModelGetProjectDetailResponseInterface {
    code:         string;
    message:      string;
    messageError: string;
    result:       ResultModelGetProjectDetailResponseInterface;
}

export interface ResultModelGetProjectDetailResponseInterface {
    title:     string;
    countdown: Date;
    hero:      CoverModelGetProjectDetailResponseInterface;
    home:      CoverModelGetProjectDetailResponseInterface;
    cover:     CoverModelGetProjectDetailResponseInterface;
    theme:     ThemeModelGetProjectDetailResponseInterface;
    infoAcara: InfoAcaraModelGetProjectDetailResponseInterface;
    braidInfo: BraidInfoModelGetProjectDetailResponseInterface;
    story:     ResultStoryModelGetProjectDetailResponseInterface;
    galery:    GaleryModelGetProjectDetailResponseInterface;
    gift:      ResultGiftModelGetProjectDetailResponseInterface;
}

export interface BraidInfoModelGetProjectDetailResponseInterface {
    male:   MaleModelGetProjectDetailResponseInterface;
    female: MaleModelGetProjectDetailResponseInterface;
    isShow: boolean;
}

export interface MaleModelGetProjectDetailResponseInterface {
    name:  string;
    image: string;
    mom:   string;
    dad:   string;
}

export interface CoverModelGetProjectDetailResponseInterface {
    title:   string;
    img:     string;
    date?:   Date;
    isShow:  boolean;
    quotes?: string;
}

export interface GaleryModelGetProjectDetailResponseInterface {
    galeries: string[];
    isShow:   boolean;
}

export interface ResultGiftModelGetProjectDetailResponseInterface {
    gifts:  GiftElementModelGetProjectDetailResponseInterface[];
    isShow: boolean;
}

export interface GiftElementModelGetProjectDetailResponseInterface {
    image: string;
    name:  string;
    noRek: string;
}

export interface InfoAcaraModelGetProjectDetailResponseInterface {
    akad:    AkadModelGetProjectDetailResponseInterface;
    resepsi: ResepsiModelGetProjectDetailResponseInterface;
}

export interface AkadModelGetProjectDetailResponseInterface {
    titleAkad:  string;
    mapAkad:    string;
    lokasiAkad: string;
    dateAkad:   Date;
    imageAkad:  string;
}

export interface ResepsiModelGetProjectDetailResponseInterface {
    titleResepsi:  string;
    mapResepsi:    string;
    lokasiResepsi: string;
    dateResepsi:   Date;
    imageResepsi:  string;
}

export interface ResultStoryModelGetProjectDetailResponseInterface {
    stories: StoryElementModelGetProjectDetailResponseInterface[];
    isShow:  boolean;
}

export interface StoryElementModelGetProjectDetailResponseInterface {
    title: string;
    text:  string;
    image: string;
    date:  Date;
}

export interface ThemeModelGetProjectDetailResponseInterface {
    slug:    string;
    alamat:  string;
    embeded: string;
    theme:   string;
    music:   string;
}

// Converts JSON strings to/from your types
export class ConvertModelGetProjectDetailResponseInterface {
    public static toModelGetProjectDetailResponseInterface(json: string): ModelGetProjectDetailResponseInterface {
        return JSON.parse(json);
    }

    public static modelGetProjectDetailResponseInterfaceToJson(value: ModelGetProjectDetailResponseInterface): string {
        return JSON.stringify(value);
    }
}