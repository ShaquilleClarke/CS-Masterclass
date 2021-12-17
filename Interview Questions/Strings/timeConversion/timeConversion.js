const log = console.log;

/*

Convert stanndard time to military time

12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 
12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

*/

const timeConversion = (s) => {
    let amPm = s.substring(8), hour = '';

    if (amPm === 'PM') {
        if (s.substring(0,2) !== '12') {
            hour = parseInt(s.substring(0,2), 10) + 12 + '';
        } else {
            hour = s.substring(0,2);
        }
    } else {
        if (s.substring(0,2) === '12') {
            hour = '00';
        } else {
            hour = s.substring(0, 2);
        }
    }

    return hour + s.substring(2, 8);
}
log(timeConversion('01:00:06AM'))