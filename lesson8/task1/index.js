const transformToObject = array => {
    const obj = {};

    array.forEach(elem => {
        obj[elem] = elem;
    });

    return obj;
}