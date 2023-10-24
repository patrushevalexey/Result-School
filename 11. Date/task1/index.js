const separator = "-"
let date = new Date();
date.setDate(5) // Так как на момент написания кода - 22 число, хочу чтобы фиктивно проставлялось число < 10.

const getDateFormat = (date, separator = ".") => {

    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}${separator}${month}${separator}${year}`
}

console.log(getDateFormat(date));
console.log(getDateFormat(date, separator));