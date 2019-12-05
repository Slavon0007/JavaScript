const wallet = {
    transactions: [1, 5, 337],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },
};

export { wallet };