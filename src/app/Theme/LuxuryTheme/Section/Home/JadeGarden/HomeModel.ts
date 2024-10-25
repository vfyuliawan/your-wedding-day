import { Cover } from "../../../../../Manifest/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug"

export interface HomeKeyValue {
    HomeImg: string
    HomeQuotes: string
    HomeTittle: string
    Visible: boolean
}

export interface HomeViewInterface {
    HomeDetail : Cover
    // ref: any
}