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
