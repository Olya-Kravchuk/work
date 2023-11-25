//  Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// function checkA(a) {
//   if (a === 0) {
//     return "Вірно";
//   }
//   return "Невірно";
// }
// console.log(checkA(10));
// console.log(checkA(3));

// function checkA(a) {
//   return a === 10 ? "Вірно" : "Невірно";
// }
// console.log(checkA(10));
// console.log(checkA(3));


// змінна num може набувати чотири значення: 1, 2, 3 або 4. якщо вона має значення '1', то у змінну result запишемо 'зима',
//   якщо має значення '2' - 'весна' і так далі. розвяжіть завдання через switch-case.


// function foo(num) {
//   let result;
//   switch (num) {
//     case 1:
//       result = 'зима';
//       break;
//     case 2:
//       result = 'весна';
//       break;
//     case 3:
//       result = 'літо';
//       break;
//     case 4:
//       result = 'осінь';
//       break;
//     default:
//       result = 'не вірно введене значення.';
//   }
//   return result;
// }
// console.log(foo(2));
// console.log(foo(5));


// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

// function getTime(totalMinutes) {
//   let minutes = totalMinutes % 60;
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//   console.log(minutes);
// }
// console.log(getTime(70));

// function getTime(totalMinutes) {
//   const minutes = totalMinutes % 60;
//   const modifiedMinutes = minutes.toString().padStart(2, 0);
//   const modifiedHours = Math.floor(totalMinutes / 60).toString().padStart(2, 0);
// return `${modifiedHours}:${modifiedMinutes}`
// }
// console.log(getTime(69));
// console.log(getTime(125));
// console.log(getTime(1));


// напишіть цикл, який виводить у консоль числа
// від max до min за спаданням
// додайте усі парні числа від min до max
const max = 50;
const min = 23;

function logNumbers(max, min) {
  for (let i = max; i >= min; i -= 1) {
    const element = array[index];
    if (i % 2 === 0) {
      
    }
  }
}
console.log(logNumbers(max, min));