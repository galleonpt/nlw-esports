export function convertHourStringToMinutes(hourString: string) {
  const [hour, minutes] = hourString.split(":").map(Number); //map to convert strings to numbers

  const minutesAmount = hour * 60 + minutes;

  return minutesAmount;
}
