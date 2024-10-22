import { Timestamp } from "firebase/firestore";

export interface TimeConvertionInterface {
  seconds: number;
  nanoseconds: number;
}

export const TimeConvertionDate = (props: TimeConvertionInterface) => {
  const milliseconds =
    props?.seconds * 1000 + Math.round(props?.nanoseconds / 1e6);

  const date = new Date(milliseconds);

  const optionsFull: any = { day: "2-digit", month: "long", year: "numeric" };
  const optionsMonthYears: any = { month: "long", year: "numeric" };
  const dateMonth = date.toLocaleDateString("en-US", optionsMonthYears);
  const dateFull = date.toLocaleDateString("en-US", optionsFull);
  return { dateFull, dateMonth };
};

export const TimeConvertionDay = (
  props: TimeConvertionInterface,
  timestamp?: number
) => {
  const milliseconds = props.seconds * 1000 + Math.floor(props.seconds / 1e6);

  const date = new Date(milliseconds);
  const day = date.getDate();

  const dateStr = new Date(timestamp! * 1000); // Convert seconds to milliseconds
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const dayString = days[date.getDay()];

  return { dayString, day };
};

export const TimeConversionTime = (props: TimeConvertionInterface): string => {
  const milliseconds =
    props.seconds * 1000 + Math.round(props.nanoseconds / 1e6);
  const date = new Date(milliseconds);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDateTime = date.toLocaleDateString("en-US", options);

  return formattedDateTime.split(",")[2];
};

export const TimeConvertionFullDateAndTime = (date: string) => {
  const convertion = date.split("T");
  const fullDate = convertion[0];
  const fullTime = convertion[1];
  return `${fullDate} ${fullTime}`;
};

// 2024-09-22T05:28:13
export const TimeConvertionFullDate = (date: string) => {
  const conversion = date.split("T");
  const fullDate = conversion[0];
  const fullTime = conversion[1];
  
  const [year, month, day] = fullDate.split("-").map(Number);
  const daysString = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
  ];

  const monthString = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
  ];

  const [hours, minutes] = fullTime.split(":").map(Number);
  const ampm = hours < 12 ? "AM" : "PM";

  // Adjust hours for 12-hour format
  const adjustedHours = hours % 12 || 12; // Converts 0 to 12 for midnight

  // Get the day of the week
  const dateObject = new Date(fullDate + "T" + fullTime);
  const dayOfWeek = daysString[dateObject.getDay()];

  const formattedTime = `${adjustedHours}:${String(minutes).padStart(2, '0')} ${ampm}`;
  const monthToString = monthString[month - 1]; // Adjust month index
  const dateToString = fullDate.split("-")[2]
  const monthandYear = `${monthToString} ${year}`
  const dateMonthandYear = `${dateToString} ${monthToString} ${year}`
  const dateMonthandYearDot = `${dateToString}.${month}.${year}`

  return {
      formattedTime,
      dateMonthandYear,
      dayOfWeek,
      monthToString,
      dateToString,
      year,
      dateMonthandYearDot,
      monthandYear
  };
};

export function TimeConvertionUSFormat(isoDateString: string): string {
  const date = new Date(isoDateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
