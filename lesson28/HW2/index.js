const fibonacci = num => {
    if (num < 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};
export const maxFibonacci = value => {
    let index = 0;
    let maxFib = 0;
    while (true) {
        let fib = fibonacci(index);
        if (fib < value) {
            maxFib = fib;
            index++;
        } else return maxFib;
    }
};