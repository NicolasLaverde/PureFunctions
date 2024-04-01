let num1 = 10

function impureAdd(num2) {
    num1 = num1 + num2
    return num1
}

function pureAdd(num1, num2) {
    let num3 = Math.random()
    return num1 + num2 + num3
}

console.log(pureAdd(1,5))
console.log(pureAdd(21,5))

impureAdd(3)


if(num1 ===10){
    // hacer cualquier cosa
}