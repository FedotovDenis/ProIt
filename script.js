/*
function great() {
    alert('19.12.2023; 14:15');
}
*/
/*
let age;
age = 'Hi';
console.log(age);


const { json } = require("express/lib/response");
*/

// const { application } = require("express");

// const { response } = require("express");

/*
Домашнє завдання урок №3
Напишіть JavaScript-код, 
який створює дві змінні: `number1` зі значенням 10 та `number2` зі значенням 5.
Потім напишіть вираз, який використовує арифметичний 
оператор додавання для обчислення суми цих двох 
чисел і виводить результат у консоль.


/*
Створюємо змінну `number1` зі значенням 10.
*
let number1 = 10;

/*
Створюємо змінну `number2` зі значенням 5.
*
let number2 = 5;

/*
Обчислюємо суму двох змінних `number1` та `number2`.
*
let result = number1 + number2;

/*
Виводимо результат у консоль.
*
console.log(result);
*/




/*
Урок номер №4
Як використовувати if/else для умовної логіки


/*
Створюємо змінні
*
let isRaining = false; // Чи йде дощ?
let isCloudy = true; // Чи хмарно?
let temperature = 18; // Температура

/*
Перевіряємо, чи йде дощ
*
if (isRaining) {
  // Якщо так, то рекомендуємо взяти парасольку
  console.log('Take an umbrella');
}

/*
Інакше перевіряємо, чи хмарно
*
else if (isCloudy) {
  // Якщо так, то рекомендуємо взяти легкий жакет
  console.log('Maybe take a light jacket');
}

/*
Інакше погода хороша, і ми можемо насолоджуватися сонцем
*
else {
  console.log('Enjoy the sunshine');
}

/*
Перевіряємо, чи холодно
*
if (temperature <= 20) {
  // Якщо так, то попереджуємо користувача
  console.log('It`s a chily outside'); *
}
*/




/*
Домашнє завдання урок №4
Напишіть код на JavaScript, в якому використовуються змінні `temperature` та `isWindy`.
Використовуйте оператори if/else для виведення різних повідомлень в консоль,
залежно від значень цих змінних
(наприклад, якщо температура нижче 15 градусів і вітряно,
виведіть "Вдягніться тепліше і візьміть шапку",
інакше якщо температура вище 15 градусів і не вітряно,
виведіть "Хороший день для прогулянки").


/*
Створюємо змінні
*
let temperature = 20; // Температура
let isWindy = true; // Чи вітряно?

/*
Перевіряємо, чи температура нижче 15 градусів і вітряно
*
if (temperature <= 15 && isWindy) {
  // Якщо так, то рекомендуємо одягнутися тепліше
  console.log('Вдягніться тепліше і візьміть шапку');
}

/*
Інакше, якщо температура вище 15 градусів,
то погода хороша і ми можемо насолоджуватися прогулянкою
*
else {
  console.log('Хороший день для прогулянки');
}
*/

/*
// Урок №5 - Демонстрація циклів for, while і do-while

// Цикл for:
// ---------
// - Оголошує змінну i та ініціалізує її значенням 0.
//     - i буде використовуватися як лічильник циклу.
// - Умова i < 5 визначає, чи буде виконуватися цикл.
//     - Цикл буде виконуватися, поки i менше 5.
// - i++ збільшує значення i на 1 після кожної ітерації.
for (let i = 0; i < 5; i++) {
    // Виводить повідомлення "Ітерація" з поточним значенням i.
    console.log('Ітерація' + i);
  }
  
  // Цикл while:
  // ---------
  // - Оголошує змінну count та ініціалізує її значенням 0.
  let count = 0;
  // - Умова count < 5 визначає, чи буде виконуватися цикл.
  //     - Цикл буде виконуватися, поки count менше 5.
  while (count < 5) {
    // Виводить повідомлення "Ітерація" з поточним значенням count.
    console.log("Ітерація " + count);
    // Збільшує значення count на 1 після кожної ітерації.
    count++;
  }
  
  // Цикл do-while:
  // ---------
  // - Оголошує змінну num та ініціалізує її значенням 0.
  let num = 0;
  // - Виконує блок коду хоча б один раз, а потім перевіряє умову.
  do {
    // Виводить повідомлення "Ітерація" з поточним значенням num.
    console.log('Ітерація ' + num);
    // Збільшує значення num на 1 після кожної ітерації.
    num++;
  // - Умова num < 5 визначає, чи буде цикл виконуватися знову.
  //     - Цикл буде повторюватися, поки num менше 5.
  } while (num < 5);
  */

/*
Домашнє завдання урок №5
Напишіть фрагмент коду на JavaScript, який використовує цикл `for`, щоб вивести на консоль числа від 1 до 10.


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

*/



/*
// Урок №6

/*
Створюємо масив `fruits` з елементами "apple", "banana", "cherry".
*
let fruits = ['apple', 'banana', 'cherry'];

/*
Отримуємо перший елемент масиву `fruits`.
*
let firstFruit = fruits[0];

/*
Додаємо елемент "orange" до кінця масиву `fruits`.
*
fruits.push('orange');

/*
Отримуємо останній елемент масиву `fruits`.
*
let removedFruit = fruits.pop();

/*
Отримуємо перший елемент масиву `fruits` і видаляємо його.
*
let firstRemoved = fruits.shift();

/*
Додаємо елемент "grape" на початок масиву `fruits`.
*
fruits.unshift('grape');

/*
Виводимо масив `fruits` на консоль.
*
console.log(fruits);

*/






/*
Домашнє завдання урок №6
Створюємо масив `vegetables` з елементами "carrot", "potato", "cucumber".

let vegetables = ["carrot", "potato", "cucumber"];

/*
Додаємо елемент "tomato" до кінця масиву `vegetables`.
*
vegetables.push('tomato');

/*
Видаляємо перший елемент масиву `vegetables`.
*
vegetables.shift();

/*
Виводимо масив `vegetables` на консоль.
*
console.log(vegetables);
*/





/*
Урок №7 Функції
/*
Функція `sayHello()` виводить повідомлення "Hello World" на консоль.
*
function sayHello() {
    // Виводимо повідомлення "Hello World" на консоль.
    console.log('Hello World');
  }
  
  sayHello();
  */


/*
Домашнє завдання урок №7
Напишіть функцію на JavaScript, 
яка приймає два числові параметри та повертає їхню суму. 
Після цього викличте цю функцію, 
передавши їй два числа на ваш вибір, 
та виведіть результат у консоль.
 
 
/*
Функція `num()` приймає два числові параметри `a` і `b` і повертає їхню суму.
*
function num(a, b) {
  // Повертає суму двох параметрів.
  return a + b;
}
 
console.log(num(5, 10));
*/




/*
Урок №9
Як використовувати параметри функцій та повернені значення

function greet(name) {
    console.log('Hello, ' + name + '!');
}
greet('Alice');
greet('Bob');
greet('Charlie');


function square(x) {
    return x * x;
}
let result = square(3);
console.log(result);



function checkAge(age) {
    if (age >= 18) {
        return "You are an abult";
    } else {
        return "You are a minor"
    }
}
*/

/*
Домашнє завдання урок №7
Напишіть функцію на JavaScript, яка приймає числовий параметр і перевіряє,
чи є це число парним чи непарним. Функція повинна повертати рядок "Парне"
для парних чисел і "Непарне" для непарних. Потім викличте цю функцію з
декількома різними числами та виведіть результати.


/*
Функція `numberIsEven()` приймає числовий параметр `num` і перевіряє,
чи є це число парним.
*
function numberIsEven(num) {

    /*
    Оператор `%` повертає залишок від ділення числа `num` на 2. Якщо залишок
    дорівнює 0, то число є парним.
    *
    if (num % 2) {
  
      /*
      Якщо число непарне, функція повертає рядок "Число є непарним".
      *
      return "Число є парним";
    } else {
  
      /*
      Якщо число парне, функція повертає рядок "Число є парним".
      *
      return "Число є непарним";
    }
  }
  
  /*
  Функція `console.log()` виводить рядок `3` на консоль.
  *
  console.log(numberIsEven(2));
  console.log(numberIsEven(3));
  console.log(numberIsEven(1000));
*/





/*
Урок №9
Як працювати з об'єктами та методами об'єктів, 
такими як Object.keys та Object.values


// Створюємо об'єкт phone з властивостями brand, color та weight
let phone = {
    brand: 'Iphone',
    color: 'Black',
    weight: 143
};

// Використовуємо метод Object.keys для отримання масиву ключів об'єкта phone
let keys = Object.keys(phone);
console.log(keys);

// Використовуємо метод Object.values для отримання масиву значень об'єкта phone
let value = Object.values(phone);
console.log(value);

// Додаємо нову властивість screenSize та змінюємо значення властивості color об'єкта phone
phone.screenSize = '6 inches';
phone.color = 'white';
console.log(phone);

// Видаляємо властивість weight об'єкта phone
delete phone.weight;
console.log(phone);


// Створюємо об'єкт person з властивостями name, year, hobbies та adress
let person = {
    name: 'Alice',
    year: 1980,
    hobbies: ['reading', 'cooking', 'traveling'],
    adress: {
        street: '123 Main st.',
        city: 'New York',
        state: 'NY',
        zip: '1000'
    },

    // Створюємо метод calculateAge, який приймає рік і повертає вік особи
    calculateAge: function(year_now){
        return year_now - this.year;
    }
};

// Виводимо значення властивості name об'єкта person
console.log(person.name);

// Виводимо значення властивості name об'єкта person, використовуючи квадратні дужки
console.log(person['name']);

// Використовуємо змінну key для отримання значення властивості adress об'єкта person
let key = 'adress';
console.log(person[key]);

// Виводимо значення властивості street об'єкта adress, який є властивістю об'єкта person
console.log(person.adress.street);

// Викликаємо метод calculateAge об'єкта person і передаємо поточний рік для обчислення віку
let age = person.calculateAge(2023)
console.log(age);

// Використовуємо цикл for...in для виведення всіх властивостей об'єкта person
for (let key in person){
    console.log(key + ':' + person[key]);
}
*/


