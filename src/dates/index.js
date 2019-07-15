// import moment here; use this package in each function
const moment = require("moment");

//today
const today = () => {
  const day = moment().format("dddd");
  console.log("Today is: ",day);
  return day;
};

//calendar
const calendar = () => {
  const date = moment().format("LL");
  console.log("Today's date is:", date);
  return date;
};

//currentTime
const currentTime = () => {
  const time = moment().format('hLTS')
  console.log("The current time is: ", time)
  return time
};

module.exports = {
  today,
  calendar,
  currentTime
};
