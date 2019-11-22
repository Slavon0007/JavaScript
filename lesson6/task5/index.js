function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const result = [];
    for (const i of arr) {
        result.push(i * i);
    }
    return result;
}