/*
Домашнє завдання урок №9
Створіть об'єкт з назвою `student`, 
що містить властивості `name` (рядок), `age` (число) та `subjects` (масив рядків). 
Додайте метод `displayInfo`, який виводить інформацію про студента у консоль у форматі: 
"Студент [ім'я] віком [вік] вивчає [предмети]". Використовуйте `this` 
для доступу до властивостей об'єкта у методі


let student = {
  name: 'Bob', // Властивість з ім'ям студента
  age: 20, // Властивість з віком студента
  subjects: ['math', 'literature', 'painting'], // Властивість з масивом предметів, які студент вивчає
  displayInfo: function() { // Метод displayInfo, який виводить інформацію про студента
    console.log(`Студент ${this.name} віком ${this.age} вивчає ${this.subjects}.`);
  }
};

student.displayInfo(); // Виклик методу displayInfo для виведення інформації про студента у консоль
*/



/*
Урок №10
Глобальні та локальні змінні


let globarVar = 'I am a global variable'; // Глобальна змінна

function myFunc() {
  console.log(globarVar); // Виводимо значення глобальної змінної
}
myFunc(); // Виклик функції

function myFunc1() {
  let localVar = 'I am a variable'; // Локальна змінна
  console.log(localVar); // Виводимо значення локальної змінної
}
myFunc1(); // Виклик функції
*/




/*
Домашнє завдання урок №10
Напишіть функцію у JavaScript, яка містить одну локальну та одну глобальну змінні. 
Демонструйте доступ до цих змінних всередині та поза функцією.


let globalVar1 = 'Глобальна змінна'; // Глобальна змінна

function variables() {
  let localvar1 = 'Локальна змінна'; // Локальна змінна
  console.log(localvar1); // Виводимо значення локальної змінної
}
variables(); // Виклик функції

console.log(globalVar1); // Виводимо значення глобальної змінної
*/




/*
Урок №11
Як використовувати оператор розповсюдження для маніпуляцій з масивами та об'єктами


// Приклад 1: Копіювання масиву та додавання нового елементу
let fruits = ['apple', 'banana', 'orange'];
let fruitsCopy = [...fruits]; // Копіюємо масив fruits за допомогою оператора розповсюдження
fruitsCopy.push('pear'); // Додаємо новий елемент 'pear' до fruitsCopy
console.log(fruits); // Виводимо початковий масив fruits
console.log(fruitsCopy); // Виводимо копію масиву fruits з доданим елементом 'pear'

// Приклад 2: Копіювання об'єкту та зміна значення в копії
let cars = [
  {
    model: "Lexus",
    color: " red"
  },
  {
    model: "Toyota",
    color: "blue"
  }
]

let carsCopy = [...cars]; // Копіюємо масив об'єктів cars за допомогою оператора розповсюдження
carsCopy[0].color = 'black'; // Змінюємо значення в копії об'єкту
console.log(cars); // Виводимо початковий масив об'єктів cars
console.log(carsCopy); // Виводимо копію масиву об'єктів cars зі зміненим значенням

// Приклад 3: Об'єднання двох масивів
let colors = ['red', 'green', 'blue'];
let shapes = ['circle', 'suare', 'triangle'];
let colorsShapes = [...colors, ...shapes]; // Об'єднуємо два масиви за допомогою оператора розповсюдження
console.log(colorsShapes); // Виводимо об'єднаний масив colorsShapes

// Приклад 4: Створення нового об'єкту з використанням властивостей інших об'єктів
let person1 = {
  name: 'Alice',
  age: 25
}

let person2 = {
  name: 'Bob',
  hobbies: ['gaming', 'coding']
}

let person3 = {
  ...person1, // Копіюємо властивості об'єкту person1
  ...person2 // Копіюємо властивості об'єкту person2
}

let person4 = {
  ...person3, // Копіюємо властивості об'єкту person3
  name: "Alice", // Змінюємо значення властивості name
  hobbies: [...person3.hobbies, 'reading'] // Додаємо новий елемент до масиву hobbies
};
console.log(person4); // Виводимо новий об'єкт person4

// Приклад 5: Додавання елементів до масиву
let numbers = [1, 2, 3, 4, 5];
let newNumbers1 = [0, ...numbers]; // Додаємо новий елемент 0 до початку масиву numbers
let newNumbers2 = [...numbers, 6]; // Додаємо новий елемент 6 до кінця масиву numbers
console.log(newNumbers1); // Виводимо новий масив newNumbers1
console.log(newNumbers2); // Виводимо новий масив newNumbers2

// Приклад 6: Додавання елементів до масиву в середині
let numbers3 = [1, 2, 3, 4, 5,];
let newNumbers3 = [...numbers3.slice(0, 2), 6, 7, ...numbers3.slice(2)]; // Додаємо нові елементи 6 та 7 після другого елемента масиву numbers3
console.log(newNumbers3); // Виводимо новий масив newNumbers3

// Приклад 7: Створення нового об'єкту з використанням властивостей іншого об'єкту та додавання нових властивостей
let person5 = {
  name: 'Alice',
  age: 25
}
let newPerson = {
  id: 1,
  ...person5, // Копіюємо властивості об'єкту person5
  hobbies: ['reading', 'writing'] // Додаємо новий масив hobbies
};
console.log(newPerson); // Виводимо новий об'єкт newPerson
*/


/*
Домашнє завдання урок №11
Напишіть функцію на JavaScript, яка використовує оператор розповсюдження для додавання 
кількох нових елементів у середину існуючого масиву. Наприклад, функція повинна взяти масив [1, 2, 3, 4, 5], 
додати елементи 6, 7 після другого елемента та повернути новий масив [1, 2, 6, 7, 3, 4, 5].


function newDistributionOperator() {
  // Створюємо початковий масив
  let numbersMassif = [1, 2, 3, 4, 5];
  
  // Використовуючи оператор розповсюдження, додаємо елементи 6, 7 після другого елемента
  let newNumbersMassif = [...numbersMassif.slice(0, 2), 6, 7, ...numbersMassif.slice(2)];
  
  // Повертаємо новий масив
  return newNumbersMassif;
}

// Викликаємо функцію та виводимо результат
console.log(newDistributionOperator());
*/


/*
Урок №12
Як використовувати синтаксис стрілкової функції ES6


// Звичайна функція, яка приймає число і повертає його квадрат
function square1(num){
  return num * num;
}

// Функція, оголошена як вираз, яка приймає число і повертає його квадрат
const square2 = function(num){
  return num * num;
}

// Стрілкова функція, яка приймає число і повертає його квадрат
const square3 = (num) => {
  return num * num;
}

// Стрілкова функція з одним параметром, яка повертає його квадрат
const square4 = num => {
  return num * num;
}

// Стрілкова функція з одним параметром, яка повертає його квадрат (скорочений варіант)
const square5 = num => num * num;

// Стрілкова функція без параметрів, яка виводить порожній рядок в консоль
const test = () => {
  console.log();
}

// Стрілкова функція з двома параметрами, яка повертає їх добуток
const multiplay = (a, b) => a * b;
*/



/*
Домашнє завдання урок №12
Напишіть стрілкову функцію, яка приймає масив 
чисел та повертає масив цих же чисел, піднесених до квадрату.

const massifNumbers1 = arrayNumbers => {
  return arrayNumbers.map(number => number * number);
}
console.log(massifNumbers1([1, 2, 3, 4, 5]));
*/



/*
Урок №13
Як використовувати шаблонні літерали для створення динамічних рядків


// Змінні x і y для демонстрації використання шаблонних літералів
let x = 5;
let y = 1000;

// Використання шаблонного літерала для створення рядка, який містить суму змінних x і y
let sum = `The sum of ${x} and ${y} is ${x + y}`;
console.log(sum);

// Об'єкт person з даними про особу для демонстрації використання шаблонних літералів
let person = {
  name: 'Bob',
  age: 30,
  occupation: 'teacher'
};

// Використання шаблонного літерала для створення рядка, який представляє інформацію про особу
let introduction = `My name is ${person.name}, I am ${person.age} years old, and I work as a ${person.occupation}`;
console.log(introduction);
*/



/*
Домашнє завдання урок №12
Напишіть функцію на JavaScript, яка приймає об'єкт з інформацією 
про студента (ім'я, вік, спеціальність) та повертає рядок, сформований 
за допомогою шаблонного літерала, який представляє 
цю інформацію у зрозумілому форматі.


// Функція formatStudentInfo, яка форматує рядок з інформацією про студента
function formatStudentInfo(student) {
  return `Student ${student.name}, age ${student.age}, studies in the specialty ${student.specialty}.`;
}

// Об'єкт student з інформацією про студента
const student = {
  name: 'Bob',
  age: 20,
  specialty: 'programmer'
};

// Виклик функції formatStudentInfo і збереження результату у змінну formattedInfo
const formattedInfo = formatStudentInfo(student);

// Виведення отриманого рядка на консоль
console.log(formattedInfo);
*/



/*
Урок №14
Як працювати з DOM для маніпуляцій з веб-сторінками
*/


