const superRound = (num, digitsCnt) => {
    const digits = Math.pow(10, digitsCnt);
    return [
        Math.floor(num * digits) / digits,
        Math.round(num * digits) / digits,
        Math.ceil(num * digits) / digits,
        Math.trunc(num * digits) / digits, +num.toFixed(digitsCnt),
    ];
}