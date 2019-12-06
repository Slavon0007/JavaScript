export function spy(func) {

    function wrapper(...args) {

        wrapper.calls.push(...args);
        return func.calls(this, args);

    }

    return wrapper;
}