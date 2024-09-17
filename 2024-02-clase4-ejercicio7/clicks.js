function cargarAlumno(){
    alumno = validarString("ingrese su nombre del alumno");
}

function cargarMateria(){
    let materia=validarString("Ingrese el nombre de la materia");
    //guardo la materia en su array

    materias.push (materia);

    let nota=validarNota(`Ingrese la nota de ${materia}  del 1 al 10`);
 
    notas.push (nota);

}

function mostrar(){

    /**
     * <h1>${alumno}</h1>
     * <h2 >Materias<h2>
     * <ul class="list-group">
     * <li class="list-group-item">${Materia}${nota}</li>
     * <li class="list-group-item">${Materia}${nota}</li>
     * <li class="list-group-item">${Materia}${nota}</li>
     * <li class="list-group-item">${Materia}${nota}</li>
     * <li class="list-group-item">${Materia}${nota}</li>
     * <li class="list-group-item">${Materia}${nota}</li>
     * </ul
     */



    //encuentro el contenedor (div)
    const container = document.querySelector(".container"); //dentro del html buscame la clase con el nombre contenedor
    //limpio container

    container.innerHTML=""; //para js el html es un string y lo puedo modificar (si toco mostrar se borra y se vuelve a mostrar lo nuevo)

    //creo el h1 con el nombre de la nota
    container.innerHTML += `<h1>${alumno}</h1>`; //+= estoy concatenando
    container.innerHTML += `<h2 >Materias<h2>`; //declaro a container como una constante pero la puedo modificar ya que la referencia es la misma solo que le cambio lo de adentro (container es un objeto)

    //creo la lista (se cierra automaticamente)
    container.innerHTML += `<ul class="list-group">`;

    //encuentro la lista que genere recién
    const ul = document.querySelector(".ul");

    //agrego las materias


    /*for(let i = 0; i<materias.length; i++){ //for tradicional
    ul.innerHTML += `<li class="list-group-item">${materias[i]}-${notas[i]}</li>`;
    }*/
    
    //con un for in
    /*for (let i in materias){ //me recorre todos los indices incrementando de 1 y empezando en 0
        ul.innerHTML += `<li class="list-group-item">${materias[i]}-${notas[i]}</li>`;
    }*/


    //for of (no anda por completo) (itera con elementos y no con indices)
    for (let materia of materias){
        ul.innerHTML += `<li class="list-group-item">${materia}</li>`; //materia va a tomar el valor de cada elemento (no accedo al indice en este caso la nota)
    }
}
