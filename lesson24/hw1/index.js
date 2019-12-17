const minutes = 60 * 1000;
const hour = 60 * minutes;
const day = 24 * hour;

function getDiff(startDate, endDate) {
    const diffDay = Math.abs(endDate - startDate);
    const countDays = Math.trunc(diffDay / day);
    const countDaysInMs = countDays * day;

    const DayInMs = diffDay - countDaysInMs;

    const countHours = Math.trunc((DayInMs) / hour);
    const restHourInMs = DayInMs - (countHours * hour);

    const countMinutes = Math.trunc((restHourInMs) / minutes);
    const countSeconds = Math.trunc((restHourInMs - (countMinutes * minutes)) / 1000);

    return `${countDays}d ${countHours}h ${countMinutes}m ${countSeconds}s`;
}

export {
    getDiff
};