/*
Урок №18
Як використовувати зворотні виклики та функції вищого порядку 



// Функція `greeting` приймає параметр `name` і виводить привітання у консолі з використанням шаблонних рядків.
function greeting(name) {
  console.log(`Hello, ${name}`);
};
// Функція `greetWithAlert` приймає параметр `name` і виводить привітання у вигляді спливаючого повідомлення.
function greetWithAlert(name) {
  alert(name);
};
// Функція `processUserInput` приймає функцію `greeting` як параметр.
// Вона викликає `prompt` для отримання імені користувача, а потім викликає передану функцію `greeting` з отриманим іменем.
function processUserInput(greeting) {
  let promptUserName = prompt('Please enter your name')
  greeting(promptUserName);
}
// Виклик функції `processUserInput` з переданою функцією `greeting`.
// Користувачу буде запропоновано ввести своє ім'я, після чого в консолі буде виведено привітання.
processUserInput(greeting);
// Виклик функції `processUserInput` з переданою функцією `greetWithAlert`.
// Користувачу буде запропоновано ввести своє ім'я, після чого відобразиться спливаюче повідомлення з привітанням.
processUserInput(greetWithAlert);





// Функція `greaterThan` приймає параметр `n` і повертає нову функцію.
// Повернена функція приймає параметр `m` і порівнює його зі значенням `n`.
// Вона повертає `true`, якщо `m` більше за `n`, і `false` в іншому випадку.
function greaterThan(n) {
  return function (m) {
    return m > n;
  }
}
// Змінна `greaterThan10` отримує результат виклику функції `greaterThan` з аргументом 10.
// Це створює нову функцію, яка порівнює свій аргумент зі значенням 10.
let greaterThan10 = greaterThan(10);
// Змінна `result` отримує результат виклику функції `greaterThan10` з аргументом 11.
// Функція `greaterThan10` порівнює 11 зі значенням 10 і повертає `true`, оскільки 11 більше за 10.
let result = greaterThan10(11);
// Виведення значення змінної `result` у консолі.
console.log(result);
*/




/*
Домашнє завдання урок №18
Напишіть функцію вищого порядку `modifyArray`, яка приймає масив та колбек-функцію. 
Колбек-функція повинна застосовуватися до кожного елементу масиву.
Потім протестуйте цю функцію, передавши їй масив чисел та колбек-функцію, 
яка множить кожен елемент масиву на 2.


// Функція вищого порядку, яка приймає масив та колбек-функцію
function modifyArray(array, callbackFunction){
  return array.map(callbackFunction);
}
// Колбек-функція, яка множить число на 2
function multiplyByTwo(number){
  return number * 2;
}
let numbers = [1, 2, 3, 4, 5];
// Виклик функції modifyArray з передачею масиву numbers та колбек-функції multiplyByTwo
let modifiedNumbers = modifyArray(numbers, multiplyByTwo);
console.log(modifiedNumbers);
*/



/*
Урок №19
Як використовувати setTimeout та setInterval для асинхронного програмування

// перший варіант
setTimeout(function () {
  console.log("Hello World");
}, 3000);

// другий варіант стрілкова функція
setTimeout(() => {
  console.log("Hello World");
}, 3000);

// приклад №1
console.log("Before setTimeout")
setTimeout(() => {
  console.log("Inside setTimeout");
}, 3000);
console.log("After setTimeout");

// приклад №2
console.log("Before setTimeout")
let a = setTimeout(() => {
  console.log("Inside setTimeout");
}, 10000);
console.log("After setTimeout");
*/

/*
приклад №3
setInterval(()=>{
console.log("Hello World")
}, 2000)
*/

/*
// приклад №4
console.log("Before setTimeout")
let newSet = setInterval(() => {
  console.log("Inside setTimeout");
}, 2000);
console.log("After setTimeout");
*/

/*
// приклад №5
// Отримуємо елемент з ідентифікатором "timer" і зберігаємо його в змінній "timer"
let timer = document.getElementById("timer");
// Ініціалізуємо змінну "seconds" зі значенням 10
let seconds = 10;
// Задаємо текст вмісту елемента "timer" зі значенням змінної "seconds"
timer.textContent = seconds;

// Функція updateTimer оновлює лічильник таймера та перевіряє, чи досягнута нульова точка
function updateTimer(){
  // Зменшуємо значення змінної "seconds" на 1
  seconds--;
  // Змінюємо текст вмісту елемента "timer" на нове значення змінної "seconds"
  timer.textContent = seconds;
  // Перевіряємо, чи досягнута нульова точка
  if(seconds === 0){
    // Якщо досягнута нульова точка, змінюємо текст вмісту елемента "timer" на "Time is up"
    timer.textContent = "Time is up";
    // Зупиняємо інтервал оновлення таймера
    clearInterval(timeout);
  }
}

// Встановлюємо інтервал оновлення таймера на 1 секунду
let timeout = setInterval(updateTimer, 1000);
*/


/*
// приклад №6
let clock = document.getElementById("clock");

// Функція updateClock оновлює годинник, отримуючи поточну дату та час
function updateClock() {
  // Створюємо новий об'єкт Date для отримання поточної дати та часу
  let date = new Date();

  // Отримуємо години, хвилини та секунди з об'єкта date
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Додаємо нуль перед годинами, хвилинами та секундами, якщо вони менші за 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Задаємо текст вмісту елемента "clock" зі значенням годин, хвилин та секунд
  clock.textContent = `${hours} : ${minutes} : ${seconds}`;
}

// Встановлюємо інтервал оновлення годинника на 1 секунду
let interval = setInterval(updateClock, 1000);
*/





/*
Домашнє завдання урок №18
Напишіть функцію на JavaScript, яка використовує `setInterval` 
для відображення лічильника зворотного відліку від 5 до 0. 
Коли лічильник досягне нуля, він має вивести повідомлення "Лічильник завершено!" 
і зупинити лічильник, використовуючи `clearInterval`.

let timerDocument = document.getElementById("timer1"); // Отримати HTML-елемент з ідентифікатором "timer1" і присвоїти його значення змінній timerDocument
let startTheCountdown = 5; // Ініціалізувати значення лічильника на 5
timerDocument.textContent = startTheCountdown; // Встановити текстовий вміст елементу timerDocument зі значенням startTheCountdown

function updateTimer() {
  startTheCountdown--; // Зменшити значення лічильника на 1
  timerDocument.textContent = startTheCountdown; // Оновити текстовий вміст елементу timerDocument з новим значенням лічильника

  if (startTheCountdown === 0) { // Перевірити, чи значення лічильника дорівнює 0
    timerDocument.textContent = "Лічильник завершено!"; // Встановити текстовий вміст елементу timerDocument на "Лічильник завершено!"
    clearInterval(timeout); // Зупинити виконання інтервалу, очищаючи інтервал з ідентифікатором timeout
  }
}

let timeout = setInterval(updateTimer, 1000); // Викликати функцію updateTimer кожні 1000 мілісекунд (1 секунда) і присвоїти ідентифікатор інтервалу змінній timeout
*/



/*
Урок №20
Як використовувати регулярні вирази для зіставлення зразків

let pattern1 = /\d/i; // Регулярний вираз для збігу з будь-якою цифрою (\d) з ігноруванням регістру (i)
let pattern2 = new RegExp("pattern"); // Регулярний вираз, створений за допомогою конструктора RegExp
let text = "Hello World"; // Рядок, з яким будуть порівнюватися регулярні вирази
let isMatch = pattern1.test(text); // Перевірка, чи збігається регулярний вираз pattern1 з текстом
console.log(isMatch); // Виведення результату перевірки на консоль
let matches = text.match(pattern1); // Пошук всіх збігів регулярного виразу pattern1 в тексті
console.log(matches); // Виведення знайдених збігів на консоль
*/

// Основні символи регулярних виразів
// i	Співставлення без урахування регістру
// g	Виконати глобальне співставлення (знайти всі збіги, а не зупинятися після першого збігу)
// m	Виконати багаторядкове співставлення
// [abc]	Знайти будь-який символ в скобках
// [0-9]	Знайти будь-яку з цифр в скобках
// x|y)	Знайти будь-яку з альтернатив, розділених |
// \d	Знайти цифру
// \s	Знайти символ пробілу
// \b	Знайти збіг на початку такого слова: \bWORD, або в кінці такого слова: WORD\b	

/*
Домашнє завдання урок №20
Напишіть код на JavaScript, який використовує регулярний вираз для знаходження всіх 
голосних букв у рядку. Використовуйте флаг `g` для пошуку усіх відповідностей.

let vowelsTheOrder = /[aeiou]/g;
let stringOfVowels = "This line contains vowels";
let matches1 = stringOfVowels.match(vowelsTheOrder);
console.log(matches1);
*/





/*
Урок №21
Як використовувати слухачі подій для реагування на дії користувачів
*/
/*
let button = document.querySelector("#myButton"); // Вибираємо елемент з ідентифікатором "myButton" і зберігаємо його в змінну button
button.addEventListener('click', (event) => { // Додаємо обробник події "click" до кнопки
  alert("Button clicked"); // Виводимо спливаюче повідомлення "Button clicked"
  console.log(event); // Виводимо об'єкт події на консоль
})
*/

/*
let button = document.getElementById("myButton"); // Вибираємо елемент з ідентифікатором "myButton" і зберігаємо його в змінну button
button.addEventListener('click', function(){ // Додаємо обробник події "click" до кнопки
  document.body.style.backgroundColor = "black"; // Змінюємо колір фону тіла документа на чорний
})
*/

/*
Домашнє завдання урок №21
Напишіть код JavaScript, який додає прослуховувач події "click" 
до кнопки з ідентифікатором "myButton". При кліку на кнопку, функція
 має змінювати колір тексту на сторінці на синій.

let button = document.getElementById("myButton"); // Вибираємо елемент з ідентифікатором "myButton" і зберігаємо його в змінну button
button.addEventListener('click', () => { // Додаємо прослуховувач події "click" до кнопки
  document.body.style.color = "blue"; // Змінюємо колір тексту на сторінці на синій
});
*/



/*
Урок №22
Як використовувати API classList для додавання та видалення класів CSS

let p = document.querySelector("p"); // Вибираємо перший елемент <p> на сторінці і зберігаємо його в змінну p
p.classList.add("bold"); // Додаємо клас "bold" до елемента p
console.log(p.classList); // Виводимо список класів елемента p на консоль



document.getElementById("myButton").addEventListener("click", function(){ // Додаємо прослуховувач події "click" до елемента з ідентифікатором "myButton"
  this.classList.toggle("red"); // Додаємо або видаляємо клас "red" у елемента, залежно від його наявності
  this.classList.toggle("highlight"); // Додаємо або видаляємо клас "highlight" у елемента, залежно від його наявності
})
*/


