/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(weekDay: WeekDay): boolean {
  return weekDay === WeekDay.Saturday || weekDay === WeekDay.Sunday;
}

let day = new Date().getDay();
console.log(isWeekend(day));
