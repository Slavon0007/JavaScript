function flatArray(arr) {
    let result = [];
    arr.forEach(i => {
        result = result.concat(i);
    });
    return result;
}