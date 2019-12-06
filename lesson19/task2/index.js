const getOwnProps = (obj) => {
    const arrWithProps = [];
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
            arrWithProps.push(prop);
        }
    }

    return arrWithProps;
};

export { getOwnProps };