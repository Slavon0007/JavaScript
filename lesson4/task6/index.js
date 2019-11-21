let sum = 0;

for (let i = 0; i < 1001; i++) {
    if (i % 2 !== 0) {
        console.log('Faund');
        sum += i;
    }
}

if (sum * 5 > 5000) {
    console.log('Bigger');
} else(console.log('Small or equal'));