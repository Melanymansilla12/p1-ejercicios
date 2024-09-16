/**
 * Pide y valida un string
 * @param {string} msg 
 * @returns String validado 
 */
function validarString (msg=""){

    //booleano para validar
    let datoValido;
    //variable auxiliar
    let foo;

    do{
        //pido y valido datos
        foo=prompt (msg);

        //valido que no sea un numero
        if(!isNaN(foo)){

            alert("ingrese texto");
            datoValido= false;
        }
        else if (foo===null){
            alert("por favor complete el campo");
            datoValido=false;
        }
        else if(foo.trim()===""){
            alert("por favor no deje el campo vacio");
        } else{
            datoValido=true;
        }

    }while(!datoValido); //si es flaso se vuelve a ejecutar por eso el negador

    //devuelvo el dato validado

    return foo;
}

/**
 * Funcion para validar nota
 * @param {String} msg 
 * @returns Nota validada
 */


function validarNota(msg=""){

    //booleano para validar
    let datoValido;
    //variable auxiliar
    let foo;

    do{
        foo=parseInt(prompt(msg))

        //VALIDO
        if(foo<1 || foo>10){ //|| es asi porque si pongo && se cumplen las dos al mismo tiempo
            alert("Nota fuera de rango, ingrese del 1 al 10");
            datoValido=false;
        }
        else if (isNaN(foo)){
            alert("Ingrese numeros")
            datoValido=false;
        } else {
            datoValido=true;
        }

    }while(!datoValido);
    //devuelvo dato validado
    return foo;


}