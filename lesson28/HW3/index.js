function sum(value) {
    return value !== 1 ? value + sum(value - 1) : 1;
}

export { sum };