/*
Домашнє завдання урок №22
Напишіть код JavaScript, який додає клас 
“highlighted” (з підкресленням) до елемента з ідентифікатором “myElement” 
за умови, що цей клас ще не присутній у цьому елементі. Використайте 
API classList для цього завдання.


document.getElementById("myElement").addEventListener("click", function(){
  this.classList.toggle("highlight")
});
*/


/*
Урок №23
Розуміння обробки помилок та налагодження JavaScript
*/
/*
// Приклад №1
document.getElementById("myElement").addEventListener("click", function(){
  this.classList.toggle("highlight")
});
try{
  console.log(foo.bar)
} catch (error){
  console.log("We got an error:", error.name);
  console.log(error.message);
} finally {
  console.log("Thanks for using our app")
}
console.log("Some text");
*/


/*
Домашнє завдання урок №23
Напишіть код у JavaScript, який демонструє використання оператора `throw` для створення власного винятку, 
коли число є від'ємним. Використайте блок `try...catch`, щоб обробити цей виняток та вивести відповідне повідомлення у консоль.

function checkPositive(number){
  if(number <= 0){
    throw new Error("The number must be positive"); // Викидаємо новий об'єкт помилки з повідомленням "The number must be positive", якщо число менше або дорівнює нулю
  }
  console.log("The number is positive:", number); // Виводимо повідомлення "The number is positive:" разом з числом
}

let a = -5; // Ініціалізуємо змінну a зі значенням -5

try {
  checkPositive(a); // Викликаємо функцію checkPositive з аргументом a
} catch (err) {
  console.log("Ops, something went wrong:", err.message); // Виводимо повідомлення "Ops, something went wrong:" разом з повідомленням про помилку, яке міститься в об'єкті помилки
}
*/


/*
Урок №24
Як працювати з даними JSON
*/

/*
Домашнє завдання урок №24
Напишіть код на JavaScript, який створює об'єкт JavaScript із наступними властивостями: `name: "John", age: 28, hobbies: 
["swimming", "reading"]`. Потім використовуйте метод `JSON.stringify()`, щоб перетворити цей об'єкт на рядок у форматі JSON, 
і виведіть цей рядок у консоль.

let person = {
  "name": "John", // Властивість "name" зі значенням "John"
  "age": 28, // Властивість "age" зі значенням 28
  "hobbies": ["swimming", "reading"] // Властивість "hobbies" з масивом значень ["swimming", "reading"]
}; 

let json = JSON.stringify(person); // Перетворюємо об'єкт person в рядок у форматі JSON за допомогою методу JSON.stringify()
console.log(json); // Виводимо отриманий рядок у консоль
*/




/*
Урок №25
Як використовувати AJAX для виконання асинхронних HTTP-запитів

let container = document.getElementById("products"); // Отримуємо посилання на елемент з id "products"
let xhr = new XMLHttpRequest(); // Створюємо новий об'єкт XMLHttpRequest
xhr.open("GET", 'https://dummyjson.com/products'); // Встановлюємо метод та URL для запиту
xhr.send(); // Відправляємо запит на сервер

xhr.onload = function () {
  if (xhr.status === 200) { // Перевіряємо статус відповіді
    const data = JSON.parse(xhr.responseText); // Розпарсюємо отримані дані з формату JSON
    const products = data.products; // Отримуємо масив продуктів з отриманих даних

    for (let i = 0; i < products.length; i++){ // Проходимося по кожному продукту
      let product = products[i]; // Отримуємо поточний продукт

      let element = document.createElement("div"); // Створюємо новий елемент div
      element.className = "product"; // Встановлюємо клас елементу
      element.innerHTML = `
      <h3>${product.title}</h3> // Встановлюємо заголовок з назвою продукту
      <h3>${product.price}</h3> // Встановлюємо заголовок з ціною продукту
      <h3>${product.rating}</h3> // Встановлюємо заголовок з рейтингом продукту
      `;
      container.appendChild(element); // Додаємо елемент до контейнера
    }
  } else {
    console.log("Error fetching data"); // Виводимо повідомлення про помилку отримання даних
  }
}
*/

/*
Домашнє завдання урок №25
Напишіть JavaScript код, який використовує AJAX для отримання даних з URL "https://dummyjson.com/products". 
Використовуйте XMLHttpRequest для створення запиту.
У випадку успішної відповіді виведіть отримані дані у консоль, у разі помилки - виведіть повідомлення про помилку.

let container = document.getElementById("products"); // Отримуємо посилання на елемент з id "products"
let xhr = new XMLHttpRequest(); // Створюємо новий об'єкт XMLHttpRequest
xhr.open("GET", 'https://dummyjson.com/products'); // Встановлюємо метод та URL для запиту
xhr.send(); // Відправляємо запит на сервер

xhr.onload = function () {
  if (xhr.status === 200) { // Перевіряємо статус відповіді
    const data = JSON.parse(xhr.responseText); // Розпарсюємо отримані дані з формату JSON
    console.log(data);
    const products = data.products; // Отримуємо масив продуктів з отриманих даних
  } else {
    console.log("Error fetching data"); // Виводимо повідомлення про помилку отримання даних
  }
}
*/





/*
Урок №26
Як використовувати проміси та asyncawait для асинхронного програмування
*/

/*
// приклад №1 з використанням методу .then
let checkWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Sunny"); // Виклик resolve, якщо отримано дані про погоду
    } else {
      reject("Failed to get weather data"); // Виклик reject у разі помилки отримання даних
    }
  }, 2000)
});
checkWeather
.then(weather => console.log(`Weather is: ${weather}`))
.catch(error => console.log(`Error: ${error}`));
*/

/*
// приклад №2 з використанням async await
// Ця функція використовує async await для отримання поточної погоди
async function getWeather(){
  // Спроба отримати погоду
  try {
    // За допомогою функції checkWeather отримаємо погоду
    let weather = await checkWeather;
    // Виведемо погоду на консоль
    console.log(`Weather is: ${weather}`)
  } catch (error) {
    // У разі помилки виведемо її на консоль
    console.log(`Error: ${error}`)
  }
}
// Виклик функції
getWeather();
*/



/*
Домашнє завдання урок №26
Напишіть функцію на JavaScript, яка використовує Promise для імітації 
перевірки стану з'єднання з інтернетом. Функція повинна повертати 
"З'єднання є" або "З'єднання відсутнє", в залежності від результату 
перевірки. Використовуйте async/await для обробки результату Promise.

// Ця функція імітує перевірку з'єднання з інтернетом.
// Вона повертає Promise, який містить результат перевірки.
let checKonnect = new Promise((resolve, reject) => {
  // Затримка на 2 секунди
  setTimeout(() => {
    // Якщо випадкове число більше 0.5,
    // то з'єднання є, і функція resolve() повертає "З'єднання є".
    if (Math.random() > 0.5) {
      resolve("З'єднання є");
    } else {
      // Інакше з'єднання відсутнє, і функція reject() повертає "З'єднання відсутнє".
      reject("З'єднання відсутнє");
    }
  }, 2000);
});

// Ця функція використовує async/await для обробки результату Promise,
// поверненого функцією checKonnect().
async function internetConnectionStatus() {
  // Спроба отримати результат перевірки з'єднання.
  try {
    // Результат перевірки зберігається в змінній connect.
    let connect = await checKonnect;
    // Результат перевірки виводиться на консоль.
    console.log(connect);
  } catch (error) {
    // У разі помилки виводиться повідомлення про неї.
    console.log(error);
  }
}

// Виклик функції internetConnectionStatus().
internetConnectionStatus();
*/

/*
Урок №27
Як використовувати API fetch для виконання HTTP-запитів
*/

/*
// приклад №1
fetch("https://dummyjson.com/users/1")
  .then(response => {
    if (response.ok){
      return response.json();
    } else {
      throw new Error("Something went wrong")
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
*/

/*
// приклад №2
  const newUser = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "jondoe@gmail.com"
  };

  
  // вариант №1
  fetch('https://dummyjson.com/users/add', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
  .then(response => {
    if (response.ok){
      return response.json();
    } else {
      throw new Error("Something went wrong")
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });


  // вариант №2
// Ця функція використовується для створення нового користувача за допомогою POST-запиту.
async function createUser() {
  try {
    // Відправка POST-запиту на API-endpoint для створення користувача
    let response = await fetch('https://dummyjson.com/users/add', {
      // Використання методу POST
      method: "POST",
      // Зазначення заголовків запиту
      headers: {
        // Встановлення Content-Type на JSON, оскільки ми відправляємо дані в JSON-форматі
        "Content-Type": "application/json"
      },
      // Включення даних користувача в тіло запиту в JSON-форматі
      body: JSON.stringify(newUser)
    });
 
    // Перевірка успішності відповіді
    if (response.ok) {
      // Отримання даних з відповіді в форматі JSON
      let data = await response.json();
      // Виведення даних на консоль
      console.log(data);
    } else {
      // Якщо відповідь не успішна, кидається помилка
      throw new Error("Something went wrong");
    }
  } catch (error) {
    // Обробка можливих помилок під час виконання запиту
    console.log(error);
  }
 }
 // Виклик функції для створення користувача
 createUser();
 */


/*
Домашнє завдання урок №27
Напишіть функцію на JavaScript, яка використовує Fetch API для 
виконання POST-запиту для створення нового користувача на сервері. 
Використовуйте URL `https://dummyjson.com/users/add` 
і передайте наступні дані 
користувача у тілі запиту: `firstName: "Ivan", lastName: "Ivanov", username: "ivanivanov", 
email: "ivanivanov@example.com"`. Функція повинна обробляти відповідь сервера і виводити результат у консоль.

const newUser = {
  firstName: "Ivan",
  lastName: "Ivanov",
  username: "ivanivanov",
  email: "ivanivanov@example.com"
};

async function createUser() {
  try {
    // Відправка POST-запиту на API-endpoint для створення користувача
    let response = await fetch('https://dummyjson.com/users/add', {
      // Використання методу POST
      method: "POST",
      // Зазначення заголовків запиту
      headers: {
        // Встановлення Content-Type на JSON, оскільки ми відправляємо дані в JSON-форматі
        "Content-Type": "application/json"
      },
      // Включення даних користувача в тіло запиту в JSON-форматі
      body: JSON.stringify(newUser)
    });
 
    // Перевірка успішності відповіді
    if (response.ok) {
      // Отримання даних з відповіді в форматі JSON
      let data = await response.json();
      // Виведення даних на консоль
      console.log(data);
    } else {
      // Якщо відповідь не успішна, кидається помилка
      throw new Error("Something went wrong");
    }
  } catch (error) {
    // Обробка можливих помилок під час виконання запиту
    console.log(error);
  }
 }
 // Виклик функції для створення користувача
 createUser();
*/




