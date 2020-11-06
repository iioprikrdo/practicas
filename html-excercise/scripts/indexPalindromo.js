const validarPalindromo = () =>{
    const Palindromo = String(document.getElementById('palabra').value)
    if (estaVacio(Palindromo)){
        alert ("Escriba una palabra")
    }
    else{
        let contador = 0
        let counter = Palindromo.length - 1
        let mitad = Math.floor(counter / 2)
        while (Palindromo[contador] === Palindromo[counter] && counter !== mitad){
            contador++
            counter--
        }
        if (counter == mitad)
            alert ('Si es un palindromo')
        else
            alert ('No es un palindromo')
    }
}

const estaVacio = valor => {	
	return valor.trim() === '';
}

//azossoza
//azojoza
//azojxza