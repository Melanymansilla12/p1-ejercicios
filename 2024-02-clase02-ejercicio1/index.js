//ponerle un valor a la variable es undefined

let contadorDesaprobados=0, contadorAprobados=0, contadorPromocionados=0;
let acumuladorDesaprobados=0,acumuladorAprobados=0,acumuladorPromocionados=0;



//algo parecido al infinity
let numeroMinimo=10;
let numeroMaximo=1;

do{
    //lo que repito
    let nota = parseInt(prompt("Ingrese una nota del 1 al 10"))

//Si entro al blucle pregunto lo siguiente

if(nota<4) {
    contadorDesaprobados++;
    acumuladorDesaprobados=acumuladorDesaprobados+nota;
    //desaprobado
}
else {
    //aprobado
    contadorAprobados++;
    acumuladorAprobados +=nota;
    //Le pregunto si promociono
    if (nota>=7){
    contadorPromocionados++;
    acumuladorPromocionados +=nota;
    }
}

//pregunto si la nueva nota es mayor a la anterior
if (nota>numeroMaximo){

    //si esto es asi, esta nota es la mas grande de las que venia cargando
    numeroMaximo=nota;

}

if (nota<numeroMinimo){

    //si esto es asi, esta nota es la mas chica de las que venia cargando
    numeroMinimo=nota;

}


}while (confirm("¿Otra nota?"));


//Una vez cargadas las notas sacamos los promedios

alert(`Hubo ${contadorDesaprobados} alumnos desaprobados y su nota promedio fue de ${(acumuladorDesaprobados/contadorDesaprobados).toFixed(1)}`);
alert(`Hubo ${contadorAprobados} alumnos aprobados y su nota promedio fue de ${(acumuladorAprobados/contadorAprobados).toFixed(1)}`);
alert(`Hubo ${contadorPromocionados} alumnos promocionados y su nota promedio fue de ${(acumuladorPromocionados/contadorPromocionados).toFixed(1)}`);
alert(`La nota minima fue ${numeroMinimo}`);
alert(`La nota maxima fue ${numeroMaximo} `);

    //CONTADOR: SUMA DE A 1
    //ACUMULADOR: SUMA POR LAS CANTIDADES QUE UNO NECESITE
    //acumuladorAprobados +=nota; (le sumo una variable a la otra)
    //acotar decimales <<<<<<<<<<<<<<<<< to.Fixed
    //si hago promedios con 0 numeros da NaN