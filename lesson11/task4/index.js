const countOccurrences = (str, resultString) => {
    if (resultString === '') {
        return null;
    }
    return str.split(resultString).length - 1;
}