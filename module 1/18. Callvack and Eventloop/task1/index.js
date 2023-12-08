setTimeout(() => {
    console.log('setTimeout');
}, 0);

const promise = new Promise((resolve) => {
    console.log('Promise');
    resolve();
});

promise.then(() => {
    console.log('Promise resolve');
});

console.log('End');


// 1. Promise - макротаск
// 2. End - макротаск
// 3. Promise resolve - отраьатывает после отраьотки promise.resolve()
// 4. setTimeout - последний, уйдет в очередь