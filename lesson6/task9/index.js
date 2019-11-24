function uniqueCount(array) {


    const arr = [];

    for (let i = 0; i < array.length; i++) {
        let result = false;
        for (let j = 0; j < arr.length; j++) {
            if (array[i] === arr[j]) {
                result = true;
            }
        }
        if (!result) {
            arr.push(array[i]);
        }
    }

    return arr.length;
}