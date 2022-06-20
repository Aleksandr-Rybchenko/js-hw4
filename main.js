"use strict"
const calculate = () => {
    let num1 = Number(prompt("первое число"))
    while(!Boolean(num1) || isNaN(num1)){
      num1 = Number(prompt("введите коректное первое число"))
    }
    let num2 = Number(prompt("второе число"))
    while(!Number.isInteger(num2) || num2 === null){
       num2 = Number(prompt("введите коректное второе число"))
  }
  let operation = prompt(`Введите Математическую операцию одну из: +, -, /, *`)
  while (operation !== "+" && operation !== "-" && operation !== "/" && operation !== "*") {
    operation = prompt(`Введите Математическую операцию одну из: +, -, /, *`)
  }
  let result = null
  switch (operation){
    case "+" :
    result = num1 + num2;
    break;
    case "-" :
    result = num1 - num2;
    break;
    case "/" :
    result = num1 / num2;
    break;
    case "*" :
    result = num1 * num2;
    break;
  }
    alert(`${num1} и ${num2} была проведена операция ${operation}. Результат ${result}`)
    console.log(`${num1} и ${num2} была проведена операция ${operation}. Результат ${result}`);
  }
  do{
    calculate()
  }while(confirm("нужна еще операция?"))
  alert("спасибо что воспользовались калькулятором")



  //1. Фукции нужны для того чтоб выполнять одно и то же действие столько сколько нам нужно раз, вызывая данный код в любом месте кода, например функция что-то делает, какое-то вычисление, и мы под нужный момент можем ее вызвать с новыми аргументами, чем снова писать весь код вычисления.
  //2. Аргумент мы передаем для того чтобы подставить значение в функцию
  //3. Ретерн нужен для того чтоб вернуть значение в функцию

