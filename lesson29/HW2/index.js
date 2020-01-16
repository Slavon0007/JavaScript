function delay(delay, callback, context, ...args) {
    setTimeout(() => {
        callback.applt(context, args);
    }, delay);
};

export { delay };