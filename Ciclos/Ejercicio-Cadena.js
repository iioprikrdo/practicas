let nombre= `susana sabe sostenerse`
let letra = 0
let variable = `s`
console.log(nombre.length)

for( let i = 0; i < nombre.length; i++) {
    if (nombre[i] === variable){
        letra = letra + 1
    }
 }
 console.log(letra)
