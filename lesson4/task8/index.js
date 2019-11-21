let sum = 0;

for (let i = 1; i <= 1000; i++) {
    sum += i;
}
let result1 = sum / 1234;
let result2 = sum % 1234;

console.log(result1 > result2);