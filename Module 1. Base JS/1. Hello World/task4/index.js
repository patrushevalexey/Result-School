let answer;

answer = prompt("Сколько будет 2 + 2?")
if (answer == 4) {
    alert("Верно!")
} else {
    alert("Бред!")
}

answer = prompt("Чему равен корень из 9?")
if (answer == 3) {
    alert("Верно!")
} else {
    alert("Бред!")
}

answer = prompt("Сколько будет 2 в 5-й степени?")
if (answer == 32) {
    alert("Верно!")
} else {
    alert("Бред!")
}


// const questions = ["Сколько будет 2 + 2?", "Чему равен корень из 9?", "Сколько будет 2 в 5-й степени?"];
// const answers = [4, 3, 32];
// let answer;

// for (let i = 0; i < questions.length; i++) {
//     answer = parseInt(prompt(questions[i]));
//     if (answer === answers[i]) {
//         alert("Верно!");
//     } else {
//         alert("Бред!");
//     }
// }