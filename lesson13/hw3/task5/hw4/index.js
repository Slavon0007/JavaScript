export function compareSums(a, b, c, d) {
    if (sum(a, b) > (c, d)) {
        return true;
    } else { return false; }
}

function sum(from, to) {
    let result = 0;
    for (let i = from; i <= to; i++) {
        result += i;
    }
    return result;
}