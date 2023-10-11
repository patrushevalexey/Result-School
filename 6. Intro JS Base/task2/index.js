let correctAnswers = 0, incorrectAnswers = 0;

const question1 = "Сколько будет 2 + 2?";
const value1 = 4;

const question2 = "Сколько будет 2 * 2??";
const value2 = 4;

const question3 = "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
const value3 = 1;

const question4 = "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
const value4 = 12;

const question5 = "Сколько будет 2 + 2 * 2?";
const value5 = 6;

alert(question1);
let answer1 = Number(prompt(question1.trim()));
answer1 == value1 ? correctAnswers++ : incorrectAnswers++;

alert(question2);
let answer2 = Number(prompt(question2.trim()));
answer2 == value2 ? correctAnswers++ : incorrectAnswers++;

alert(question3);
let answer3 = Number(prompt(question3.trim()));
answer3 == value3 ? correctAnswers++ : incorrectAnswers++;

alert(question4);
let answer4 = Number(prompt(question4.trim()));
answer4 == value4 ? correctAnswers++ : incorrectAnswers++;

alert(question5);
let answer5 = Number(prompt(question5.trim()));
answer5 == value5 ? correctAnswers++ : incorrectAnswers++;

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);