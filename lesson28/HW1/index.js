// const shmoment = (date) => {

//     let result = new Date(date);

//     const setDate = {

//         years: result.setFullYear(result.getFullYear()(value)),
//         months: result.setMonth(result.setMonth()(value)),
//         days: result.setDate(result.getDate()(value)),
//         hours: result.setHours(result.getHours()(value)),
//         minutes: result.setMinutes(result.getMinutes()(value)),
//         seconds: result.setSeconds(result.getSeconds()(value)),
//         milliseconds: result.setMilliseconds(result.getMilliseconds()(value)),



//     }

//     return {
//         add(position , value) {
//             setDate[position](+value);
//             return this;
//         },
//         subtract(position,value) {
//             setDate[position](-value);
//             return this;
//         },
//         result() {
//             return new Date(result);
//         }
//     };
// }
export const shmoment = date => {
    let result = new Date(date);
    const newSetDate = {
        add(value, valueDate) {
            if (value === 'years') result = new Date(result.setFullYear(result.getFullYear() + valueDate));
            if (value === 'months') result = new Date(result.setMonth(result.getMonth() + valueDate));
            if (value === 'days') result = new Date(result.setDate(result.getDate() + valueDate));
            if (value === 'hours') result = new Date(result.setHours(result.getHours() + valueDate));
            if (value === 'minutes') result = new Date(result.setMinutes(result.getMinutes() + valueDate));
            if (value === 'seconds') result = new Date(result.setSeconds(result.getSeconds() + valueDate));
            if (value === 'milliseconds') result = new Date(result.setMilliseconds(result.getMilliseconds() + valueDate));
            return this;
        },
        subtract(value, valueDate) {
            if (value === 'years') result = new Date(result.setFullYear(result.getFullYear() - valueDate));
            if (value === 'months') result = new Date(result.setMonth(result.getMonth() - valueDate));
            if (value === 'days') result = new Date(result.setDate(result.getDate() - valueDate));
            if (value === 'hours') result = new Date(result.setHours(result.getHours() - valueDate));
            if (value === 'minutes') result = new Date(result.setMinutes(result.getMinutes() - valueDate));
            if (value === 'seconds') result = new Date(result.setSeconds(result.getSeconds() - valueDate));
            if (value === 'milliseconds') result = new Date(result.setMilliseconds(result.getMilliseconds() - valueDate));

            return this;
        },
        result() {
            return result;
        }
    };
    return newSetDate;
};