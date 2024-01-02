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
*/
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