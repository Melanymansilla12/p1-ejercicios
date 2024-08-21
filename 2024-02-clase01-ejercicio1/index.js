

//pedir dos extremos para comparar

const max=parseInt(prompt ("Ingrese un número maximo"));
const min=parseInt(prompt("Ingrese un número minimo"));


//pido el número para comparar

const num =parseInt(prompt("Ingrese un número a comparar"));


//verifico si el número esta en rango

if  (num >= min && num<=max){
    alert("el numero esta en rango");
}

else {
    alert("El número no esta en rango")
}

if (num % 2==1) {
    alert ("El numero es impar")
}

else {

    alert("el número es par")
}




