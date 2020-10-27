let nombre = 'Ricardo'
let apellido = 'Orduñez'
let Fullname = `${nombre} ${apellido}`
let Edad = 29
let anio = 2020 - Edad
console.log(`El nombre del usuario es ${Fullname} `)
console.log(`El año de nacimiento es  ${anio}`)

if (Edad < 18) {
	let X= 18 - Edad + 2020
	console.log (`Eres menor de edad. No podemos darte de alta hasta el año ${X} `)
}
else if (Edad > 18 && Edad < 25) {
	console.log(`Tienes 10% de descuento`)
}

else if (Edad == 18 || Edad == 25) {
	console.log(`Tienes 20% de descuento`)
}
else {
	console.log(`No tienes descuento`)
}

