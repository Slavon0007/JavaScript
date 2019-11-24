function uniqueCount(array) {

    let arr = [];

    for (let i = 0; i < array.length; i++) {
        let found = false;
        for (let j = i + 1; j < array.length - 1; j++) {
            if (array[i] === array[j]) {
                found = true;
            }
        }

        if (found) {

            let result = false;
            for (let x = 0; x < arr.length; x++) {

                if (array[i] === arr[x]) {
                    result = true;
                }
            }
            if (result === false) {
                arr.push(array[i]);
            }

        }
    }
    return arr.length;
}