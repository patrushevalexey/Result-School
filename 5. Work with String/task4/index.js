let userName = prompt("Как вас зовут?");
let userAge = prompt("Сколько вам лет?");

userName = userName?.toUpperCase();
userName = userName?.trim();

userAge = userAge.trim();
userAge = Number(userAge);

alert(`Вас зовут ${userName} и вам ${userAge} лет`);