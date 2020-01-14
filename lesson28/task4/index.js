const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;



const compose = (...funcs) => velue => {
    return funcs.reduce((acc, func) => func(acc), velue);
};


const superFunc = compose(add2, square, half);
superFunc(2);