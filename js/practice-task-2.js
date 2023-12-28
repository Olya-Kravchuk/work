// напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в імпут у цьому масиві і у разі, якщо є - виводить повідомлення "Доступ дозволено"

// const str = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkName(str) {
//   const name = prompt('Enter your name');
//   if (str.includes(name)) {
//     alert('доступ дозволено');
//   } else {
//     alert('доступ не дозволено');
//   }
// }

// checkName(str);

// напиши функцію findSmallerNumber(numbers)
// яка шукає найменше число в масиві
// додай перевірку, що функція отримує масив

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return;
//   }
//   let smallestNum = numbers[0];
//   for (const number of numbers) {
//     if (smallestNum > number) {
//       smallestNum = number;
//     }
//   }
//   return smallestNum;
// }
// console.log(findSmallestNumber(numbers));


// напишіть функцію caclculateAverage()
// яка приймає довільну кількість аргументів і повертає їхнє середнє значення
// додайте перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let sumNumber = 0;
//   let countNumber = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       sumNumber += arg;
//       countNumber += 1;
//     }
//   }
//   return sumNumber / countNumber;
// }

// console.log(caclculateAverage(5, 10, 15, 'hallo'));


// напиши скрипт, який для об'єкта user послідовно:
// додати поле mood зі значенням 'happy'
// замінити hobby на 'skydiving'
// заміни значення premium на false
// виводити вміст обєкта user у форматі
// ключ: значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = "false";

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }


// напишіть функцію calcTotalPrice(stones, stonesName),
// яка приймає масив об'єктів і
// рядок з назвою каменю.
// функція вважає, що м повертає загальну вартість каменів
// з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100},
// ];

// function calcTotalPrice(stones, stonesName) {
//   for (const {name, price, quantity} of stones) {
//     if (name === stonesName) {
//       return price * quantity;
//     }
//   }
// }
// console.log(calcTotalPrice(stones, "Сапфір"));

