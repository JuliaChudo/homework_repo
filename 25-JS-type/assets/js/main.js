function sumFloat(){
    let numberFirst = prompt("Введіть перший десятковий дріб")
    let numberSecond = prompt("Введіть другий десятковий дріб")
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
        let sumNambers = +numberFirst + +numberSecond
        sumNambers=+sumNambers.toFixed(20)
        alert(`${numberFirst} + ${numberSecond} = ${sumNambers}`)
    }
}

function sumStringNumber(){
    let numberFirst = "1"
    let numberSecond = 2 
    sum = +numberFirst + numberSecond
    alert(`${numberFirst} + ${numberSecond} = ${sum}`)
    
}

function flashCapacity(){
    let flash = prompt("Введіть обсяг флешки в Гб")
    const file = 820
    if (flash === null) {
        console.log("Відміна дії")
    }
    else if(flash === " "){
         alert("Введіть число")
    }
    else if (isNaN(flash)){
        alert("Введіть коректне число")
    } 
    else if (flash < 0) {
        alert("Введіть невід'ємне число")
    } 
    else if (file > flash*1024) {
        alert(`Розмір флешки замалий для файлу розміром ${file}`)
    } 
    else {
        const count = Math.trunc(+flash*1024/file)
        alert(`Флешка поміщає ${count} файлів розміром ${file}`)
    }
}

function numberOfChocolate(){
    let money = prompt("Скільки грошей в гаманці")
    let chocolate = prompt("Ціна шоколадки")
    if (money === null || chocolate === null) {
        alert("Відміна дії")
    }
    else if (money === " "){
        alert("Введіть число")
    } 
    else if (chocolate === " "){
        alert("Введіть число")
    } 
    else if (isNaN(money) || isNaN(chocolate)){
        alert("Введіть коректне число")
    }
    else if (money < 0 || chocolate < 0) {
        alert("Введіть невід'ємне число")
    } 
    else if (money < chocolate) {
        alert("Підзароби грошенят")
    } 
    else {
        const number = Math.trunc(money/chocolate);
        const remainder = money %  chocolate
        alert(`Кількість шоколадок: ${number}. Залишиться грошей в гаманці:${remainder} грн`)
    }
}

function reverseNumber(){
    let a= prompt("Введіть тризначне число")
    if (a === null) {
        console.log("Відміна дії")
    }
    else if(a == " "){
         alert("Введіть число")
    }
    else if (isNaN(a)){
        alert("Введіть коректне число")
    } 
    else if (a.length != 3) {
        alert("Введіть трицифрове число")
    } 
    else {
        let first = Math.trunc(a/100)
        let second = Math.trunc(a/10) % 10
        let third = a % 10
        let newNumber = third*100 + second*10 + first
        alert(`Нове число:  ${newNumber}`)
    }
}

function bank(){
    let money = prompt("Введіть суму вкладу")
    let percent = 0.05
    if (money === null) {
        console.log("Відміна дії")
    }
    else if(money == " "){
         alert("Введіть число")
    }
    else if (isNaN(money)){
        alert("Введіть коректне число")
    } 
    else if (money < 0) {
        alert("Введіть невід'ємну суму")
    } 
    else {
        let suma =Math.round(money*percent/6*100) /100
        alert(`Сума нарахованих відсотків через 2 місяці:  ${suma} грн`)
    }
}















