const getSumOfSequence = number => {

    let array = [];

    for (let i = 1; i <= number; i++) {
        array.push(i);
    }

    return array[0] + array[array.length - 1];

}

console.log(getSumOfSequence(11));