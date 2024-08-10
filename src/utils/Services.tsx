import moment from "moment";
export const formatClassDate = (date: moment.Moment): string => {
    const now = moment();
    const isToday = now.isSame(date, "day");
  
    const formattedDate = isToday
      ? `Today ${date.format("h:mmA")}`
      : date.format("Do MMMM h:mmA");
  
    return formattedDate
      .replace(":00", "")
      .replace(/(AM|PM)/, (match) => match.toLowerCase());
  };
  
export const formatTimeLeft = (duration: moment.Duration): string => {
  if (duration.asSeconds() <= 0) return "00:00";
  return moment.utc(duration.asMilliseconds()).format("mm:ss");
};

