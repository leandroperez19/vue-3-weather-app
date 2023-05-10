export const getFormattedHour = (hour:string) => {
  const dateTimeString = hour;
  const dateTime = new Date(dateTimeString);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12;
  const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')}${ampm}`;
  return formattedTime
}

export const getShorterDay = (date:string) =>{
  const dateTime = new Date(date);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = daysOfWeek[dateTime.getDay()];
  return dayOfWeek
}

export const getShortNumericDate = (date:string) => {
  const dateTime = new Date(date);
  const day = dateTime.getDate().toString().padStart(2, '0');
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
  const dateFormatted = `${day}/${month}`;
  return dateFormatted
}

export const getShortDate = (rawDate:string) => {
  const date = new Date(rawDate);
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleDateString('en-EU', options);
  return formattedDate

}