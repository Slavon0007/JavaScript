const reverseString = str => {
    if (str !== 'string') return null;

    let arr = str.split('').reverse().join('');

    return arr;
}