function getMaxAbsoluteNumber(arr) {
    if (!Array.isArray(arr) || arr.length < 1) {
        return null;
    }
    const array = arr.map(i => {
        return Math.abs(i);
    });
    const result = Math.max(...array);
    return result;
};