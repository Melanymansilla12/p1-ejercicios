//declaracion de array vacio

let foo=[]; // el array va con corchetes
const bar= [];//es el lugar donde esta guardado todo 

//cada elemento tiene posición (indice) dentro del array


//AGREGAR ELEMENTOS AL ARRAY

foo[1]= "este es el primer elemento"; //aca hay 3 elementos porque empieza en 0
foo[2]= "123";
foo[100]="555"; //del 3 al 99 es undefined

//MEJOR FORMA PARA AGREGAR ELEMENTOS

bar.push("primer elemento"); //con el push me envia al final de los elementos (si no hay nada seria el primer0)
bar.push(999); //2do
bar.push(true);//3ro


//intento copiar todos los elementos del bar en baz
let baz=bar; 

//copia la referencia  (le meto un elemento a uno y me lo copia el otro)
baz.push("nuevo elemento");

