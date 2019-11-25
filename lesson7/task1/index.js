function getSpecialNumbers(numbers) {
    let SpecialNumbers = [...numbers];

    return SpecialNumbers.filter(i => { return i % 3 === 0 });
}