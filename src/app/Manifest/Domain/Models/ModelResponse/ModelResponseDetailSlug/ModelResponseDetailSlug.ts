// To parse this data:
//
//   import { Convert, ModelResponseDetailSlug } from "./file";
//
//   const modelResponseDetailSlug = Convert.toModelResponseDetailSlug(json);

export interface ModelResponseDetailSlug {
  code: string;
  message: string;
  messageError: string;
  result: ResultDetailSlug;
}

export interface ResultDetailSlug {
  id: string;
  title: string;
  countdown: Date;
  publishDate: Date;
  videoLink: string;
  healtProtocol: boolean;
  isShowLinkFilter: boolean;
  livelink: string;
  igFilter: string;
  hero: Cover;
  home: Cover;
  cover: Cover;
  theme: Theme;
  infoAcara: InfoAcara;
  braidInfo: BraidInfo;
  story: ResultStory;
  galery: Galery;
  gift: ResultGift;
}

export interface BraidInfo {
  male: Male;
  female: Male;
  isShow: boolean;
}

export interface Male {
  name: string;
  image: string;
  mom: string;
  dad: string;
}

export interface Cover {
  title: string;
  img: string;
  date?: Date;
  isShow: boolean;
  quotes?: string;
}

export interface Galery {
  galeries: string[];
  isShow: boolean;
}

export interface ResultGift {
  gifts: GiftElement[];
  isShow: boolean;
}

export interface GiftElement {
  image: string;
  name: string;
  noRek: string;
}

export interface InfoAcara {
  akad: Akad;
  resepsi: Resepsi;
}

export interface Akad {
  titleAkad: string;
  mapAkad: string;
  lokasiAkad: string;
  dateAkad: Date;
  imageAkad: string;
}

export interface Resepsi {
  titleResepsi: string;
  mapResepsi: string;
  lokasiResepsi: string;
  dateResepsi: Date;
  imageResepsi: string;
}

export interface ResultStory {
  stories: StoryElement[];
  isShow: boolean;
}

export interface StoryElement {
  title: string;
  text: string;
  image: string;
  date: Date;
}

export interface Theme {
  slug: string;
  alamat: string;
  embeded: string;
  theme: ThemeUsed;
  music: string;
  primaryColor: string;
  secondaryColor: string;
  thirdColor: string,
  textColor1: string;
  textColor2: string;
}

export interface ThemeUsed {
  themeName: string;
  primaryColor: string;
  secondaryColor: string;
}

// Converts JSON strings to/from your types
export class ConvertModelResponseDetailSlug {
  public static toModelResponseDetailSlug(
    json: string
  ): ModelResponseDetailSlug {
    return JSON.parse(json);
  }

  public static modelResponseDetailSlugToJson(
    value: ModelResponseDetailSlug
  ): string {
    return JSON.stringify(value);
  }
}
