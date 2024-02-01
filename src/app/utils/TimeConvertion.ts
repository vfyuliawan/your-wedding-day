export interface TimeConvertionInterface {
  seconds: number;
  nanoseconds: number;
}
export const TimeConvertionDate = (props: TimeConvertionInterface): string => {
  const milliseconds =
    props?.seconds * 1000 + Math.round(props?.nanoseconds / 1e6);

  const date = new Date(milliseconds);

  const options :any = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};


export const TimeConversionTime = (props: TimeConvertionInterface): string => {
    const milliseconds = props.seconds * 1000 + Math.round(props.nanoseconds / 1e6);
    const date = new Date(milliseconds);
  
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
  
    const formattedDateTime = date.toLocaleDateString("en-US", options);
    console.log("timecek",formattedDateTime);
    
    return formattedDateTime.split("at")[1];
  };