// Створіть функцію яка буде повертати таймстемп через 2 години від поточної дати і часу.
let date = new Date();
let laterTime = date.setHours(date.getHours() + 2);
console.log('After 2 hours: ' + date);

// const returnTimestamp = (afterHours) => {
//     Date.now() === afterHours && console.log('It is time!');
// }

returnTimestamp(laterTime);