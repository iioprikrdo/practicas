let a = [10,20,30,40,50,60,70]
let b = [1,2,3,4,5,6,7]
let promA = 0
let promB = 0


const getPromedio = (conjunto) => {
	let promedio = 0
	for(let num of conjunto) {
		promedio += num // promedio = promedio + num
	}
	promedio /= conjunto.length
	return promedio
} 

console.log(`El promedio de a es ${getPromedio(a)}`)
console.log(`El promedio de b es ${getPromedio(b)}`)

