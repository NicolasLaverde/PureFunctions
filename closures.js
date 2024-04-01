// Ejercicio contador
function crearContador(contador) {
    return function contar() {
        return ++ contador
    } 
}



const contador1 = crearContador(10)
console.log(`contador1 => ${contador1()}`)
console.log(`contador1 => ${contador1()}`)
console.log(`contador1 => ${contador1()}`)
console.log(`contador1 => ${contador1()}`)
console.log(`contador1 => ${contador1()}`)
console.log('--------------')
const contador2 = crearContador(5)
console.log(`Contador 2 => ${contador2()}`)
console.log(`Contador 2 => ${contador2()}`)
console.log(`contador1 => ${contador1()}`)