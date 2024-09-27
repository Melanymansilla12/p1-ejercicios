//variablepara tablero batalla navalq
let tablero=[];



//CREO 10 FILAS EN TOTAL
for (let i=0; i<10; i++){ //ARRANCA EL BUCLE
    let fila=[];// CREA UNA FILA VACIA

    for(let i=0; i<10; i++) { 

        fila.push(""); //LLENA CON 10 ESPACIOS
    }
    



    tablero.push(fila);//dentro de este array tengo 10 elementos del otro array //METE LA FILA EN EL TABLERO
}  //SE COMPLETA HASTA QUE LELGUE AL 10

//TABLERO (X) SERIA LA COLUMNA Y EL NUMERO DENTRO LA FILA (A,B,C)



function agregarBarco(){
let largo=parseInt(prompt("Cual es el largo del barco"));
//PREGUNTO POR FILA Y COLUMNA COMO INDIQUE EL LARGO DEL BARCO
    for (let i=0; i<largo; i++){
        let fila=parseInt(prompt("en que fila esta el barco?"));
        let col= parseInt(prompt("en que columna va el barco?"));
    

    //asigno el barco en la fila y columna
    tablero[fila][col]="#";
}
}

function disparar(){
    let fila=parseInt(prompt("a que fila queres disparar?"));
    let col= parseInt(prompt("a que columna queres disparar?"));

    if(tablero[fila][col]==="#"){

        tablero[fila][col]="X";
        alert("le diste");
    } else if (tablero [fila][col]===""){

        tablero [fila][col]="O";
        alert("no le diste");
    }else{
        alert("ya dispraste acá");
    }
}

function mostrar (){
    for(let fila of tablero){

        console.log(fila);
    }

}