const validarNumero = () => {
    let numero = Number(document.getElementById('numero').value)
    if (numero == 0){
        alert ("Escriba un número")
    }
    else{
        let numeroOriginal  = numero
        let invertedNum = 0
        let numeroTemporal = 0
        
        while(numero !== 0) {
            numeroTemporal = numero % 10
            invertedNum += numeroTemporal	
            numero -= numeroTemporal
            numero /= 10
            if(numero !== 0)
                invertedNum *= 10
        }
        if(numeroOriginal === invertedNum)
            alert ('Es un número Capicua')
        else	
            alert ('No es un número capicua')
    }
}

//951159
//951154