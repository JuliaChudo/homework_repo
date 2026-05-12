"use strict";

function age() {
  var numberAge = prompt("Введіть свій вік");

  if (numberAge === null) {
    console.log("Відміна дії");
  } else if (numberAge == " ") {
    alert("Введіть число");
  } else if (isNaN(numberAge)) {
    alert("Введіть коректне число");
  } else if (numberAge < 0) {
    alert("Введіть невід'ємне число");
  } else {
    if (numberAge < 12) {
      alert("Ви дитина");
    } else if (numberAge >= 12 && numberAge < 18) {
      alert("Ви підліток");
    } else if (numberAge >= 18 && numberAge < 60) {
      alert("Ви дорослий");
    } else if (numberAge >= 60 && numberAge < 120) {
      alert("Ви пенсіонер");
    } else {
      alert("Перевір введений вік чи ти справді бачив динозаврів");
    }
  }
}

function specialCharacters() {
  var number = prompt("Введіть число від 0 до 9");

  if (number === null) {
    console.log("Відміна дії");
  } else if (number === " ") {
    alert("Введіть число");
  } else if (isNaN(number)) {
    alert("Введіть коректне число");
  } else if (number < 0 || number > 9) {
    alert("Введіть число з вказаного діапазону (0..9)");
  } else {
    number = +number;

    switch (number) {
      case 1:
        alert("\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 ".concat(number, " \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B: !"));
        break;

      case 2:
        alert("\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 ".concat(number, " \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B: @"));
        break;

      case 3:
        alert("\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 ".concat(number, " \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B: #"));
        break;

      case 4:
        alert("\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 ".concat(number, " \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B: $"));
        break;

      case 5:
        alert("\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 ".concat(number, " \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B: %"));
        break;

      case 6:
        alert("\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 ".concat(number, " \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B: ^"));
        break;

      case 7:
        alert("\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 ".concat(number, " \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B: &"));
        break;

      case 8:
        alert("\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 ".concat(number, " \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B: *"));
        break;

      case 9:
        alert("\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 ".concat(number, " \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B: ("));
        break;

      case 0:
        alert("\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 ".concat(number, " \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B: )"));
        break;
    }
  }
}

function sumRange() {
  var numberStart = prompt("Введіть початкове значення діапазону");
  var numberFinish = prompt("Введіть кінцеве значення діапазону");

  if (numberStart === null || numberFinish === null) {
    alert("Відміна дії");
  } else if (numberStart === " ") {
    alert("Введіть число");
  } else if (numberFinish === " ") {
    alert("Введіть число");
  } else if (isNaN(numberStart) || isNaN(numberFinish)) {
    alert("Введіть коректне число");
  } else {
    numberStart = +numberStart;
    numberFinish = +numberFinish;

    if (numberStart > numberFinish) {
      var _ref = [numberFinish, numberStart];
      numberStart = _ref[0];
      numberFinish = _ref[1];
    }

    var suma = 0;

    for (var i = numberStart; i <= numberFinish; i++) {
      suma += i;
    }

    alert("\u0421\u0443\u043C\u0430 \u0447\u0438\u0441\u0435\u043B \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443: ".concat(numberStart, " .. ").concat(numberFinish, " = ").concat(suma));
  }
}

function gcd() {
  var numberFirst = prompt("Введіть перше число");
  var numberSecond = prompt("Введіть друге число");

  if (numberFirst === null || numberSecond === null) {
    alert("Відміна дії");
  } else if (numberFirst === " ") {
    alert("Введіть число");
  } else if (numberSecond === " ") {
    alert("Введіть число");
  } else if (isNaN(numberFirst) || isNaN(numberSecond)) {
    alert("Введіть коректне число");
  } else {
    var maxD = 1;
    numberFirst = +numberFirst;
    numberSecond = +numberSecond;

    if (numberFirst === numberSecond) {
      maxD = numberFirst;
    } else {
      var a = Math.max(numberFirst, numberSecond);
      var b = Math.min(numberFirst, numberSecond);

      while (a > b) {
        var r = a % b;

        if (r === 0) {
          maxD = b;
          break;
        } else {
          a = b;
          b = r;
        }
      }
    }

    alert("\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A: ".concat(numberFirst, " \u0442\u0430 ").concat(numberSecond, " = ").concat(maxD));
  }
}

function findAllDivisors() {
  var number = prompt("Введіть число");

  if (number === null) {
    console.log("Відміна дії");
  } else if (number === " ") {
    alert("Введіть число");
  } else if (isNaN(number)) {
    alert("Введіть коректне число");
  } else if (number < 0) {
    alert("Введіть невід'ємне число");
  } else {
    var divisors = [];

    for (var i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }

    divisors.push(number);
    alert("\u0414\u0456\u043B\u044C\u043D\u0438\u043A\u0438 \u0447\u0438\u0441\u043B\u0430 ".concat(number, ": ").concat(divisors));
  }
}

