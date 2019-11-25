const concatProps = obj => {
    const array = [];
    for (const key in obj) {
        array.push(obj[key]);
    }
    return array;
}