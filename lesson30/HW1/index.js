export const delay = delay => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('done'));
        }, delay);
    });
};
delay(3000).then(() => console.log("Done"));