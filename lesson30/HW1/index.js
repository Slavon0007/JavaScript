const delay = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('done'));
        }, delay);
    });
};