/*
Домашнє завдання урок №28
Напишіть невеликий скрипт JavaScript, який використовує об'єкт 
Window для відображення діалогового вікна з повідомленням, яке містить 
поточний URL сторінки і поточні координати прокрутки вікна.


let locationHref = window.location;
let scrollX = window.scrollX;
let scrollY = window.scrollY;
window.alert(`${locationHref}, ${scrollX}, ${scrollY}`);
*/




/*
Урок №29
Як працювати з cookies та локальним сховищем

function getCookies(cookieName) {
  // Отримуємо всі cookie з документа
  let cookies = document.cookie.split(";");

  // Перебираємо всі cookie
  for (let cookie of cookies) {
    // Перевіряємо, чи починається cookie з назви cookie, переданої в аргументі
    if (cookie.startsWith(cookieName + "=")) {
      // Повертаємо значення cookie
      return cookie.substring(cookieName.length + 1);
    }
  }

  // Повертаємо пусту строку, якщо cookie не знайдено
  return "";
}
*/


/*
Домашнє завдання урок №29
Напишіть функцію на JavaScript під назвою `saveSettings`, яка зберігає налаштування користувача 
у local storage (локальне сховище). Функція повинна приймати два аргументи: назву налаштування (наприклад, "theme") 
та його значення (наприклад, "dark"). Використайте метод `setItem` для зберігання цих налаштувань.

// Функція для зберігання налаштувань користувача у локальному сховищі
function saveSettings(theme, dark) {
  // Зберігаємо налаштування "theme" зі значенням "dark"
  // Метод `setItem()` зберігає ключ-значення у локальному сховищі
  window.localStorage.setItem(theme, dark);
}
// Використання функції
saveSettings("theme", "dark");
*/




/*
Урок №30
Як створювати анімації та візуальні ефекти за допомогою JavaScript та CSS

let element = document.getElementById("product");
let position = 0;

function animate() {
  position++;
  element.style.transform = `translateX(${position}px)`;

  if (position >= window.innerWidth - element.offsetWidth){
    return;
  }
  requestAnimationFrame(animate);
};
animate();
*/

/*
Домашнє завдання урок №30
Напишіть JavaScript-код, який створює анімацію для 
переміщення HTML-елемента з класом "product" вертикально вгору 
і вниз на екрані. Використовуйте метод `requestAnimationFrame` 
і забезпечте, щоб елемент зупинявся, коли досягає верхнього і 
нижнього краю вікна браузера.

// Отримання посилання на HTML-елемент з ідентифікатором "product"
let element = document.getElementById("product");

// Початкова позиція елемента
let position = 0;

// Напрямок руху елемента: 1 - вниз, -1 - вгору
let direction = 1;

// Функція для анімації руху елемента
function animate() {
  // Зміна позиції відповідно до напрямку руху
  position += direction;

  // Застосування трансформації для зміни положення елемента
  element.style.transform = `translateY(${position}px)`;

  // Перевірка, чи досяг елемент верхнього краю вікна браузера
  // Якщо так, змінюємо напрямок на вгору
  if (position >= window.innerHeight - element.offsetHeight) {
    direction = -1;
  }
  // Перевірка, чи досяг елемент нижнього краю вікна браузера
  // Якщо так, змінюємо напрямок на вниз
  else if (position <= 0) {
    direction = 1;
  }

  // Виклик функції анімації знову за допомогою `requestAnimationFrame`
  // для плавної анімації
  requestAnimationFrame(animate);
}

// Запуск анімації
animate();
*/





/*
Урок №32
Як використовувати WebSockets для комунікації реального часу

// Створюємо новий об'єкт WebSocket
const socket = new WebSocket('wss://ws.ifelse.io/');

// Встановлення з'єднання
socket.onopen = function(event){
  console.log("Connection established")
}

// Обробка отриманих повідомлень
socket.onmessage = function(event){
  console.log("Message recieved:", event.data);
}

// Обробка помилок WebSocket
socket.onerror = function(event){
  console.log("WebSocket error:", event)
}

// Обробка закриття з'єднання
socket.onclose = function(event){
  console.log("Connection closed:", event)
}
*/

/*
Домашнє завдання урок №32
Напишіть код на JavaScript, який створює новий 
WebSocket, налаштовує обробники подій `onmessage` 
і `onerror`, а потім відправляє повідомлення "Привіт,
 сервер!" через це з'єднання.

// Створюємо новий об'єкт WebSocket
const socket = new WebSocket('wss://ws.ifelse.io/');

// Обробник події при отриманні повідомлення від сервера
socket.onmessage = function(event){
  console.log("Привіт, сервер!", event)
}

// Обробник події при виникненні помилки WebSocket
socket.onerror = function(event){
  console.log("WebSocket error:", event)
}
*/


/*
Урок №33
Розуміння підняття JavaScript

// Оголошення функції "sayHello"
function sayHello(){
  console.log("Hello 1")
};

// Оголошення анонімної функції і присвоєння її до змінної "sayHello" або функціональний вираз
const sayHello1 = function(){
  console.log("hello 2")
};

// Оголошення анонімної функції з ім'ям "hello" і присвоєння її до змінної "sayHello" або функціональний вираз
const sayHello2 = function hello(){
  console.log("hello 3")
}
*/


/*
Домашнє завдання урок №33

Напишіть фрагмент коду JavaScript, де 
створюється функціональний вираз з ім'ям `showMessage` 
і виведіть його в консоль перед та після присвоєння функції 
змінній. Обговоріть результати кожного виклику.

//showMessage();
const showMessage = () => {
  console.log("Hello World")
}
showMessage();
*/




/*
Урок №34
Розуміння ключового слова 'this' в JavaScript


// приклад №1
// Оголошення глобальної змінної "name"
var name = "Alice";

// Вивід значення глобальної змінної "name" за допомогою "this"
console.log(this.name);

// Вивід значення глобальної змінної "name" через об'єкт "window"
console.log(window.name);

// Порівняння значень глобальної змінної "name" через "this" та "window"
console.log(this.name === window.name);

// Оголошення функції "sayHello", яка виводить "Hello" разом з значенням "name"
function sayHello(){
  console.log("Hello, " + this.name)
}

// Виклик функції "sayHello" без прив'язки до об'єкта
sayHello();

// Виклик функції "sayHello" через об'єкт "window"
window.sayHello();

// Виклик функції "sayHello" через "this"
this.sayHello();

// Оголошення функції "sayHello", яка виводить "Hello" разом з значенням "name"
function sayHello(){
  console.log("Hello, " + this.name)
}

// Оголошення глобальної змінної "name" зі значенням "Alice"
var name = "Alice"

// Виклик функції "sayHello" після зміни значення глобальної змінної "name" на "Alice"
sayHello();

// Зміна значення глобальної змінної "name" на "Bob"
var name = "Bob";

// Виклик функції "sayHello" після зміни значення глобальної змінної "name" на "Bob"
sayHello();

// приклад №2
// Об'єкт "person" з властивостями "name" та "age" і методами "sayHello" та "getOlder"
let person  = {
  name: "Alice",
  age: 25,
  sayHello: function(){
    console.log(`Hello, ${this.name}`);
  },
  getOlder: function(){
    this.age++;
    console.log(`Happy birthday, ${this.name}! You are now ${this.age} years old.`)
  }
}

// приклад №3
// Оголошення функції-конструктора "Car" з параметрами "make" та "model"
function Car(make, model){
  this.make = make;
  this.model = model;
}

// Створення нового об'єкта "myCar" за допомогою конструктора "Car"
const myCar = new Car("Toyota", "Camry");

// Вивід об'єкту "myCar" у консоль
console.log(myCar)
*/



/*
Домашнє завдання урок №34
Напишіть функцію-конструктор `User`, яка приймає ім'я і вік 
користувача як параметри. Створіть метод `showInfo`, який виводить 
інформацію про користувача, використовуючи `this`. Створіть екземпляр 
цього конструктора та викличте метод `showInfo`.
 

// Оголошення функції-конструктора `User` з параметрами `name` і `age`
function User(name, age){ 
  // Присвоєння значення параметра `name` властивості `name` об'єкта
  this.name = name; 
  // Присвоєння значення параметра `age` властивості `age` об'єкта
  this.age = age;
  
  // Оголошення методу `showInfo`, який виводить інформацію про користувача
  this.showInfo = function(){
    // Виведення значення властивостей `name` і `age` об'єкта
    console.log(`${this.name}, ${this.age}`);
  }
};

// Створення нового екземпляра об'єкта `User` з ім'ям "Bob" і віком 25
const user = new User("Bob", 25);

// Виклик методу `showInfo` на екземплярі об'єкта `user`
user.showInfo();
*/

/*
Домашнє завдання урок №35
Напишіть невелику функцію в JavaScript, 
яка демонструє різницю в поведінці при спробі 
присвоїти значення недекларованій змінній у 
Строгому Режимі та без нього. Спочатку напишіть 
код без Строгого Режиму, а потім додайте 'use strict'; 
та покажіть зміну в поведінці

"use strict"
function f(){
  return this
}
console.log(f())
*/








/*
Урок №36
Розуміння прототипів та наслідування JavaScript
*/



