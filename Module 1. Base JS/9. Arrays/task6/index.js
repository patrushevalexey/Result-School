const getTotalSumByFor = () => {
    const numbers = [10, 4, 100, -5, 54, 2];
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i] ** 3;
    }

    return total;
}
console.log("getTotalSumByFor", getTotalSumByFor());

const getTotalSumByForOf = () => {
    const numbers = [10, 4, 100, -5, 54, 2];
    let total = 0;

    for (const el of numbers) {
        total += el ** 3;
    }

    return total;
}
console.log("getTotalSumByForOf", getTotalSumByForOf());

const getTotalSumByForEach = () => {
    const numbers = [10, 4, 100, -5, 54, 2];
    let total = 0;

    numbers.forEach(el => {
        total += el ** 3;
    })

    return total;
}
console.log("getTotalSumByForEach", getTotalSumByForEach());

const getTotalSumByReduce = () => {
    const numbers = [10, 4, 100, -5, 54, 2];

    let total = numbers.reduce((acc, el) => {
        return acc += el ** 3;
    }, 0)

    return total;
}
console.log("getTotalSumByReduce", getTotalSumByReduce());