function isPolindrom() {
  var number = prompt("Введіть п'ятирозрядне число");

  if (number === null) {
    console.log("Відміна дії");
  } else if (number === " ") {
    alert("Введіть число");
  } else if (isNaN(number)) {
    alert("Введіть коректне число");
  } else if (number < 0) {
    alert("Введіть невід'ємне число");
  } else if (number.length !== 5) {
    alert("Введіть п'ятирозрядне число");
  } else {
    if (number.indexOf(0) === number.indexOf(4) || number.indexOf(1) === number.indexOf(3)) {
      alert("\u0427\u0438\u0441\u043B\u043E ".concat(number, "  \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C"));
    } else {
      alert("\u0427\u0438\u0441\u043B\u043E ".concat(number, " \u043D\u0435 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C"));
    }
  }
}

function isDiscount() {
  var money = prompt("Введіть суму покупки");

  if (money === null) {
    console.log("Відміна дії");
  } else if (money === " ") {
    alert("Введіть число");
  } else if (isNaN(money)) {
    alert("Введіть коректне число");
  } else if (money < 0) {
    alert("Введіть невід'ємне число");
  } else {
    var discount = 0;
    var text = "зі знижкою";

    if (money < 200) {
      discount = 0;
      text = "";
    } else if (money >= 200 && money < 300) {
      discount = money * 0.03;
    } else if (money >= 300 && money < 500) {
      discount = money * 0.05;
    } else {
      discount = money * 0.07;
    }

    alert("\u0421\u0443\u043C\u0430 \u0434\u043E \u0441\u043F\u043B\u0430\u0442\u0438 ".concat(text, ": ").concat(money - discount));
  }
}

function check(a) {
  if (a === "") {
    alert("Введіть число");
  } else if (isNaN(a)) {
    alert("Введіть коректне число");
  } else {
    return false;
  }

  return true;
}

function sortNumber() {
  var zeroCnt = 0;
  var positiveCnt = 0;
  var negativeCnt = 0;
  var evenCnt = 0;
  var oddCnt = 0;

  for (var i = 0; i < 10; i++) {
    var number = +prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E ".concat(i + 1));

    if (number === null) {
      console.log("Відміна дії");
      break;
    } else if (check(number)) {
      i--;
    } else {
      if (number === 0) {
        zeroCnt++;
      } else if (number > 0) {
        positiveCnt++;
      } else {
        negativeCnt++;
      }

      if (number % 2 === 0) {
        evenCnt++;
      } else {
        oddCnt++;
      }
    }
  }

  alert("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u0443\u043B\u0456\u0432: ".concat(zeroCnt, ", \u043F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(evenCnt, ", \u043D\u0435\u043F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(oddCnt, ", \u0434\u043E\u0434\u0430\u0442\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(positiveCnt, ", \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(negativeCnt));
}

function dayOfWeek() {
  var dayToday = new Date().getDay();
  var text = "";

  do {
    switch (dayToday) {
      case 0:
        text = "Monday";
        dayToday++;
        break;

      case 1:
        text = "Tuesday";
        dayToday++;
        break;

      case 2:
        text = "Wednesday";
        dayToday++;
        break;

      case 3:
        text = "Thursday";
        dayToday++;
        break;

      case 4:
        text = "Friday";
        dayToday++;
        break;

      case 5:
        text = "Saturday";
        dayToday++;
        break;

      case 6:
        text = "Sunday";
        dayToday = 0;
        break;
    }
  } while (confirm("Next day is ".concat(text)));
}

function guessTheNumber() {
  var guess = false;
  var from = 0;
  var to = 100;
  var allwerChars = ['>', '<', '='];

  while (!guess) {
    var middle = Math.floor((from + to) / 2);
    var answer = prompt("Is your number >, < or = ".concat(middle));
    if (answer === null) break;

    if (allwerChars.includes(answer)) {
      if (answer === "=") {
        guess = true;
        alert("Your number is: ".concat(middle));
        break;
      }

      if (answer === ">") {
        from = middle;
      }

      if (answer === "<") {
        to = middle;
      }
    }
  }
}

function isLeapYear(year) {
  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) return true;
  return false;
}

function addZero(n) {
  if (n < 0) return '0' + n;
  return n;
}

function nextDay() {
  var day = prompt('Enter day');
  var month = prompt('Enter month');
  var year = prompt('Enter year');
  var nextDay = +day + 1,
      nextMonth = month,
      nextYear = year;

  switch (month) {
    case '1':
    case '3':
    case '5':
    case '7':
    case '8':
    case '10':
    case '12':
      if (nextDay == 32) {
        nextDay = 1;
        nextMonth = +month + 1;
      }

      break;

    case '4':
    case '6':
    case '9':
    case '11':
      if (nextDay == 31) {
        nextDay = 1;
        nextMonth = +month + 1;
      }

      break;

    case '2':
      if (isLeapYear(year)) {
        if (nextDay == 30) {
          nextDay = 1;
          nextMonth = +month + 1;
        }
      } else {
        if (nextDay == 29) {
          nextDay = 1;
          nextMonth = +month + 1;
        }
      }

  }

  if (nextMonth == 13) {
    nextMonth = 1;
    nextYear = +year + 1;
  }

  alert("Next date: ".concat(addZero(nextDay), "/").concat(addZero(nextMonth), "/").concat(nextYear));
}