/* приклад №1 це стара версія використання конструкторів для створення прототипу об'єкта

// Функція Animal є конструктором для створення об'єктів типу Animal.
// Вона приймає один аргумент - ім'я тварини.
// Всередині функції ініціалізується властивість name об'єкта.

function Animal(name) {
  this.name = name;
}

// Функція Animal.prototype.eat є методі об'єктів типу Animal.
// Вона виводить в консоль повідомлення про те, що тварина їсть.

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating`);
};

// Функція Dog є конструктором для створення об'єктів типу Dog.
// Вона приймає два аргументи - ім'я собаки та породу.
// Всередині функції викликається конструктор Animal з ім'ям собаки як аргументом.
// Також ініціалізується властивість breed об'єкта.

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Функція Dog.prototype = Object.create(Animal.prototype) встановлює прототип об'єктів типу Dog прототипом об'єктів типу Animal.

Dog.prototype = Object.create(Animal.prototype);

// Функція Dog.prototype.constructor = Dog встановлює конструктор об'єктів типу Dog як Dog.

Dog.prototype.constructor = Dog;

// Функція Dog.prototype.bark є методі об'єктів типу Dog.
// Вона виводить в консоль повідомлення про те, що собака гавкає.

Dog.prototype.bark = function() {
  console.log(`${this.name} is barking`);
};

// Створюємо новий об'єкт типу Dog з ім'ям Max і породою Labrador.

const max = new Dog("Max", "Labrador");

// Викликаємо метод eat() об'єкта max.

max.eat();

// Викликаємо метод bark() об'єкта max.

max.bark();
// Функція Animal є конструктором для створення об'єктів типу Animal. Це означає, що вона може використовуватися для створення нових об'єктів типу Animal.
// Функція Animal.prototype.eat є методі об'єктів типу Animal. Це означає, що вона може використовуватися будь-яким об'єктом типу Animal.
// Функція Dog є конструктором для створення об'єктів типу Dog. Вона приймає два аргументи - ім'я собаки та породу.
// Функція Dog.prototype = Object.create(Animal.prototype) встановлює прототип об'єктів типу Dog прототипом об'єктів типу Animal. Це означає, що об'єкти типу Dog успадковують властивості та методи об'єктів типу Animal.
// Функція Dog.prototype.constructor = Dog встановлює конструктор об'єктів типу Dog як Dog. Це означає, що об'єкти типу Dog будуть створюватися за допомогою конструктора Dog.
*/



/* приклад №2 новий метод з використанням класів
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark(){
    console.log(`${this.name} is barking`);
  }
}

const max = new Dog("Max", "Labrador");
max.eat();
max.bark();
*/




/*

Домашнє завдання урок №36

Створіть клас `Bird`, який буде успадковувати 

від класу `Animal`. Клас `Bird` повинен мати додатковий метод `fly()`,

 який виводить у консоль фразу "<Ім'я птаха> is flying." 

 Напишіть код для створення екземпляру класу `Bird` 

 з ім'ям "Charlie" та викликайте його методи `eat()` та `fly()`.



class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Bird extends Animal {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name} is flying.`);
  }
}

const charlie = new Bird("Charlie");

charlie.eat();
charlie.fly();
*/



/*
Тема: Розуміння циклу подій JavaScript
Домашнє завдання урок №37
Напишіть простий код JavaScript, 
де використовується функція `setTimeout()`.
Код повинен демонструвати, як JavaScript обробляє 
синхронні та асинхронні операції. Поясніть порядок
виведення повідомлень у консоль та чому це відбувається саме так.


setTimeout( () => {
  console.log("Hello")
}, 3000)
*/




/*
Тема: Розуміння контексту виконання та ланцюга області видимості JavaScript
Домашнє завдання урок №38
Напишіть функцію на JavaScript, 
яка ілюструє концепцію ланцюга областей 
видимості. У вашому коді має бути глобальна 
змінна, функція, що оголошує локальну змінну, 
і вкладена функція, яка спробує доступитися до 
обох цих змінних. Зверніть увагу на те, як 
змінні розпізнаються у різних областях видимості.


let thisGlobalVariable = "Global"; // Оголошення глобальної змінної thisGlobalVariable зі значенням "Global"

function declaresLocalVariable() {
  let thisLocalVariable = "Local" // Оголошення локальної змінної thisLocalVariable зі значенням "Local"

  function thisNestedFunction() {
    console.log(`Are global and local variables: ${thisGlobalVariable}, ${thisLocalVariable}`); // Виведення значень глобальної та локальної змінних у консоль
  }

  thisNestedFunction(); // Виклик вкладеної функції thisNestedFunction()
}

declaresLocalVariable(); // Виклик функції declaresLocalVariable()
*/




/*
Урок №39
Розуміння замикань JavaScript

// Приклад №1
// Создает функцию-генератор счетчиков, используя замыкание
const makeCounter = () => {
  // Объявляет переменную count для хранения текущего значения счетчика (приватная переменная)
  let count = 0;
 
  // Возвращает функцию-генератор, которая увеличивает и возвращает значение счетчика
  return function () {
    // Увеличивает значение счетчика на 1
    count++;
 
    // Возвращает текущее значение счетчика
    return count;
  };
 };
 
 // Создает экземпляр счетчика с помощью функции makeCounter
 let counter = makeCounter();
 
 // Вызывает счетчик три раза и выводит значения
 console.log(counter()); // Выведет 1
 console.log(counter()); // Выведет 2
 console.log(counter()); // Выведет 3
 


// Приклад №2 використання замикань для створення приватних змінних і методів
// Создает функцию, которая возвращает объект, представляющий банковский счет
const makeBankAccount = (initialBalance) => {
  // Объявляет переменную для хранения текущего баланса счета (приватная переменная)
  let balance = initialBalance;

  // Возвращает объект с методами для управления счетом
  return {
    // Метод для получения текущего баланса
    getBalance: function () {
      return balance;
    },

    // Метод для внесения депозита на счет
    deposit: function (amount) {
      balance += amount;
    },

    // Метод для снятия средств со счета
    withdraw: function (amount) {
      balance -= amount;
    }
  };
};




// Приклад №3 використовувати замикання для створення фабрик функцій (function factories)
// Создает функцию, которая возвращает другую функцию для генерации приветствий на разных языках
const makeGreeting = (language) => {
  // Возвращает функцию, которая принимает имя и возвращает приветствие на заданном языке
  return name => {
    // Выбирает приветствие на основе языка
    switch (language) {
      case "English":
        return `Hello, ${name}!`;
      case "French": // Исправлена опечатка "Franch" на "French"
        return `Bonjour, ${name}!`;
      case "Spanish":
        return `Hola, ${name}!`;
      default:
        return "Unknown language";
    }
  };
};





// Приклад №4 створення обробників подій event handlers і зворотних викликів callbacks
window.onload = () => {
  // Ініціалізуємо лічильник
  let counter = 0;

  // Отримуємо посилання на кнопку за допомогою її id
  let button = document.getElementById("button");

  // Отримуємо посилання на елемент, який відображає значення
  let display = document.getElementById("display");

  // Встановлюємо обробник події для кліку на кнопку
  button.onclick = () => {
    // Збільшуємо значення лічильника на 1
    counter++;

    // Оновлюємо вміст елементу, що відображає значення, з новим значенням лічильника
    display.innerHTML = counter;
  };
};
*/



/*
Домашне завдання урок №39
Напишіть функцію на JavaScript, використовуючи концепцію замикання, 
яка створює об'єкт "лічильника" з методами для збільшення, 
зменшення та відображення поточного стану лічильника.

window.onload = () => {
  // Ініціалізуємо лічильник
  let counter = 0;

  // Отримуємо посилання на кнопку збільшення за допомогою її id
  let button1 = document.getElementById("increaseButton");

  // Отримуємо посилання на кнопку зменшення за допомогою її id
  let button2 = document.getElementById("decreaseButton");

  // Отримуємо посилання на елемент, який відображає значення
  let display = document.getElementById("display");

  // Встановлюємо обробник події для кліку на кнопку збільшення
  button1.onclick = () => {
    // Збільшуємо значення лічильника на 1
    counter++;

    // Оновлюємо вміст елементу, що відображає значення, з новим значенням лічильника
    display.innerHTML = counter;
  };

  // Встановлюємо обробник події для кліку на кнопку зменшення
  button2.onclick = () => {
    // Зменшуємо значення лічильника на 1
    counter--;

    // Оновлюємо вміст елементу, що відображає значення, з новим значенням лічильника
    display.innerHTML = counter;
  };
};
*/





/*
Урок №40
Розуміння функцій map, reduce та filter JavaScript
*/

/*
Приклад map
Основна функція методу `map` у JavaScript - використовується для трасформації 
кожного елемента в масиві. Вона приймає функцію як аргкмент 
і застосовує цю функцію до кожного елемента масиву, повертаючи новий масив з трасформованими елементами.

// Приклад №1: Подвоюємо кожне число:
const numbers = [1, 2, 3, 4, 5];
// Використовуємо метод map для створення нового масиву,
// в якому кожне число буде подвоєне
const dubled = numbers.map(number => number * 2);
// Виводимо результат у консоль
console.log(dubled);
*/



/*
Приклад filter
Метод `filter` використовується для створення нового масиву, 
який містить лише ті елементи, які задовольняють певну умову, визначену у функції.  
Наприклад якщо ми хочемо відфільтрувати число які більше за 3,з нашего масиву, ми можемо використовувати filter:

// Приклад №2: Тут filter перевіряє кожне число і включає до нового масиву тільки ті, що більше за 3.
const numbers_1 = [1, 2, 3, 4, 5];
// Використовуємо метод filter для створення нового масиву,
// в якому залишаються тільки числа, що більше за 3
const filtered = numbers_1.filter(number => number > 3);
// Виводимо результат у консоль
console.log(filtered);
*/


/*
Приклад reduce
Метод `reduce` працює зводить масив до одного значення, застосовуючи функцію до кожного елемента і переносить результат далі. 
Наприклад: якщо ми хочемо знайти суму всіх чисел у нашему масиві, ми можемо використовувати  reduce для цього:

// Приклад №3: У цьому прикладі reduce починає з загальної суми 0 і додає до цієї суми кожне число.
const numbers_2 = [1, 2, 3, 4, 5];
// Використовуємо метод reduce для обчислення суми чисел з масиву numbers_2.
// Починаємо з початкового значення total = 0 і додаємо до нього кожне число з масиву.
const sum = numbers_2.reduce((total, number) => total + number, 0);
// Виводимо результат у консоль
console.log(sum);
*/


