function reverseArray(arr) {
    if (!Array.isArray(arr)) return null;
    const result = [];
    for (const i of arr) {
        result.unshift(i);
    }
    return result;
}