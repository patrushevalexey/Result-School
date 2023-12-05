let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// // Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    // console.log("Берем элемент массива с индексом " + i + ", это " + numbers[i]);
    numbers[i] = numbers[i] ** 3;
    // console.log("После возведения в 3 степень получаем " + numbers[i]);
    sum += numbers[i];
    // console.log("Натекущий момент сумма = " + sum);
}
console.log(sum); // 1158411

// Через цикл for of
numbers = [10, 4, 100, -5, 54, 2];
sum = 0;
// console.log("Через цикл for of - numbers = " + numbers);
// console.log(sum);
for (let num of numbers) {
    num = num ** 3;
    sum += num;
}
console.log(sum); // 1003904306910622800