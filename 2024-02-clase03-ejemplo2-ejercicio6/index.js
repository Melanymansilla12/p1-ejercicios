//variables globales
let numero1, numero2,suma,resta,division,multiplicacion;
/**
 * Funcion que atiende al click del primer numero
*/
    function pedirNumero1(){
        
        //copio el numero que valide a la variable local
        numero1=validarNumero("Ingrese el primer numero");
}
/**
 * Funcion que atiende al click del segundo numero
*/
function pedirNumero2(){
    
    //copio el numero que valide a la variable local
    numero2=validarNumero ("Ingrese el segundo numero");
    
}


/**
 * Funcion que suma los dos numeros
*/

function sumar(){
    suma=numero1 + numero2;
}

function restar(){
    resta=numero1 - numero2;
}

function multiplicar(){
    multiplicacion=numero1 * numero2;
}

function dividir (){
    division=numero1 / numero2;
}

/**
 * Funcion que muestra el resultado de la suma
*/

function resultado(){
    alert(`El resultado de la suma de ${numero1} + ${numero2} es ${suma}`);
    
} 


//FUNCION QUE SRIVE PARA PARCIAL

/**
 * Funcion encargada de pedir y validar un numero
 * @param {string} msg mensaje que aparece en el prompt
 * @returns numero validado
 */


function validarNumero(msg=""){ //si no quiero nada aparecera el prompt vacio a que un UNDEFINED
    let numero;
        do{
        numero=parseInt(prompt(msg)); //ingrese .. pasa a ser el mensaje y el msg al prompt

        if (isNaN (numero)) {
            alert("solo numeros");
        }

        }while(isNaN (numero)); //esta funcion se queda con el valor validado localmente

        //retorno de numero validado a quien lo llamo

        return numero; //si pongo el return solo devuelve UNDEFINED (Ej return "jose";)
}

