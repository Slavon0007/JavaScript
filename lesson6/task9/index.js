function removeDuplicates(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) < 0) {
            arr.push(array[i]);
        }
    }
    return arr;
}