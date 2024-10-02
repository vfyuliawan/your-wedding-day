import { Cover } from "../../../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug"

export interface HomeKeyValue {
    HomeImg: string
    HomeQuotes: string
    HomeTittle: string
    Visible: boolean
}

export interface HomeViewInterface {
    HomeDetail : Cover
}