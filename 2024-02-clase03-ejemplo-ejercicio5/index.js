//ej un prompt es una función (le damos algo y nos devuelve algo)



let nombre="kiara";
let otroNombre="Hugo";


function foo(){
    //va el codigo que se ejecute cada vez que la llame
    //hace solo lo que su nombre dice
}

/**
 * Funcion que escribe "hola" por alert
 */
function saludar () {
    alert("hola");
}


//si en la consola porngo asi saludar----muestro lo que tiene
//si pongo asi () la llamo a que ejecute



/**
 * Funcion que saluda por alert
 * @param {string} nombre string con el nombre de la persona a saludar
 */


function saludarPorNombre(nombre=null){ //le asigno un valor a nombre
    if (nombre ===null){//si sigue pasando eso (puede tener mas de un paramentro null,..,...)
        //alert("Hola");
        saludar();//puedo llamar a otra funcion dentro de la otra
    }

    else{
        alert(`Hola ${nombre}`);//si no sigue
    }
    
}

//nombre funciona dentro de la funcion, puede haber otra variable  
//es como lo llamo internamente


//paso paramentro a la funcion
saludarPorNombre(nombre);
saludarPorNombre(otroNombre);
saludarPorNombre("juan");
saludarPorNombre(); //undefinded

