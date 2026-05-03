"use strict";

function yourName() {
  var your_name = prompt("What is your name?");
  console.log(your_name);
  /* 2name 
  your-name 
  name%first 
  name|surname 
  name/surname */
}

function helloName() {
  var first_name = prompt("What is your name?");
  alert("Hello, " + first_name);
}

function dateYear() {
  var birthYear = prompt("Введіть ваш рік народження");
  var year = new Date().getFullYear();

  if (birthYear === null) {
    console.log("Відміна дії");
  } else if (birthYear = " ") {
    alert("Введіть число");
  } else if (isNaN(birthYear)) {
    alert("Введіть коректне число");
  } else if (birthYear > year) {
    alert("Рік народження не може бути більшим за поточний.");
  } else {
    birthYear = +birthYear;
    var age = year - birthYear;
    alert("\u0412\u0430\u0448 \u0432\u0456\u043A: ".concat(age, " \u0440."));
  }
}

function perimeter() {
  var a = prompt("Введіть довжину сторони квадрата");

  if (a === null) {
    console.log("Відміна дії");
  } else if (a = " ") {
    alert("Введіть число");
  } else if (isNaN(a)) {
    alert("Введіть коректне число");
  } else if (a < 0) {
    alert("Введіть невід'ємне число");
  } else {
    var p = 4 * a;
    alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440: ".concat(p));
  }
}

function areaCircle() {
  var radius = prompt("Введіть радіус кола");

  if (radius === null) {
    alert("Відміна дії");
  } else if (radius = " ") {
    alert("Введіть число");
  } else if (isNaN(radius)) {
    alert("Введіть коректне число");
  } else if (radius < 0) {
    alert("Введіть невід'ємне число");
  } else {
    var area = Math.round(2 * radius * Math.PI);
    alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430: ".concat(area));
  }
}

function speed() {
  var distance = prompt("Введіть відстань між містами");
  var time = prompt("Введіть час майбутньої подорожі");

  if (distance === null || time === null) {
    alert("Відміна дії");
  } else if (distance === " ") {
    alert("Введіть число");
  } else if (time === " ") {
    alert("Введіть число");
  } else if (isNaN(distance) || isNaN(time)) {
    alert("Введіть коректне число");
  } else if (distance < 0 || time < 0) {
    alert("Введіть невід'ємне число");
  } else {
    distance = parseInt(distance);
    time = parseInt(time);
    var needSpeed = Math.round(distance / time * 100) / 100;
    alert("\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E: ".concat(needSpeed));
  }
}

function convert() {
  var dollar = 43.95;
  var euro = 51.48;
  var clientDollar = prompt("Введіть суму для конвертації");

  if (clientDollar === null) {
    console.log("Відміна дії");
  } else if (clientDollar === " ") {
    alert("Введіть число");
  } else if (isNaN(clientDollar)) {
    alert("Введіть коректне число");
  } else if (clientDollar < 0) {
    alert("Введіть невід'ємне число");
  } else {
    var cros = dollar / euro;
    clientDollar = +clientDollar;
    var clientEuro = Math.round(cros * clientDollar * 100) / 100;
    alert("\u0421\u0443\u043C\u0430 \u0432 \u0454\u0432\u0440\u043E: ".concat(clientEuro, " "));
  }
}