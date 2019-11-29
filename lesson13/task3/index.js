export const getMinSquaredNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    let min = Math.abs(arr[0]);
    for (const elem of arr) {
        if (min > Math.abs(elem)) min = Math.abs(elem);
    }
    return min * min;
}