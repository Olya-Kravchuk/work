//  * Напиши скрипт, який підраховує суму всіх парних чисел,
//  * які входять в діапазон чисел у змінних від min до max.
//  * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
//  */

// const min = 1;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 2) {
//   if (i % 2 === 0) total += i;
// }

// console.log(total);

// * Напиши цикл for, який виводить у консоль браузера
//  * числа за зростанням від a до b, але тільки якщо число кратне 5.
//  */

// const a = 100;
// const b = 20;

// for (let i = a; i >= b; i -= 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }




// * Форматування посилання (includes та логічне «І»)
//  * Напиши скрипт який перевіряє чи закінчується значення
//  * змінної link символом /. Якщо ні, додай до кінця
//  * значення link цей символ, але тільки в тому випадку,
//  * якщо в link є підрядок "my-site".
//  * Використовуй конструкцію if...else або тернарний оператор.
//  */

// let url = 'https://my-site.com/about';

// const isCorrectEnd = url.endsWith('/');
// const hasMySite = url.includes('my-site');

// if (!isCorrectEnd && hasMySite) {
//   url += '/';
// }

// console.log(url);



// * Напиши скрипт який перевіряє чи закінчується значення
//  *  змінної link символом /. Якщо ні, додай до кінця
//  *  значення link цей символ.
//  * Використовуй конструкцію if...else.
//  */

// let link = 'https://my-site.com/about';
// const isCorrectLink = link.endsWith('/');

// if (!isCorrectLink) {
//   link += '/END';
// }

// console.log(link);


// * Напиши скрипт, який підраховує суму всіх парних чисел,
//  * які входять в діапазон чисел у змінних від min до max.
//  * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
//  */

// const min = 1;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 2) {
//   if (i % 2 === 0) total += i;
// }

// console.log(total);


/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

// const values = '8 11';

// const result = values.split(' ');

// const a = Number(result[0]);
// const b = Number(result[1]);

// console.log(a * b);

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 1; i < fruits.length; i++) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }



/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// function getSumOfArray(arr) {
//   let total = 0;

//   for (let num of arr) {
//     if (num % 2 === 0) {
//       total += num;
//     }
//   }

//   return total;
// }

// const result = getSumOfArray(numbers);
// console.log(result);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const arr1 = names.split(',');
// const arr2 = phones.split(',');

// for (let i = 0; i < arr1.length; i += 1) {
//   console.log(`${arr1[i]} - ${arr2[i]}`);
// }
/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = 'Welcome to the future test last word';
// const result = string.split(' ').slice(1, -1).join(' ');

// console.log(result);

// const arr = string.split(' ');

// arr.pop();
// arr.shift();

// console.log(arr.join(' '));
/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

// const values = [2, 17, 94, 1, 23, 37];
// let min = Infinity;
// console.log(min); // 1

// for (let num of values) {
//   if (num < min) {
//     min = num;
//   }
// }

// console.log(min);
