const date = Date.now();

const addDays = (date, days) => new Date(date + daysToMS(days));
const daysToMS = days => days * 24 * 60 * 60 * 1000;


console.log(addDays(date, 10))