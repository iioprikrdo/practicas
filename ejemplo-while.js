let a = ['Victor', 'Ricardo', 'Daniel']
let counter = 0
a[a.length] = 'Otro nombre';
a.push('Aimee')
a = a.splice(1, a.length - 1)
while( counter < a.length ) {
	//Bloque de codigo
	console.log(a[counter])
	counter++
}
