const splitText = (str, length = 10) => {

    if (typeof str !== 'string') return null;

    const resultArray = [];
    let startPosition = 0;

    while (true) {
        let chank = str.substr(startPosition, length);

        if (chank.length === 0) break;

        resultArray.push(chank[0].toUpperCase() + chank.slice(1));
        startPosition += length;
    }

    return resultArray.join('\n');
}