/*
Приклад використання map, filter, reduce

// Приклад №4
const numbers_3 = [1, 2, 3, 4, 5];
const combined = numbers_3.map(n => n * 2).filter(n => n > 5).reduce((total, n) => total + n, 0);
console.log(combined);
*/


/*
Домашне завдання урок №40
Напишіть функцію на JavaScript, яка використовує методи
 `map`, `filter` та `reduce` для трансформації масиву `numbers = [1, 2, 3, 4, 5]` 
 таким чином, щоб спочатку кожне число було помножено на 3, потім з масиву були 
 видалені всі числа, менші за 10, а в кінці вирахувати середнє арифметичне отриманих чисел.

const numbers_4 = [1, 2, 3, 4, 5];
const arrayTransformations = numbers_4
  .map(n => n * 3)
  .filter(n => n > 10)
  .reduce((total, n) => total + n, 0) / numbers_4.length;
console.log(arrayTransformations);
*/



/*
Урок №41
Розуміння деструктивного присвоєння JavaScript
*/

/*
Приклад №1 
Припустимо шо ви хочете присвоїти числа їх трьом змінним з іменами х, y, z.
 Тут ми використовуємо квадратні дужки, щоб вказати, що ми деструктуризуємо масив і перераховуємо зміні, 
 яким ми хочемо присвоїти значення, у тому ж порядку, в якому вони з'являються в масиві
 
 let numbers = [1, 2, 3];
// Використовуємо деструктуризацію, щоб присвоїти значення з масиву numbers змінним x, y, z
let [x, y, z] = numbers;
// Зауваження: Змінні x, y, z тепер містять відповідно значення 1, 2, 3
*/



/*
Приклад №2
Присвоєння першого та третього значення в масиві x, z

let numbers_1 = [1, 2, 3];
// Використовуємо деструктуризацію, щоб присвоїти значення з масиву numbers_1 змінним x, y, z
let [x, , z] = numbers_1;
// Зауваження: Змінна x містить значення першого елемента масиву (1),
// Змінна y пропускає другий елемент масиву,
// Змінна z містить значення третього елемента масиву (3)
*/



/*
Приклад №3
Тут ми використовуємо фігурні дужки щоб вказати що ми дестрруктузуємо об'єкт і перераховуємо змінні яким ми хочемо присвоїти значення.

let person = {
  name: "Alice",
  age: 25,
  gender: "female",
  occupation: "software engineer",
}
// Використовуємо деструктуризацію, щоб присвоїти значення властивостей об'єкта person змінним name, age, gender, occupation
let {name, age, gender, occupation} = person;
// Зауваження: Змінна name містить значення властивості name об'єкта person ("Alice"),
// Змінна age містить значення властивості age об'єкта person (25),
// Змінна gender містить значення властивості gender об'єкта person ("female"),
// Змінна occupation містить значення властивості occupation об'єкта person ("software engineer")
*/



/*
Домашне завдання урок №41
Напишіть функцію `extractInfo`, яка приймає об'єкт `person` з властивостями 
`name`, `age`, `occupation`, і використовуючи деструктуризацію, повертає рядок, 
що містить ім'я та професію цієї особи. Наприклад, для об'єкта `{ name: "Alice", age: 30, occupation: "developer" }` 
функція повинна повернути "Alice is a developer".

function extractInfo(person) {
  const { name, occupation } = person; // Витягуємо значення властивостей name та occupation з об'єкта person
  return `${name} is a ${occupation}`; // Повертаємо рядок, що містить ім'я та професію особи
}

const person = { 
  name: "Alice", 
  age: 30, 
  occupation: "developer" };

const info = extractInfo(person); // Викликаємо функцію extractInfo з об'єктом person

console.log(info); // Виводимо результат в консоль
*/


/*
Урок №42
Розуміння генераторів та ітераторів JavaScript


// Приклад №1
// Оголошуємо функцію-генератор `counter`
function* counter() {
  let i = 0;
  while (true) {
    yield i++; // Використовуємо ключове слово `yield` для повернення значення `i` та збільшення його на 1
  }
}
// Створюємо об'єкт генератора
const generatorObj = counter();
// Викликаємо метод `.next()` на об'єкті генератора
console.log(generatorObj.next()); // Виводимо об'єкт, що містить поточне значення генератора


// Оголошуємо функцію-генератор `counter`
function* counter() {
  let i = 0; // Ініціалізуємо змінну `i` внутрішнього блоку
  for (let i = 0; i < 100; i++) { // Використовуємо цикл `for` для ітерації від 0 до 99
    yield i; // Використовуємо ключове слово `yield` для повернення значення `i`
  }
}
// Створюємо об'єкт генератора
const generatorObj_1 = counter();
// Викликаємо метод `.next()` на об'єкті генератора
console.log(generatorObj_1.next()); // Виводимо об'єкт, що містить поточне значення генератора
*/



/*
Домашне завдання №42
Напишіть функцію-генератор `generateEvenNumbers()`, 
яка при кожному виклику методу `.next()` повертатиме 
наступне парне число, починаючи з нуля.

// Оголошуємо функцію-генератор `generateEvenNumbers`
function* generateEvenNumbers() {
  let currentEven = 0; // Ініціалізуємо змінну `currentEven` зі значенням 0
  while (true) { // Виконуємо цикл безумовної ітерації
    yield currentEven; // Використовуємо ключове слово `yield` для повернення значення `currentEven`
    currentEven += 2; // Збільшуємо значення `currentEven` на 2
  }
}
// Створюємо об'єкт генератора
const generator = generateEvenNumbers();
// Викликаємо метод `.next()` на об'єкті генератора та виводимо значення
console.log(generator.next().value); // Виводимо поточне парне число, яке є значенням `currentEven`
console.log(generator.next().value); // Виводимо наступне парне число
console.log(generator.next().value); // Виводимо наступне парне число
*/



/*
Урок №43 частина кода як приклад знаходиться в файлі math.js
Розуміння модулів JavaScript та імпорту-експорту
*/
/* Приклад №1 модулів у CommonJS 
// Підключаємо модуль `math.js`
const math = require("./math.js");

// Викликаємо функції `add` та `subtract` з модуля `math.js` та зберігаємо результати у змінні
result_1 = math.add(2, 3); // Виклик функції `add` з аргументами 2 та 3
result_2 = math.substact(5, 2); // Виклик функції `subtract` з аргументами 5 та 2

// Виводимо результати
console.log(result_1); // Виводимо результат `result_1`
console.log(result_2); // Виводимо результат `result_2`
*/


/* Приклад №2 використовує сучасну систему модулів у ES6
// Імпортуємо функції `add_1` та `substract_1` з модуля "./math.js"
import { add_1, substract_1 } from "./math.js";

// Викликаємо функцію `add_1` з аргументами 2 та 3 та зберігаємо результат у змінну `result_2`
const result_2 = add_1(2, 3);

// Викликаємо функцію `substract_1` з аргументами 5 та 2 та зберігаємо результат у змінну `result_3`
const result_3 = substract_1(5, 2);

// Виводимо результати у консоль
console.log(result_2);
console.log(result_3);
*/


/* Приклад №3
// Оголошуємо асинхронну функцію doMath
async function doMath() {
  // Завантажуємо модуль "./math.js" асинхронно та зберігаємо його у змінну `math`
  const math = await import("./math.js");

  // Викликаємо функцію `add_2` з аргументами 2 та 3 та зберігаємо результат у змінну `result_4`
  const result_4 = math.add_2(2, 3);

  // Викликаємо функцію `substract_2` з аргументами 5 та 2 та зберігаємо результат у змінну `result_5`
  const result_5 = math.substract_2(5, 2);

  // Виводимо результати у консоль
  console.log(result_4);
  console.log(result_5);
}

// Викликаємо функцію doMath
doMath();
*/


/*Домашне завдання №43
Практична частина рішення знаходиться в файлах index.html, calculator.js, app.js
Створіть модуль "calculator.js", який експортує 
чотири функції: додавання, віднімання, множення, та ділення. 
Кожна функція приймає два параметри та повертає результат обчислення. 
Напишіть код для "app.js", де імпортуйте та використайте ці функції.
*/



/*
Урок №44
Розуміння оператора об'єднання null та опціонального ланцюжка в JavaScript
*/
/* Приклад №1
Оператор ||выполняет поиск логического "или" с двумя значениями. 
В поверьях первое значение, которое является истинным (правдивым), 
или останнє значением, которое все значение є гибридными (ложными). 

// Функція, яка отримує ім'я з API
const getNameFromAPI = () => {
  const names = ["Alice", "Bob", "Tom", null];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};
// Отримуємо ім'я з API
let name = getNameFromAPI();
// Використовуємо оператор || для встановлення значення "Anonimys", якщо ім'я є null або undefined
name = name || "Anonimys";
// Виводимо ім'я у консоль
console.log(name);
*/


/*  Приклад №2 варіант викорисатння оператора ??. 
Оператор ?? в JavaScript - это оператор нулевого слияния. Он возвращает 
значение правого операнда, если значение левого операнда содержит null или undefined, 
в противном случае возвращается значение левого операнда.

// Функція, яка отримує вік з API
const getAgeFromAPI = () => {
  const possibleAges = [0, 10, 20, 30, 100, null, undefined];
  const randomIndex = Math.floor(Math.random() * possibleAges.length);
  return possibleAges[randomIndex];
};

// Отримуємо вік з API
let age = getAgeFromAPI();

// Використовуємо оператор ?? для встановлення значення 18, якщо вік є null або undefined
age = age ?? 18;

// Виводимо вік у консоль
console.log(age);
*/

