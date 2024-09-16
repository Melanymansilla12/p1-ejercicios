 //varable para almacenar los datos de la materia
let materias = [], notas = [];
//pedir datos del alumno
const alumno=validarString("ingrese su nombre del alumno");

do{
    //booleano para validar
    let materia=validarString("Ingrese el nombre de la materia");
    //guardo la materia en su array

    materias.push (materia);

    let nota=validarNota(`Ingrese la nota de ${materia}  del 1 al 10`);
 
    notas.push (nota);

}while (confirm("¿otra materia y nota a cargar?")); //si dice que si se vuelve a ejecutar

