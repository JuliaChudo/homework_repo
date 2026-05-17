function countArguments(){
    alert(`Передано ${arguments.length} аргументів`) 
}

function getComparisonOfNumbers(number1, number2){
    if(number1 === number2){
        return console.log("0")
    }else if(number1 > number2){
        return console.log("1")
    }else{
        return console.log("-1")
    }
}

function calcFactorial(number){
    let factorial = 1
    for (let i = 1; i <= number; i++){
        factorial *=i
    }
    return console.log(factorial)
}

function getNumber(number1, number2, number3){
    let number = number1*100 + number2*10 + number3
    return console.log(number)
}

function getArea(length, width){
    let s = (width === undefined)? length**2 : length*width
    return console.log(s)
}

function calcSumDivisors(number){
    let sum = 0
    let divisors = []
        for(let i=1; i<=number/2; i++){
            if(number % i === 0){
                divisors.push(i)
                sum +=i
            }
        }
    return sum 
}

function isPerfectNumber(number){
    let sumDivisors = calcSumDivisors(number)
    if (sumDivisors === number){
        return true
    }
    return false
}

function perfectNumbers(from, to){
    let perfect = []
    for (let i = from; i <= to; i++){
        if(isPerfectNumber(i)){
            perfect.push(i)
        }
    }
    return console.log(perfect)
}
