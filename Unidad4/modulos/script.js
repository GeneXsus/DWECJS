"use strict";

//importar
// import { sumar,restar } from "./modulo.mjs";
//importar todas las funciones del mofulo
import * as operacion from "./modulo.mjs";


//mostrar la suma
document.getElementById('capa').innerHTML=`La suma es ${operacion.sumar(5,10)} <br>`;
document.getElementById('capa').innerHTML+=`La resta es ${operacion.restar(5,10)} <br>`;
