/*
function great() {
    alert('19.12.2023; 14:15');
}
*/
/*
let age;
age = 'Hi';
console.log(age);
*/

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
*/

let student = {
  name: 'Bob', // Властивість з ім'ям студента
  age: 20, // Властивість з віком студента
  subjects: ['math', 'literature', 'painting'], // Властивість з масивом предметів, які студент вивчає
  displayInfo: function() { // Метод displayInfo, який виводить інформацію про студента
    console.log(`Студент ${this.name} віком ${this.age} вивчає ${this.subjects}.`);
  }
};

student.displayInfo(); // Виклик методу displayInfo для виведення інформації про студента у консоль

