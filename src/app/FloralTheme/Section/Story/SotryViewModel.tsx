import { TimeConvertionInterface } from "@/app/utils/TimeConvertion"

export interface StoryViewInterface {
    OurStory: StoryViewMap
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
  