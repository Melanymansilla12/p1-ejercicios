//elegir entre las sign¿uientes opciones

let categoria=parseInt(prompt('Si su sueldo basico mensual es 1000 ingrese "1", si es 1500 ingrese "2" si es 2000 ingrese "3"'));
let subcategoria=prompt ("Elija la subcategoria (A B C) para multiplicadores de 1.5,2 y 2.5 ");


let sueldo;
if (categoria == 1) {
    sueldo=1000;
}

else if(categoria == 2) {
   sueldo=1500; 
}

else if (categoria == 3) {
    sueldo=2000;
}

//alert (`él sueldo es ${sueldo}`);


//multiplicador dependiendo la categoria

switch (subcategoria.toUpperCase()) {

    //touppercase me lo hace mayusucula cuando se ingresa 

    case "A":
    sueldo *= 1.5;
    break;

    case "B":
    sueldo *= 2;
    break;

    case "C":
    sueldo *= 2.5;
    break;

    default:
    sueldo=0;
    break;

}

if (sueldo >=1500 && sueldo <=3000) {
    alert (`tu sueldo de ${sueldo} es inicial `)
}

else if (sueldo >=3001 && sueldo <=4000) {
    alert (`Su sueldo de ${sueldo} es intermedio`)
}

else if (sueldo >=4000) {
    alert (`Su sueldo de ${sueldo} es avanzado`)
}

//alert (`él sueldo es ${sueldo}`);