function getPrimes(n) {
    for (let i = 1; i <= n; i++) {
        if (prime(i)) console.log(i);
    }
}

function prime(n) {
    for (let j = 2; j <= n; j++) {
        if (num % j === 0) return false;
    }
    return true;
}