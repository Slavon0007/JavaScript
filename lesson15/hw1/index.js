function createCalculator() {

    let result = 0;

    return {
        add: function(num) {
            result += num;
        },

        decrease: function(num) {
            result -= num;
        },

        reset: function() {
            result = 0;
        },

        getMemo: function() {
            return result;
        },
    };

}
export { createCalculator };