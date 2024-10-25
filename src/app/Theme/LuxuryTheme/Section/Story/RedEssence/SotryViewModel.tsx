import { ResultStory } from "../../../../../Manifest/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug"
import { TimeConvertionInterface } from "../../../../../Utils/TimeConvertion"

export interface StoryViewInterface {
    OurStory: ResultStory | undefined
    color: string;
  }
  
  export interface StoryViewMap{
    First: StoryViewKeyValue
    Second: StoryViewKeyValue
    Third: StoryViewKeyValue
  }
  
  
  export interface StoryViewKeyValue{
    Date: Date | TimeConvertionInterface
    Photo: string
    Story: string
    Tittle: string
  }
  