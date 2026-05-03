function yourName(){
const your_name = prompt("What is your name?")
console.log(your_name)
/* 2name 
your-name 
name%first 
name|surname 
name/surname */

}
function helloName(){
    const first_name = prompt("What is your name?")
    alert("Hello, " + first_name)
}


function dateYear(){
    let birthYear = prompt("Введіть ваш рік народження")
    const year = new Date().getFullYear()
    if (birthYear === null) {
        console.log("Відміна дії")
    }
    else if(birthYear = " "){
         alert("Введіть число")
    }
    else if (isNaN(birthYear)){
        alert("Введіть коректне число")
    } 
    else if (birthYear > year) {
        alert("Рік народження не може бути більшим за поточний.")
    } 
    else {
        birthYear = +birthYear;
        const age = year - birthYear
        alert(`Ваш вік: ${age} р.`)
    }
}
function perimeter(){
    let a= prompt("Введіть довжину сторони квадрата")
    if (a === null) {
        console.log("Відміна дії")
    }
    else if(a = " "){
         alert("Введіть число")
    }
    else if (isNaN(a)){
        alert("Введіть коректне число")
    } 
    else if (a < 0) {
        alert("Введіть невід'ємне число")
    } 
    else {
        const p = 4 * a
        alert(`Периметр: ${p}`)

    }
}

function areaCircle(){
    let radius= prompt("Введіть радіус кола")
    if (radius === null) {
        alert("Відміна дії")
    }
    else if(radius = " "){
         alert("Введіть число")
    }
    else if (isNaN(radius)){
        alert("Введіть коректне число")
    } 
    else if (radius < 0) {
        alert("Введіть невід'ємне число")
    } 
    else {
        const area = Math.round(2*radius*Math.PI)
        alert(`Площа кола: ${area}`)
    }
}

function speed(){
    let distance = prompt("Введіть відстань між містами")
    let time = prompt("Введіть час майбутньої подорожі")
    if (distance === null || time === null) {
        alert("Відміна дії")
    }
    else if (distance === " "){
        alert("Введіть число")
    } 
    else if (time === " "){
        alert("Введіть число")
    } 
    else if (isNaN(distance) || isNaN(time)){
        alert("Введіть коректне число")
    } 
    else if (distance < 0 || time < 0) {
        alert("Введіть невід'ємне число")
    } 
    else {
        distance = parseInt(distance);
        time =  parseInt(time);
        const needSpeed = Math.round(distance/time*100)/100
        alert(`Потрібно рухатися зі швидкістю: ${needSpeed}`)
    }
}
function convert(){
    const dollar = 43.95
    const euro = 51.48 
    let clientDollar = prompt("Введіть суму для конвертації")
    if (clientDollar === null) {
        console.log("Відміна дії")
    }
    else if (clientDollar === " "){
        alert("Введіть число")
    } 
    else if (isNaN(clientDollar)){
        alert("Введіть коректне число")
    } 
    else if (clientDollar < 0) {
        alert("Введіть невід'ємне число")
    } 
    else {
        const cros = dollar / euro
        clientDollar = +clientDollar
        const clientEuro = Math.round(cros * clientDollar*100)/100
        alert(`Сума в євро: ${clientEuro} `)
    }
}

