// напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
// через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім'я і логірує в консоль
// рядок "Привіт <name>"
// реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName = callback => {
//   const userName = prompt('Enter your name');
//   if (userName === '') {
//     return alert('Enter your name')
//   }
//   callback(userName);
// };


// const greet = name => {
//   console.log(`Hallo ${ name }`);
// };

// letMeSeeYourName(greet);

// ============================

// напишіть дві функції
// makeProduct(name, price, callback) - приймає
// ім'я та ціну товару, а також callback.
// функція створює обєкт товару, додаючи йому унікальний
// ідентифікатор як id і викликає callback
// передаючи йому створений обєкт.
// showProduct(product) - колбек приймаючий обєкт
// продукту і логує їх у консоль.


const makeProduct = (name, price, callback) => {
  const produkt = {
    name,
    ptice,
    id: Math.random()
}
  callback(product);
}

const showProduct = (product) => console.log(product);


makeProduct('Iphone', 20000, showProduct);