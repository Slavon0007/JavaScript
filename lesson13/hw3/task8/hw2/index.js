export const getAdults = obj => {
    let resultIfAge = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
            resultIfAge[key] = obj[key];
        }
    }
    return resultIfAge;
}