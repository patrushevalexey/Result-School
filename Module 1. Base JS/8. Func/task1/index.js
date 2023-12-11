const name = "Alexey";

// Function declaration
function getName1(name) {
    return `Имя равно ${name}`;
}
console.log(getName1(name));

// Function expression
const getName2 = function (name) {
    return `Имя равно ${name}`;
}
console.log(getName2(name));

// Arrow function expression
const getName3 = name => `Имя равно ${name}`;
console.log(getName3(name));