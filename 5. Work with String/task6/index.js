const userText = prompt("Введите текст").trim();
console.log(userText);

const wordFromText = prompt("Введите слово из текста").trim();
console.log(wordFromText);

const indexOfWord = userText.indexOf(wordFromText);
console.log(indexOfWord);

const string = userText.slice(0, indexOfWord);
console.log(string);

alert(`Результат: ${string}`);