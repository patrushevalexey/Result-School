const getSumOfNumbers = (number, type = "odd") => {

    let sum = 0;

    if (typeof (number) !== "number") {
        return NaN;
    } else {
        for (let i = 0; i <= number; i++) {

            if ((type == "odd") && (i % 2 === 0)) {
                continue;
            } else if ((type == "even") && (i % 2 !== 0)) {
                continue;
            }
            sum += i;
        }
        return sum
    }

}


console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55