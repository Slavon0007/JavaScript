function sortAsc(arrayNumbers) {
    if (!Array.isArray(arrayNumbers)) return null;

    const [...arr] = arrayNumbers;
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                max = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = max;
            }
        }
    }

    return arr;
}

function sortDesc(arrayNumbers) {
    if (!Array.isArray(arrayNumbers)) return null;

    const [...arr] = arrayNumbers;
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                max = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = max;
            }
        }
    }

    return arr;
}