/*
// Приклад №3
// Функція, яка отримує користувача з API
const getUserFromAPI = () => {
  const users = [
    { name: "Alice", address: { city: "New York" } },
    { name: "Bob", address: { city: "Paris" } },
    { name: "Tom", address: { city: "null" } },
    null,
  ];
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}
// Отримуємо користувача з API
let user = getUserFromAPI();
// Перевіряємо, чи отримано користувача
if (user) {
  // Перевіряємо, чи є властивості name та address.city у користувача
  if (user.name && user.address && user.address.city) {
    // Виводимо повне ім'я та місто користувача
    console.log(`Повне ім'я: ${user.name}`);
    console.log(`Місто: ${user.address.city}`);
  } else {
    console.log("Недостатньо даних про користувача");
  }
} else {
  console.log("Користувач не знайдений");
}

/* вариант №1 
let user = getUserFromAPI();
let sity;
if (user != null && user.address != null && user.address.city != null) {
} else {
  city = "Unknown"
}
console.log(sity);
*/

/* вариант №2 спрошений за рахунок оператора ?. 
Оператор ?. в JavaScript - это оператор опциональной последовательности. 
Он позволяет безопасно обращаться к свойству объекта, которое может быть null или undefined.
*/
/*
// Отримуємо користувача з API
let user = getUserFromAPI();
// Використовуємо оператор ?. для безпечного доступу до властивості address.city
let city = user?.address?.city;
// Виводимо місто у консоль
console.log(city);
*/


/*Домашне завдання №44
Напишіть функцію `getUserDisplayName` на JavaScript, яка приймає об'єкт `user` 
із властивостями `firstName` та `lastName`. Функція має повертати повне ім'я користувача у форматі 
"Прізвище Ім'я", використовуючи оператор необов’язкового ланцюжка та оператор об’єднання з нульовими 
значеннями для обробки випадків, коли властивості можуть бути null або undefined. Якщо жодної 
інформації про ім'я або прізвище немає, функція має повертати "Анонімний".


// Об'явлення функції для отримання повного імені користувача
const getUserDisplayName = () => {
  // Массив користувачів з іменами та прізвищами
  const user = [
    { firstName: "Alice", lastName: "Diamond" },
    { firstName: "Ruby", lastName: "Lion" },
    { firstName: "Sea", lastName: "Sapphire" },
    null, // Імітація випадку, коли користувач не знайдений
  ];

  // Генерація випадкового індексу для вибору користувача з масиву
  const randomIndex = Math.floor(Math.random() * user.length);

  // **Отримання користувача за випадковим індексом**
  let userName = user[randomIndex];

  // Виведення обраного користувача в консоль для перевірки
  console.log(userName);

  // Вилучення прізвища та імені користувача безпечно, враховуючи можливі null-значення
  const lastName = userName?.lastName ?? "Анонімний";
  const firstName = userName?.firstName ?? "Анонімний";

  // Формування повного імені в форматі "Прізвище Ім'я"
  return `${lastName} ${firstName}`;
};

// Виклик функції та виведення результату в консоль
console.log(getUserDisplayName());
*/


/*
Урок №45
Розуміння структур даних set та map в JavaScript


// Приклад №1 Map
const user = new Map([["name", "Jone"], ["age", 30]]);
console.log(user.get("age"));
user.set("city", "New York");
console.log(user.keys());

// Приклад №2 Set
let set = new Set();
set.add("value_1");
set.add("value_2");


// приклад №3 Set
const fruits = new Set(["apple", "banana", "orange", "banana"]);
console.log(fruits.has("apple"));
fruits.add("mango");
*/




 /*
Домашнє завдання №45
Напишіть функцію на JavaScript, яка приймає масив чисел та повертає новий Set, що містить унікальні значення з цього масиву.

// Функція `numbers()` створює новий набір, що містить унікальні значення з масиву `arrayNumbers`.
const numbers = () => {
  // Створюємо масив `arrayNumbers` з п'яти чисел.
  const arrayNumbers = [1, 2, 3, 4, 5];
  // Повертаємо новий набір, що містить унікальні значення з `arrayNumbers`.
  return new Set(arrayNumbers);
};
// Присвоєння значення `set` результату функції `numbers()`.
const set = numbers();
// Виведення розміру набору `set`.
console.log(set.size);
*/


/*
Домашнє завдання №46
Напишіть функцію на JavaScript, яка демонструє використання 
мемоїзації для оптимізації обчислення факторіалу числа. 
Функція повинна кешувати результати попередніх викликів, 
щоб уникнути непотрібних обчислень при повторних викликах з тими самими аргументами.

// Функція `factorial()` обчислює факторіал числа.
function factorial(n) {
  // Якщо значення `n` дорівнює 0, то факторіал дорівнює 1.
  if (n === 0) {
    return 1;
  }
  // Якщо значення `n` більше 0, то факторіал дорівнює `n` помноженому на факторіал `n - 1`.
  return n * factorial(n - 1);
}
// Виклик функції `factorial()` з різними аргументами.
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
console.log(factorial(15)); // 1307674368000
*/


/*
Урок №47
Розуміння структур даних weakset та weakmap в JavaScript


// Функція, що створює великий об'єкт.
const createLargeObject = () => {
  // Створюємо пустий об'єкт.
  let largeObject = {};
 
  // Повертаємо створений об'єкт.
  return largeObject;
 };
 
 // Створюємо звичайний Map для зберігання часу створення об'єктів.
 let creationTimeMap = new Map();
 
 // Створюємо об'єкт objA і зберігаємо час його створення в Map.
 let objA = createLargeObject();
 creationTimeMap.set(objA, Date.now());
 
 // Створюємо об'єкт objB і зберігаємо час його створення в Map.
 let objB = createLargeObject();
 creationTimeMap.set(objB, Date.now());
 
 // Видаляємо посилання на objA, але він залишається в Map, оскільки Map утримує сильні посилання на ключі.
 objA = null;
 
 // Створюємо WeakMap для зберігання часу створення об'єктів.
 let creationTimeWeakMap = new WeakMap();
 
 // Створюємо об'єкт objC і зберігаємо час його створення в WeakMap.
 let objC = createLargeObject();
 creationTimeWeakMap.set(objC, Date.now());
 
 // Створюємо об'єкт objD і зберігаємо час його створення в WeakMap.
 let objD = createLargeObject();
 creationTimeWeakMap.set(objD, Date.now());
 
 // Видаляємо посилання на objC. WeakMap не утримує сильні посилання на ключі, тому objC буде утилізований, якщо не буде інших сильних посилань на нього.
 objC = null;
 */


/*
Домашнє завдання №47
Напишіть функцію `trackObjectWithWeakMap`, яка приймає об'єкт та 
зберігає поточний час створення цього об'єкта у WeakMap. 
Функція повинна повертати WeakMap з одним елементом, де ключем є 
переданий об'єкт, а значенням - час його створення (використовуючи `Date.now()`).

// Функція, яка відстежує створення об'єкта за допомогою WeakMap
const trackObjectWithWeakMap = (object) => {
  // Створюємо новий WeakMap для зберігання часу створення об'єкта
  const weakMap = new WeakMap();
 
  // Додаємо до WeakMap елемент з ключем, що відповідає самому об'єкту, 
  // і значенням - поточний час (Date.now())
  weakMap.set(object, Date.now());
 
  // Повертаємо WeakMap, що містить інформацію про час створення об'єкта
  return weakMap;
 };
 
 // Виводимо у консоль саму функцію trackObjectWithWeakMap, а не її результат
 console.log(trackObjectWithWeakMap);
 */



 /*
 Домашнє завдання №49
 Напишіть функцію на JavaScript, яка приймає рядок 
 введення користувача та очищає його від потенційно зловмисних 
 скриптів для запобігання атакам XSS. У вашій реалізації використовуйте 
 регулярні вирази для видалення з рядка всіх HTML-тегів та JavaScript-коду.
 

// Функція, що очищує рядок введення користувача від потенційно небезпечних HTML-тегів та JavaScript-коду
function sanitizeInput(input) {
  // Видаляємо всі HTML-теги з рядка введення
  const strippedTags = input.replace(/<[^>]+>/g, "");  // <[^>]+> - регулярний вираз, що відповідає будь-якому HTML-тегу
 
  // Видаляємо JavaScript-код, що міститься в тегах <script>, з очищеного від HTML рядка
  const strippedScript = strippedTags.replace(/<script[^>]*>.*?<\/script>/gi, "");  // <script[^>]*>.*?<\/script> - регулярний вираз для тегу <script>
 
  // Повертаємо очищений рядок
  return strippedScript;
 }
 
 // Приклад використання функції
 const input = "<p>Hello</p>";  // Приклад рядка введення з HTML-тегом
 const sanitizedInput = sanitizeInput(input);  // Очищуємо рядок
 console.log(sanitizedInput);  // Виводимо очищений рядок у консоль
*/




 /*
 Домашнє завдання №50
 Напишіть функцію `sumArray`, яка приймає масив 
 чисел як аргумент і повертає суму всіх чисел у масиві. 
 Використовуйте `let` для оголошення змінних, дотримуйтеся 
 принципів читабельності коду та коментуйте ключові 
 моменти у вашому коді.
 */
 
/*
Домашнє завдання №50
Напишіть функцію `sumArray`, яка приймає масив
чисел як аргумент і повертає суму всіх чисел у масиві.
Використовуйте `let` для оголошення змінних, дотримуйтеся
принципів читабельності коду та коментуйте ключові
моменти у вашому коді.
*/

const sumArray = (array) => {
  // Оголошення змінної `total` для зберігання суми чисел у масиві
  let total = 0;

  // Цикл `for` ітерує по масиву `array`
  for (let i = 0; i < array.length; i++) {
    // Додавання кожного числа з масиву `array` до `total`
    total += array[i];
  }

  // Повернення суми `total`
  return total;
};

// Оголошення змінної `arrays` для зберігання масиву чисел
let arrays = [1, 2, 3, 4, 5];

// Виклик функції `sumArray()` з аргументом `arrays`
const sum = sumArray(arrays);

// Виведення суми чисел у консоль
console.log(sum);






