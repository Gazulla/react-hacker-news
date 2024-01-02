export function formatDate(timestamp) {
  const addZero = (number) => {
    return number.toString().length === 1 ? "0" + number.toString() : number.toString();
  };
  const fullDateWithLocalTimezone = new Date(timestamp);
  const year = fullDateWithLocalTimezone.getFullYear();
  const month = fullDateWithLocalTimezone.getMonth() + 1;
  const day = fullDateWithLocalTimezone.getDate();
  const hour = fullDateWithLocalTimezone.getHours();
  const minutes = fullDateWithLocalTimezone.getMinutes();
  return `${addZero(day)}/${addZero(month)}/${year.toString()} at ${addZero(hour)}:${addZero(minutes)}`;
}
