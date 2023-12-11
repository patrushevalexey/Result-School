function runCode() {
    console.log('before promise');

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Zero Promise');
            resolve();
        }, 0);
    });
}

setTimeout(() => {
    console.log('Zero');
}, 0);

runCode()
    .then(() => console.log('Zero Promise Invoked'));

console.log('One');

// before promise - вызывается в макротаске после выхова на 16 строке самого метода.
// One - последний этап макротаска.
// Zero - работает из очереди, но так как попадает в очередб раньше, чем вызывается метод - отрабатывает первый
// Zero Promise - отрабатывает второй в очереди
// Zero Promise Invoked - отрабатывает только после resolve, поэтому отработает последним