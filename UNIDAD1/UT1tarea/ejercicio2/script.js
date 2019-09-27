"use strict";
//variables globales
let numero = 1, suma_par=0, mayor_impar= null, contador_numeros=0, contador_pares=0, contador_impares=0;

numero = prompt('Introduzca un número o 0 para salir');
while ( numero != 0 ) {
    if (isNaN(numero) || numero == "" || numero == null )
        numero = prompt('Error introduzca un número o 0 para salir');
    else{
        contador_numeros++;
        if(numero%2==0){
            suma_par+= parseInt(numero);
            contador_pares++;

        }else{
            contador_impares++
            if(mayor_impar == null){
                mayor_impar= numero ;
            }else if(mayor_impar< numero){
                mayor_impar= numero;
            }
        }
        numero = prompt('Introduzca un número o 0 para salir');
    } 
};
document.write("<h2>La suma de los numero pares es "+suma_par+"</h2>");
document.write("<h2>El mayor numero impar es "+mayor_impar+"</h2>");
document.write("<h2>se han introducido "+contador_numeros+" numeros</h2>");
document.write("<h2>se han introducido "+contador_pares+" numeros pares</h2>");
document.write("<h2>se han introducido "+contador_impares+" numeros impares</h2>");



