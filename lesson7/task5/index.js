const squareArray = array => {
    if (!Array.isArray(array)) return null;
    return array.map(elem => elem * elem);
}