const calc = initVelue => {
    let result = initVelue;

    const calculator = {
        add(velue) {
            result += velue;
            return calculator;
        },
        mult(velue) {
            result *= velue;
            return calculator;
        },
        substract(velue) {
            result -= velue;
            return calculator;
        },
        div(velue) {
            result /= velue;
            return calculator;
        },
        result() {
            return result;
        },
    };
    return calculator;
}