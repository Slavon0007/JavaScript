function checker(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < array.length; i++) {
        if (arr[i] > max) {
            max = array[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    if (max + min > 1000) {
        return true;
    } else {
        return false;
    }
};