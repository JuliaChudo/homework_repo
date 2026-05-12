function age(){
    let numberAge = prompt("Введіть свій вік")
    if (numberAge === null) {
        console.log("Відміна дії")
    }
    else if(numberAge == " "){
         alert("Введіть число")
    }
    else if (isNaN(numberAge)){
        alert("Введіть коректне число")
    } 
    else if (numberAge < 0) {
        alert("Введіть невід'ємне число")
    } 
    else {
        if(numberAge < 12){
             alert("Ви дитина")
        }
        else if(numberAge >= 12 && numberAge < 18){
             alert("Ви підліток")
        }
        else if(numberAge >= 18 && numberAge < 60){
             alert("Ви дорослий")
        }
        else if(numberAge >= 60 && numberAge < 120){
            alert("Ви пенсіонер")
        }
        else{
            alert("Перевір введений вік чи ти справді бачив динозаврів")
        }
    }   
}

function specialCharacters(){
let number = prompt("Введіть число від 0 до 9")
    if(number === null) {
        console.log("Відміна дії")
    }
    else if(number === " "){
         alert("Введіть число")
    }
    else if(isNaN(number)){
        alert("Введіть коректне число")
    } 
    else if(number < 0 || number > 9) {
        alert("Введіть число з вказаного діапазону (0..9)")
    } else{
        number = +number
        switch (number) {
            case 1:
                alert(`На клавіші ${number} розташований спецсимвол: !`)
                break;
            case 2:
                alert(`На клавіші ${number} розташований спецсимвол: @`)
                break;
            case 3:
                alert(`На клавіші ${number} розташований спецсимвол: #`)
                break; 
            case 4:
                alert(`На клавіші ${number} розташований спецсимвол: $`)
                break;
            case 5:
                alert(`На клавіші ${number} розташований спецсимвол: %`)
                break;
            case 6:
                alert(`На клавіші ${number} розташований спецсимвол: ^`)
                break;
            case 7:
                alert(`На клавіші ${number} розташований спецсимвол: &`)
                break;
            case 8:
                alert(`На клавіші ${number} розташований спецсимвол: *`)
                break;
            case 9:
                alert(`На клавіші ${number} розташований спецсимвол: (`)
                break;
            case 0:
                alert(`На клавіші ${number} розташований спецсимвол: )`)
                break;   
        }
    }
}


function sumRange(){
    let numberStart = prompt("Введіть початкове значення діапазону")
    let numberFinish = prompt("Введіть кінцеве значення діапазону")
    if (numberStart === null || numberFinish === null) {
        alert("Відміна дії")
    }
    else if (numberStart === " "){
        alert("Введіть число")
    } 
    else if (numberFinish === " "){
        alert("Введіть число")
    } 
    else if (isNaN(numberStart) || isNaN(numberFinish)){
        alert("Введіть коректне число")
    }  
    else {
        numberStart = +numberStart
        numberFinish = +numberFinish
        if (numberStart > numberFinish){
            [numberStart,numberFinish]=[numberFinish,numberStart]
        }
        let suma = 0
        for (let i = numberStart; i <= numberFinish; i++){
            suma += i
       }
        alert(`Сума чисел діапазону: ${numberStart} .. ${numberFinish} = ${suma}`)
    }
}

function gcd(){
    let numberFirst = prompt("Введіть перше число")
    let numberSecond = prompt("Введіть друге число")
    if (numberFirst === null || numberSecond === null) {
        alert("Відміна дії")
    }
    else if (numberFirst === " "){
        alert("Введіть число")
    } 
    else if (numberSecond === " "){
        alert("Введіть число")
    } 
    else if (isNaN(numberFirst) || isNaN(numberSecond)){
        alert("Введіть коректне число")
    }  
    else {
        let maxD = 1
        numberFirst = +numberFirst
        numberSecond = +numberSecond
        if(numberFirst === numberSecond){
            maxD = numberFirst
        }
        else{
            let a=Math.max(numberFirst, numberSecond)
            let b=Math.min(numberFirst, numberSecond)
            while(a > b){
                let r = a % b
                if(r === 0){
                    maxD = b
                    break
                }
                else{
                    a = b
                    b = r
                }
            }
       }
       alert(`Найбільший спільний дільник: ${numberFirst} та ${numberSecond} = ${maxD}`) 
    }
}

function findAllDivisors(){
    const number = prompt("Введіть число")
    if (number === null) {
        console.log("Відміна дії")
    }
    else if(number === " "){
         alert("Введіть число")
    }
    else if (isNaN(number)){
        alert("Введіть коректне число")
    } 
    else if (number < 0) {
        alert("Введіть невід'ємне число")
    } 
    else {
        let divisors = []
        for(let i=1; i<=number/2; i++){
            if(number % i === 0){
                divisors.push(i)
            }
        }
        divisors.push(number)
        alert(`Дільники числа ${number}: ${divisors}`)
    }
}


