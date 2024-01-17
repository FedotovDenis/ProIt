/*
Домашне завдання №43
Створіть модуль "calculator.js", який експортує 
чотири функції: додавання, віднімання, множення, та ділення. 
Кожна функція приймає два параметри та повертає результат обчислення. 
Напишіть код для "app.js", де імпортуйте та використайте ці функції.
*/  
// Імпортуємо функції додавання, віднімання, множення та ділення з модуля "./calculator.js"
import { addition, subtraction, multiplication, division } from "./calculator.js";

// Функція, яка виконує обчислення
function calculator() {
  // Викликаємо функцію додавання з аргументами 5 та 5 та зберігаємо результат у змінну `resultAddition`
  const resultAddition = addition(5, 5);

  // Викликаємо функцію віднімання з аргументами 5 та 5 та зберігаємо результат у змінну `resultSubtraction`
  const resultSubtraction = subtraction(5, 5);

  // Викликаємо функцію множення з аргументами 5 та 5 та зберігаємо результат у змінну `resultMultiplication`
  const resultMultiplication = multiplication(5, 5);

  // Викликаємо функцію ділення з аргументами 5 та 5 та зберігаємо результат у змінну `resultDivision`
  const resultDivision = division(5, 5);

  // Виводимо результати у консоль
  console.log(resultAddition);
  console.log(resultSubtraction);
  console.log(resultMultiplication);
  console.log(resultDivision);
}

// Викликаємо функцію calculator
calculator();
