//Ejercicio 3: Venta de gasolina Realizar un programa que permita simular el
// funcionamiento de una bomba dispensadora de gasolina. Deberá calcular cuánto pagara
// un usuario por una cantidad determinada de gasolina; el programa además deberá de
// guardar la cantidad de litros disponibles en la bomba e irlos actualizando conforme
// dispensa gasolina, en caso de terminarse deberá mostrar algún mensaje indicándolo al
// usuario. 

"use strict"

import { Gasolinera, validarNumeroPositivo, validarNumeroSalida} from "./modulo.mjs"
//variables globales
let gas_llen=0, preci_llen=1.30, salir=false, o_Gasolinera;
//finciones
function crearGasolinera(){
    gas_llen=prompt("¿Cuanta gasolina tiene la gasolinera?");
    while(!validarNumeroPositivo(gas_llen)){
        gas_llen=prompt("Error tiene que poner una cantidad de gasolina");
    }
    preci_llen=prompt("¿Cuanto vale la gasolina?");
    while(!validarNumeroPositivo(preci_llen)){
        preci_llen=prompt("Error tiene que poner un precio");
    }
    o_Gasolinera= new Gasolinera(preci_llen,gas_llen)
    
}
function funcionamientoGasolinera(){
    
    while (!salir){
        let gasolina_cant= prompt("¿cuanta gasolina quiere gastar(Cancelar para salir)")
        while (!validarNumeroSalida(gasolina_cant)){
            gasolina_cant= prompt("Error tiene que poner una cantidad de gasolina (Cancelar para salir)")
        }
        if(gasolina_cant==null){
            salir=true;
        }else{
            o_Gasolinera.vaciar(gasolina_cant);
            if(o_Gasolinera.litros==0){
                document.getElementById('vacio').innerHTML="<h1>No queda gasolina</h1>";
                salir=true ;
            }
        }


    }


}

//cuerpo
crearGasolinera()
funcionamientoGasolinera();

