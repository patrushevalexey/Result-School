let clientsEstimations = [];
let badEstimate = 0, goodEstimate = 0;

const askClientToGiveEstimation = () => {
    let grade = Number(prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`).trim());
    if (grade >= 1 && grade <= 10) {
        clientsEstimations.push(grade);
    }
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

clientsEstimations.forEach(el => {
    el > 5 ? goodEstimate++ : badEstimate++;
    return goodEstimate, badEstimate;
})

alert(`Всего положительных оценок: ${goodEstimate}; Всего отрицательных оценок: ${badEstimate}`)