export const getFormattedHour = (hour: string) => {
  const dateTimeString = hour;
  const dateTime = new Date(dateTimeString);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;
  const formattedTime = `${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")}${ampm}`;
  return formattedTime;
};

export const getShortWeekday = (date: string) => {
  const dateTime = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
  };
  const dayOfWeek = dateTime.toLocaleString("en-US", options);
  return dayOfWeek;
};

export const getShortNumericDate = (date: string) => {
  const dateTime = new Date(date);
  const day = dateTime.getDate().toString().padStart(2, "0");
  const month = (dateTime.getMonth() + 1).toString().padStart(2, "0");
  const dateFormatted = `${day}/${month}`;
  return dateFormatted;
};

export const getShortDate = (rawDate: string) => {
  const date = new Date(rawDate);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const formattedDate = date.toLocaleDateString("en-EU", options);
  return formattedDate;
};
