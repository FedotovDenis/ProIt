/*
Домашне завдання №43
Створіть модуль "calculator.js", який експортує 
чотири функції: додавання, віднімання, множення, та ділення. 
Кожна функція приймає два параметри та повертає результат обчислення. 
Напишіть код для "app.js", де імпортуйте та використайте ці функції.
*/

// Функція додавання двох чисел
export const addition = (a, b) => {
    return a + b;
  };
  
  // Функція віднімання двох чисел
  export const subtraction = (a, b) => {
    return a - b;
  };
  
  // Функція множення двох чисел
  export const multiplication = (a, b) => {
    return a * b;
  };
  
  // Функція ділення двох чисел
  export const division = (a, b) => {
    return a / b;
  };
  
  