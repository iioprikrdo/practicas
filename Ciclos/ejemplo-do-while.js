let frutas = ['manzana', 'platano', 'mango', 'limon']
let quieresVerFrutas = false
let counter = 0

// do while, ejecuta primero, pregunta despues (siempre se ejecuta por lo menos una vez)
do  {
	console.log(frutas[counter])
	quieresVerFrutas = true
	if(counter === 2) {
		quieresVerFrutas = false
	}
	counter++
} while( quieresVerFrutas && counter < frutas.length )
