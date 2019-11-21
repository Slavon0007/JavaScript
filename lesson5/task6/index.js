function getPrimes(num) {
    for (let i = 1; i <= num; i++) {
        if (prime(i)) console.log(i);
    }
}

function prime(num) {
    for (let j = 2; j <= num; j++) {
        if (num % j === 0) return false;
    }
    return true;
}