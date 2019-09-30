"use strict"
//variables globales
let tiempo_inicio,tiempo_fin,dif,segundos_de_inicia_fin,segundos_entre_fechas;

//codigo
tiempo_inicio= fecha_ms();
prompt('introduzca su nombre');
prompt('introduzca su provincia');
tiempo_fin=fecha_ms();

dif = tiempo_inicio.getTime() - tiempo_fin.getTime()
 
segundos_de_inicia_fin = dif / 1000;
segundos_entre_fechas = Math.abs(segundos_de_inicia_fin);

document.write('Han pasado '+(segundos_de_inicia_fin/60 ).toFixed(2)+' minutos entre su primera y segunda respuesta');




//funciones
function fecha_ms(){
    return new Date()
}