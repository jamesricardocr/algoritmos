//------------------------------- Ejercicio 01 (Variables) ----------------------------------------//

//La forma usada actualmente oara declarar una variable es "let", la palabra "var" ya no se usa
let nombre="Juan"
let edad=25
let pais="colombia"

//Hay dos formas de concatenar y las dos son válidas:
console.log("Hola, soy " + nombre + " tengo " + edad + " años y soy de " + pais + ".")
console.log(`Hola, soy ${nombre} tengo ${edad} años y soy de ${pais}.`)

//-------------------------------- Ejercicio 02 (Funciones) ----------------------------------------//

let suma = 0

//Function declaration
function sumatoria(a = 5, b = 3){
    suma = a + b
    return suma
}

const sumatoriaAB = sumatoria(1, 2)
console.log(sumatoriaAB)

const sumatoria2 = (a = 5, b = 3) => {
    suma = a + b
    return suma
}
console.log(sumatoria2())

//-------------------------------- Ejercicio 01.1 (Funciones) ----------------------------------------//

//Function expresion
const printMSG = (nombre, edad, pais) => {
    let msg = `Hola, soy ${nombre} tengo ${edad} años y soy de ${pais}.`
    return msg
}
console.log(printMSG(nombre, edad, pais))

//-------------------------------- Ejercicio 03 (Funciones) ----------------------------------------//

let userAge = prompt("Cuál es tu edad?")

const msg = (alerta, edad) => {
    alert(`${alerta} y su edad es ${edad}`)
}

const ageValidation = (age) => {
    if (age < 18){
        msg("Eres menor de edad", age)
    } else if (age >= 18 && age <= 65){
        msg("Eres adulto", age)
    } else if (age > 65){
        msg("Eres adulto mayor", age)
    } else {
        msg("No valido", age)
    }
}
ageValidation(Number(userAge))

//-------------------------------- Ejercicio 04 (Funciones) ----------------------------------------//

const pokemonesLegendarios = [
    'Mewtwo',
    'Lugia',
    'Ho-Oh',
    'Rayquaza',
    'Groudon',
    'Kyogre',
    'Dialga',
    'Palkia',
    'Giratina',
    'Zacian'
  ];
console.log(pokemonesLegendarios)
console.log(pokemonesLegendarios[3])
console.log(pokemonesLegendarios.length)

for (let index = 0; index < pokemonesLegendarios.length; index++) {
    console.log(`Este pokemon es: ${pokemonesLegendarios[index]}`)
}

pokemonesLegendarios.forEach((a, index) => console.log(`Este pokemon es: ${a} es el ciclo ${index}`))

for (let index = 1; index < 11; index++) {
    console.log(index)
}