'ise strict'

let ciudad,edad,sexo


let contadorEdadMujer=0,conradorEdadHombre=0,contadorEdad=0;
let acumuladorEdadMujer=0,acumuladorEdadhombre=0,acumuladorEdad=0;

let datoValido=true;

let edadMinima=Infinity;
let edadMaxima=-Infinity;

do {
    ciudad=prompt ("ingrese su ciudad");


//validación de ciudad

if(isNaN(ciudad)){
    alert("ingrese texto");
    datoValido=false;
}

else if (ciudad===null){
    alert("Por favor ingrese un dato")
    datoValido=False;
}

else if(ciudad.trim()===""){
    alert("no dejar el recuadro vacio");
}

else {datoValido=true}

}while(!datoValido);

//validación sexo

do {
    sexo=promt ("ingrese su sexo (F o M)");

if(isNaN(sexo)){
alert("ingrese texto");
datoValido=false;
}

else if(sexo===null){
alert("ingrese un dato");
datoValido=false;
}
    
else if(sexo.trim()===""){
    alert("no dejar el recuadro vacio");
}

else if(sexo.toLowerCase()!==m && sexo.toLowerCase()!==f && sexo.toLowerCase()!==x ) {
    alert ("complete con una opcion válida (F,M,X)");
}

}while(!datoValido);