function isPolindrom(){
    let number = prompt("Введіть п'ятирозрядне число")
    if (number === null) {
        console.log("Відміна дії")
    }
    else if(number === " "){
         alert("Введіть число")
    }
    else if (isNaN(number)){
        alert("Введіть коректне число")
    } 
    else if (number < 0) {
        alert("Введіть невід'ємне число")
    } 
    else if(number.length !== 5){
        alert("Введіть п'ятирозрядне число")
    }
    else{
        if(number.indexOf(0)===number.indexOf(4) || number.indexOf(1)===number.indexOf(3)){
            alert(`Число ${number}  паліндром`)
        }
        else{
            alert(`Число ${number} не паліндром`)
        }
    }
}



function isDiscount(){
    let money = prompt("Введіть суму покупки")
    if (money === null) {
        console.log("Відміна дії")
    }
    else if(money === " "){
         alert("Введіть число")
    }
    else if (isNaN(money)){
        alert("Введіть коректне число")
    } 
    else if (money < 0) {
        alert("Введіть невід'ємне число")
    } 
    else{
        let discount = 0
        let text = "зі знижкою"
        if (money < 200){
            discount = 0
            text = ""
        }
        else if(money >= 200 && money < 300){
            discount = money * 0.03
        }
        else if (money >= 300 && money < 500){
           discount = money * 0.05
        }
        else{
            discount = money * 0.07
        }
         alert(`Сума до сплати ${text}: ${money-discount}`)
    }
}

function check(a){
    if (a === ""){
         alert("Введіть число")
    }
    else if (isNaN(a)){
        alert("Введіть коректне число")
    }
    else{
        return false
    }
    return true
}

function sortNumber(){
    let zeroCnt = 0
    let positiveCnt = 0
    let negativeCnt = 0
    let evenCnt = 0
    let oddCnt = 0
    for (let i = 0; i < 10; i++){
        const number = +prompt(`Введіть число ${i+1}`)
        if (number === null) {
        console.log("Відміна дії")
        break
        }
        else if(check(number)){
            i--
        }
        else{

            if(number === 0){
                zeroCnt++
            }
            else if(number > 0){
                positiveCnt++
            }
            else{
                negativeCnt++
            }
            if(number % 2 === 0){
                evenCnt++
            }
            else{
                oddCnt++
            }
        }
    }
    alert(`Кількість нулів: ${zeroCnt}, парних чисел: ${evenCnt}, непарних чисел: ${oddCnt}, додатних чисел: ${positiveCnt}, від'ємних чисел: ${negativeCnt}`)
}

function dayOfWeek(){
    let dayToday = new Date().getDay()
    let text=""
    do{
    switch(dayToday){
        case 0:
            text = "Monday"
            dayToday++
            break
        case 1:
            text = "Tuesday"
            dayToday++
            break
        case 2:
            text = "Wednesday"
            dayToday++
            break
        case 3:
            text = "Thursday"
            dayToday++
            break
        case 4:
            text = "Friday"
            dayToday++
            break
        case 5:
            text = "Saturday"
            dayToday++
            break
        case 6:
            text = "Sunday"
            dayToday = 0
            break
        }
    }while(confirm(`Next day is ${text}`))
}

function guessTheNumber(){
    let guess = false
    let from = 0
    let to = 100
    const allwerChars = ['>', '<', '=']

    while(!guess){
        let middle = Math.floor((from + to) / 2)
        const answer = prompt(`Is your number >, < or = ${middle}`)
        if (answer ===null) break
        if (allwerChars.includes(answer)){
            if (answer === "="){
                guess = true
            alert(`Your number is: ${middle}`)
            break
            }
            if (answer === ">"){
                from = middle
            }
            if (answer === "<"){
                to = middle
            }
        }
    }
}

function isLeapYear(year){
    if (year % 400 === 0 || (year % 4 ===0 && year % 100 !==0)) return true
    return false
}

function addZero(n)
{
    if (n<0) return '0'+n
    return n
}

function nextDay(){
    const day = prompt('Enter day')
    const month = prompt('Enter month')
    const year = prompt('Enter year')
    let nextDay = +day + 1,
        nextMonth = month,
        nextYear = year

    switch(month){
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            if (nextDay == 32){
                nextDay = 1
                nextMonth = +month +1
            }
            break
        case '4':
        case '6':
        case '9':
        case '11':
            if (nextDay == 31){
                nextDay = 1
                nextMonth = +month +1
            }
            break
        case '2':
            if(isLeapYear(year)){
                if (nextDay == 30){
                    nextDay = 1
                    nextMonth = +month +1
                }
            }else{
                if (nextDay == 29){
                    nextDay = 1
                    nextMonth = +month +1
                } 
            }
         }
         if(nextMonth == 13){
            nextMonth = 1
            nextYear = +year +1
         }
        alert(`Next date: ${addZero(nextDay)}/${addZero(nextMonth)}/${nextYear}`)
}