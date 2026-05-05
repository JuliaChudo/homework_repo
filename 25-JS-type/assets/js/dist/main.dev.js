"use strict";

function sumFloat() {
  var numberFirst = prompt("Введіть перший десятковий дріб");
  var numberSecond = prompt("Введіть другий десятковий дріб");

  if (numberFirst === null || numberSecond === null) {
    alert("Відміна дії");
  } else if (numberFirst === " ") {
    alert("Введіть число");
  } else if (numberSecond === " ") {
    alert("Введіть число");
  } else if (isNaN(numberFirst) || isNaN(numberSecond)) {
    alert("Введіть коректне число");
  } else {
    var sumNambers = +numberFirst + +numberSecond;
    sumNambers = +sumNambers.toFixed(20);
    alert("".concat(numberFirst, " + ").concat(numberSecond, " = ").concat(sumNambers));
  }
}

function sumStringNumber() {
  var numberFirst = "1";
  var numberSecond = 2;
  sum = +numberFirst + numberSecond;
  alert("".concat(numberFirst, " + ").concat(numberSecond, " = ").concat(sum));
}

function flashCapacity() {
  var flash = prompt("Введіть обсяг флешки в Гб");
  var file = 820;

  if (flash === null) {
    console.log("Відміна дії");
  } else if (flash === " ") {
    alert("Введіть число");
  } else if (isNaN(flash)) {
    alert("Введіть коректне число");
  } else if (flash < 0) {
    alert("Введіть невід'ємне число");
  } else if (file > flash * 1024) {
    alert("\u0420\u043E\u0437\u043C\u0456\u0440 \u0444\u043B\u0435\u0448\u043A\u0438 \u0437\u0430\u043C\u0430\u043B\u0438\u0439 \u0434\u043B\u044F \u0444\u0430\u0439\u043B\u0443 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C ".concat(file));
  } else {
    var count = Math.trunc(+flash * 1024 / file);
    alert("\u0424\u043B\u0435\u0448\u043A\u0430 \u043F\u043E\u043C\u0456\u0449\u0430\u0454 ".concat(count, " \u0444\u0430\u0439\u043B\u0456\u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C ").concat(file));
  }
}

function numberOfChocolate() {
  var money = prompt("Скільки грошей в гаманці");
  var chocolate = prompt("Ціна шоколадки");

  if (money === null || chocolate === null) {
    alert("Відміна дії");
  } else if (money === " ") {
    alert("Введіть число");
  } else if (chocolate === " ") {
    alert("Введіть число");
  } else if (isNaN(money) || isNaN(chocolate)) {
    alert("Введіть коректне число");
  } else if (money < 0 || chocolate < 0) {
    alert("Введіть невід'ємне число");
  } else if (money < chocolate) {
    alert("Підзароби грошенят");
  } else {
    var number = Math.trunc(money / chocolate);
    var remainder = money % chocolate;
    alert("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A: ".concat(number, ". \u0417\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F \u0433\u0440\u043E\u0448\u0435\u0439 \u0432 \u0433\u0430\u043C\u0430\u043D\u0446\u0456:").concat(remainder, " \u0433\u0440\u043D"));
  }
}

function reverseNumber() {
  var a = prompt("Введіть тризначне число");

  if (a === null) {
    console.log("Відміна дії");
  } else if (a == " ") {
    alert("Введіть число");
  } else if (isNaN(a)) {
    alert("Введіть коректне число");
  } else if (a.length != 3) {
    alert("Введіть трицифрове число");
  } else {
    var first = Math.trunc(a / 100);
    var second = Math.trunc(a / 10) % 10;
    var third = a % 10;
    var newNumber = third * 100 + second * 10 + first;
    alert("\u041D\u043E\u0432\u0435 \u0447\u0438\u0441\u043B\u043E:  ".concat(newNumber));
  }
}

function bank() {
  var money = prompt("Введіть суму вкладу");
  var percent = 0.05;

  if (money === null) {
    console.log("Відміна дії");
  } else if (money == " ") {
    alert("Введіть число");
  } else if (isNaN(money)) {
    alert("Введіть коректне число");
  } else if (money < 0) {
    alert("Введіть невід'ємну суму");
  } else {
    var suma = Math.round(money * percent / 6 * 100) / 100;
    alert("\u0421\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 \u0447\u0435\u0440\u0435\u0437 2 \u043C\u0456\u0441\u044F\u0446\u0456:  ".concat(suma, " \u0433\u0440\u043D"));
  }
}