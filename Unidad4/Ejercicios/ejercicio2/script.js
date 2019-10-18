//Ejercicio 2: Valor futuro de una inversión Realice un programa para calcular el valor
// futuro de una inversión; la fórmula para obtener este valor es la siguiente:
// valor_futuro =valor*Math.pow (1+tasa/100,periodo)
// Mostrar el resultado y los valores de cada variable. La clase se creará mediante
// function. 

"use strict"

import { Inversion} from "./modulo.mjs"

//variables globales
let inversion= new Inversion();
//finciones


//cuerpo
inversion.pediDatos();
inversion.mostrar('inversion');
