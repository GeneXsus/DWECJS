//Ejercicio 3: Venta de gasolina Realizar un programa que permita simular el
// funcionamiento de una bomba dispensadora de gasolina. Deberá calcular cuánto pagara
// un usuario por una cantidad determinada de gasolina; el programa además deberá de
// guardar la cantidad de litros disponibles en la bomba e irlos actualizando conforme
// dispensa gasolina, en caso de terminarse deberá mostrar algún mensaje indicándolo al
// usuario. 

"use strict"
//variables globales
let gas_llen=0, preci_llen=1.30
//finciones
function crearGasolinera(){
    gas_llen=prompt("¿Cuanta gasolina tiene la gasolinera?");
    while(!validarNumeroPositivo(gas_llen)){
        gas_llen=prompt("Error tiene que poner una cantidad de gasolina");
    }
    preci_llen=prompt("¿Cuanta vale la gasolina?");
    while(!validarNumeroPositivo(preci_llen)){
        preci_llen=prompt("Error tiene que poner un precio");
    }
    
}
function funcionamientoGasolinera(){
    let salir=false;
    while (!salir){
        let gasolina_cant= prompt("cuanta")

    }


}

//cuerpo
crearGasolinera()

