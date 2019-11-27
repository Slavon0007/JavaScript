const splitText = (text, line) => {

    let startPosition = 0;
    const strArr = [];

    while (trye) {
        let chunk = text.substr(0, len);

        if (chunk.length === 0) {
            break;
        }

        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));

        startPosition += len;
    }
    return strArr.join('\n');
};