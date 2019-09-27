"use strict";
//variables globales
let numero_a_introducir= prompt('¿Cuantos números desea introducir?');
let suma=0;
while (isNaN(numero_a_introducir) ||numero_a_introducir=="" || numero_a_introducir==null || numero_a_introducir==0){
    if (numero_a_introducir ==0)
        numero_a_introducir= prompt('Error no se puede hacer media con 0 numeros introduzca otro número');
    else
    numero_a_introducir= prompt('Error introduzca un número');
};
for(let x=0; x< numero_a_introducir; x++){
    let numero= prompt('Introduzca número ');
    while (isNaN(numero) ||numero=="" || numero==null){
        numero= prompt('Error introduzca número');
    };
    suma+= parseFloat(numero)

}


//mostrar en la página el texto

document.write("<h2>La media es "+(suma/parseFloat(numero_a_introducir))+"</h2>")