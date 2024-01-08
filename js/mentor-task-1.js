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



/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const arr = Object.keys(user);

// for (const key of arr) {
//   console.log(`${key}: ${user[key]}`);
// }

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function getTotalSalaries(myObj) {
//   let total = 0;

//   for (const salary of Object.values(myObj)) {
//     total += salary;
//   }

//   return total;
// }

// const result = getTotalSalaries(salaries);
// console.log(result);



/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */
/* 
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
]; */

// console.log(friends);

// for (const friend of friends) {
//   console.log(friend.name);
// }

/**
 * Пошук друга за іменем
 */

// const friends = [
//   { name: 'Mango', online: false, age: 10 },
//   { name: 'Kiwi', online: true, age: 20 },
//   { name: 'Poly', online: false, age: 30 },
//   { name: 'Ajax', online: false, age: 40 },
// ];

// function findFriendByName(allFriends, friendName) {
//   const box = [];

//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       box.push(friend);
//     }
//   }

//   return box;
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, "Chelsy"));

/**
 * Отримуємо імена всіх друзів
 */

// const friends = [
//   { name: 'Mango', online: false, age: 10 },
//   { name: 'Kiwi', online: true, age: 20 },
//   { name: 'Poly', online: false, age: 30 },
//   { name: 'Ajax', online: false, age: 40 },
// ];

// function getAllNames(allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }

//   return names;
// }

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
// const friends = [
//   { name: 'Mango', online: false, age: 10 },
//   { name: 'Kiwi', online: true, age: 20 },
//   { name: 'Poly', online: false, age: 30 },
//   { name: 'Ajax', online: true, age: 40 },
// ];

// function getOnlineFriends(allFriends) {
//   const names = [];

//   for (const item of allFriends) {
//     if (item.online) {
//       names.push(item.name);
//     }
//   }

//   return names;
// }

// console.log(getOnlineFriends(friends));

// ===================

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: 'Nike', price: 1300, quantity: 4, withDiscount: 2 },
//   { name: 'Adidas', price: 2700, quantity: 3, withDiscount: 0 },
//   { name: 'Reebok', price: 400, quantity: 7, withDiscount: 4 },
//   { name: 'NewBalance', price: 200, quantity: 2, withDiscount: 1 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const item of stones) {
//     if (item.name === stoneName) {
//       return item.price * (item.quantity - item.withDiscount);
//     }
//   }
// }

// console.log(calcTotalPrice(stones, 'NewBalance'));





/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// Math.max(...temps);
/**
 * Створення масиву і тип за посиланням
 */

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log(a === b);

// a[0].x = 20;

// console.log('a: ', a);
// console.log('b: ', b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {};

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {};

// console.log(finalSettings);

// ===========================

// function foo(x, y, q, ...arr) {
//   console.log(...arr);
// }
// foo(1, 2, 3, 4, 5, 6);

// =========================

// function getTotal(...arr) {
//   let total = 0;

//   for (const item of arr) {
//     total += item;
//   }

//   return total;
// }

// const result = getTotal(1, 2, 5, 5);

// console.log(result);




/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

// const account = {
  // Поточний баланс рахунку
  // balance: 0,

  // Історія транзакцій
  // transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  // createTransaction(amount, type) {},

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  // deposit(amount) {},

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  // withdraw(amount) {},

  /*
   * Метод повертає поточний баланс
   */
  // getBalance() {},

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  // getTransactionDetails(id) {},

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
//   getTransactionTotal(type) {},
// };





/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

// function each(array, onElem) {
//   const newArr = [];
//   for (const elem of array) {
//     const result = onElem(elem);
//     newArr.push(result);
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );



/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

// const arr = [1, 2, 3, 4, 4, 5, 6, 7];

/* 
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
} 
*/

/* const newArr = [];

function foo(elem) {
  newArr.push(elem ** 2);
}

const numbers = [5, 10, 15, 20, 25];



console.log(newArr); */
// const result = numbers.forEach(foo);
// foo(5, 0,numbers)
// foo(10,1,numbers)
// foo(15,2,numbers)
// foo(20,3,numbers)
// foo(25,4,numbers)

// let total = 0;

// console.log(total);



/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function logItems(items) {
//   console.log(items);

//   items.forEach((item, i) => {
//     console.log(`${i + 1} - ${item}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   nameList.forEach((item, i, array) => {
//     console.log(`${item}: ${phoneList[i]}`);
//   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function calculateAverage(...args) {
//   let total = 0;

//   args.forEach(item => (total += item));

//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2





// const allCars = [
//   { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
//   { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
//   { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
//   { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
//   { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
//   { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
//   { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
// ];

/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

// const getModels = cars => cars.map(car => car.model);

// const getModels = cars => cars.map(car => car.model);

// console.table(getModels(allCars));

// const getUpdatedCars = cars => {
//   return cars.map(car => {
//     const obj = {
//       model: car.model,
//       price: car.price,
//     };
//     return obj;
//   });
// };

// const result = getUpdatedCars(allCars);
// console.table(result);

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */
/* 
const makeCarsWithDiscount = (cars, discount) => {
  return cars.map(car => {
    const copy = { ...car };
    copy.price *= 1 - discount;
    return copy;
  });
}; */

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// console.table(players);

/*
 * Збільшуємо кількість годин гравця за id
 */

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//   const copy = { ...player };
//   if (copy.id === playerIdToUpdate) {
//     copy.timePlayed += 10;
//   }
//   return copy;
// });

// console.table(updatedPlayers);

// ============================

// const obj = {
//   name: 123,
//   age: 21,
//   isAdmin: true,
// };

// const arr = [obj];

// const arr2 = [];

// arr2[0] = arr[0];

// console.log(arr);
// console.log(arr2);



/**
 * Метод flatMap
 */

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = [];

// tweets
//   .flatMap(item => {
//     return item.tags;
//   })
//   .forEach(item => {
//     if (!tags.includes(item)) {
//       tags.push(item);
//     }
//   });

// console.log(tags);





/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * Кількість з властивості stones.
 */
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     for (const stone of this.stones) {
//       if (stone.name === stoneName) {
//         return stone.price * stone.quantity;
//       }
//     }

    /* const stone = this.stones.find(stone => {
      return stone.name === stoneName;
    }); 
    return stone.price * stone.quantity;
    */
//   },
// };

// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Ruby'));




/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 *  - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: User ${email} is ${age} years old and has ${numPosts} posts.
 * - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */

// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.email = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts




/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */
// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(login) {
//     this.#login = login;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(email) {
//     this.#email = email;
//   }
// }

// console.dir(User);

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie





/**
 * Напиши клас Storage який створює об'єкти для керування складом товарів.
 * При виклику отримуватиме один аргумент - початковий масив товарів і
 * записуватиме його властивість items.
 *
 * Додай методи класу:
 * - getItems() - повертає масив товарів.
 * - addItem(item) - отримує новий товар і додає його до поточних.
 * - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]




