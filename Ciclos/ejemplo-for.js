let a = ['a', 'b', 'c', 'd', 'e']

let objeto = {
	nombre: 'Ricardo',
	apellido: 'Orduñez',
	grado: '1',
	grupo: 'A'
}

console.log('while')
let counter = 0
while( counter < a.length ) {
	console.log(a[counter])
	counter++
}

console.log('for')
for( let i = 0; i < a.length; i++) {
	console.log(a[i])
}

console.log('for-each')
a.forEach(element => console.log(element))

console.log('for-in')
for(let propiedad in objeto) {
	//    Nombre de la propiedad  objeto en la posicion 'propiedad'
	console.log(`${propiedad}: ${objeto[propiedad]}`)
}

