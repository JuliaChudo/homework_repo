"use strict";

function countArguments() {
  alert("\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043E ".concat(arguments.length, " \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0456\u0432"));
}

function getComparisonOfNumbers(number1, number2) {
  if (number1 === number2) {
    return console.log("0");
  } else if (number1 > number2) {
    return console.log("1");
  } else {
    return console.log("-1");
  }
}

function calcFactorial(number) {
  var factorial = 1;

  for (var i = 1; i <= number; i++) {
    factorial *= i;
  }

  return console.log(factorial);
}

function getNumber(number1, number2, number3) {
  var number = number1 * 100 + number2 * 10 + number3;
  return console.log(number);
}

function getArea(length, width) {
  var s = width === undefined ? Math.pow(length, 2) : length * width;
  return console.log(s);
}

function calcSumDivisors(number) {
  var sum = 0;
  var divisors = [];

  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      divisors.push(i);
      sum += i;
    }
  }

  return sum;
}

function isPerfectNumber(number) {
  var sumDivisors = calcSumDivisors(number);

  if (sumDivisors === number) {
    return true;
  }

  return false;
}

function perfectNumbers(from, to) {
  var perfect = [];

  for (var i = from; i <= to; i++) {
    if (isPerfectNumber(i)) {
      perfect.push(i);
    }
  }

  return console.log(perfect);
}