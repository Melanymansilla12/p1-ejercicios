'use strict'

let ciudad,edad,sexo;
let datoValido=true;

//variables de promedio
let contadorMujer=0,contadorHombre=0,contadorGeneral=0,contadorNoBinario=0;
let acumuladorEdadMujer=0,acumuladorEdadhombre=0,acumuladorEdadGeneral=0,acumuladorEdadNoBinario=0;

let contadorMujeresMenores21=0,contadorHombresMayor21=0;

//minimos y maximos
let edadhombreMin=110, edadMujerMax=0; //le pongo el limite del rango directo 

do{
    do {
        ciudad=prompt ("ingrese su ciudad"); 
    
    
    //validación de ciudad
    
    if(!isNaN(ciudad)){
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
        sexo=prompt ("ingrese su sexo (F, M o X)"); //Si yo pongo tolowercase cuando el usuario apreta cancell rompe
    
    if(!isNaN(sexo)){ //!nan sirve para que si algo es un numero de true y se vuelva a ejecutar
    alert("ingrese texto");
    datoValido=false;
    }
    
    else if(sexo===null){
    alert("ingrese un dato");
    datoValido=false;
    }
        
    else if(sexo.trim()===""){ //uso el trim para sacar los espacios del principio y del final
        alert("no dejar el recuadro vacio");
    }
    
    else if(sexo.toLowerCase()!=="m" && sexo.toLowerCase()!=="f" && sexo.toLowerCase()!=="x" ) {
        alert ("complete con una opcion válida (F,M,X)");
        datoValido= false;
    } else{
        datoValido=true;
    }
    
    }while(!datoValido);
    
    
    //validamos edad
    
    do {
        edad= parseInt (prompt ("ingrese una edad entre 0 y 110"));
    
        if(isNaN (edad)){
            alert("ingrese numeros");
            datoValido= false;
        }
    
        else if (edad<0 || edad > 110){
            alert ("Edad fuera de rango. Ingrese entre 0 y 110");
            datoValido= false;
        }
        else{
            datoValido= true;
        }
    
    } while (!datoValido);

    //aca ya esta validado

// siempre se incrementa en contador general
contadorGeneral++;
acumuladorEdadGeneral += edad;


if(sexo.toLowerCase()==="m"){
    contadorHombre++;
    acumuladorEdadhombre += edad;

    //requisito edad
    if(edad>21){
        contadorHombresMayor21++;
    }

    //busco minimo entre hombres 
    if(edad < edadhombreMin){
        edadhombreMin=edad; //si el valor es maximo lo pisa al anterior y queda ese valor
    }

}
else if (sexo.toLowerCase()==="f"){
    contadorMujer++;
    acumuladorEdadMujer += edad;

    //requisito edad
    if(edad<21){
        contadorMujeresMenores21++;
    }

    //busco maximo entre mujeres

    if(edad > edadMujerMax){
        edadMujerMax=edad; //si el valor es maximo lo pisa al anterior y queda ese valor
    }
     
} else {
    contadorNoBinario++;
    acumuladorEdadNoBinario += edad; 
}



} while (confirm ("¿otro dato?"))


//ponemos en la consola para no tener tantos alert

console.log (`Promedio general: ${acumuladorEdadGeneral/contadorGeneral}`);
console.log(`Promedio edad hombres: ${acumuladorEdadhombre/contadorHombre}`);
console.log(`Promedio edad Mujeres: ${acumuladorEdadMujer/contadorMujer}`);
console.log(`Promedio edad no binario: ${acumuladorEdadNoBinario/contadorNoBinario}`);

//con el to.fix le saco las comas a los numeros



//aca hago porcentaje
console.log (`un %${100*contadorHombresMayor21/contadorGeneral} de personas son hombres mayores a 21`);
 console.log(`un %${100 * contadorMujeresMenores21/contadorGeneral} de personas son mujeres menores a 21`);


//minimos y maximos

console.log(`La edad maxima de mujeres es de ${edadMujerMax} años`);
console.log(`La edad minima de hombres es de ${edadMujerMax} años`);
