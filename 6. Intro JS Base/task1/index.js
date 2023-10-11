const existingUserLogin = "the_best_user";
const existingUserPassword = "12345678";

let userLogin = prompt("Введите логин").trim();
let userPassword = prompt("Введите пароль").trim();

userLogin == existingUserLogin && userPassword == existingUserPassword ? alert(`Добро пожаловать, ${userLogin}!`) : alert("Логин и (или) Пароль введены неверно!")