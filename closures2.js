// Ejercicio contador
function crearContador2() {
    let contador = 0

    return {
        incrementar: () => (++ contador),
        decrementar: () => (-- contador),
        obtenerValor: () => contador
    }
}
console.log('|--------------------------------------|')
console.log('|--------------------------------------|')
const contador3 = crearContador2()
console.log(`Incrementar contador3 => ${contador3.incrementar()}`)
console.log(`Incrementar contador3 => ${contador3.incrementar()}`)
console.log(`Obtener valor contador3 => ${contador3.obtenerValor()}`)
console.log(`Decrementar contador3 => ${contador3.decrementar()}`)
console.log(`Obtener valor contador3 => ${contador3.obtenerValor()}`)
const contador4 = crearContador2()

console.log(`Contador4 => ${contador4.decrementar()}`)
console.log(`Contador4 => ${contador4.decrementar()}`)
console.log(`contador4 => ${contador4.obtenerValor()}`)
