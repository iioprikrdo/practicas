const validarDescuento = () => {
	const nombre = document.getElementById('nombre').value
	const apellido = document.getElementById('apellido').value
	const edad = Number( document.getElementById('edad').value )

	const camposVacios = []
	let mensaje = ''

	if(estaVacio(nombre))
		camposVacios.push('Nombre')
	if(estaVacio(apellido))
		camposVacios.push('Apellido')
	if(edad === 0)
		camposVacios.push('Edad')

	if(camposVacios.length > 0) {
		mensaje = 'Falta capturar los campos: ';
		for(campo of camposVacios) {
			mensaje += `${campo}, `
		}
	}
	else {
		mensaje = `Nombre completo: ${nombre} ${apellido}`
		mensaje += `\nEl año de nacimiento es ${2020-edad}`
		if(edad < 18) {
			mensaje += `\nEres menor de edad. No podemos darte de alta hasta el año ${18 - edad + 2020}`
		}
		else if(edad > 18 && edad < 25) {
			mensaje += `\nTienes 10% de descuento`
		}
		else if(edad === 18 || edad === 25) {
			mensaje += '\nTienes 20% de descuento'
		}
		else {
			mensaje += '\nNo tienes descuento'
		}
	}
	alert(mensaje)
}

const estaVacio = valor => {	
	return valor.trim() === '';
}

