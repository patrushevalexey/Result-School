let someUndefined = undefined;
console.log(Number(someUndefined), Boolean(someUndefined), String(someUndefined));

let bool = true;
console.log(Number(bool), Boolean(bool), String(bool));

let num = 10;
console.log(Number(num), Boolean(num), String(num));

let str = "name";
console.log(Number(str), Boolean(str), String(str));

let bigNum = 10n;
console.log(Number(bigNum), Boolean(bigNum), String(bigNum));

let someSymbol = Symbol('a');
console.log(/*Number(someSymbol), */ Boolean(someSymbol), String(someSymbol));

let smth = null;
console.log(Number(smth), Boolean(smth), String(smth));

let obj = {};
console.log(Number(obj), Boolean(obj), String(obj));
