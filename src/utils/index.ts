import dayjs from "dayjs";

export function formatDate(date: string): string {
  const dateToFormat = dayjs(date);
  let format = "DD MMM YYYY";
  if (dateToFormat.year() === dayjs().year()) {
    format = "DD MMM";
  }

  return dateToFormat.format(format).replace(/,/g, "");
}
