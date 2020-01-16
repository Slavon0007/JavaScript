function delay(delay, callback, context, arg1, arg2, arg3, ...args) {
    setTimeout(() => {
        callback.bind(context)(...args);
    }, delay);
};

export { delay };