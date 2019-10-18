// Ejercicio 1: Creando un objeto círculo Realizar un programa que permita crear un
// molde para objetos de tipo círculo al que le pasamos el radio cuando lo inicialicemos, y
// que tenga una función que nos calcule su área, otra su longitud, y estos valores sean
// mostrados por pantalla. Utilizando objetos sin necesidad de instanciar.

"use strict"

import { validarNumeroPositivo } from "./modulo.mjs";

//variables globales
let radio_introducido;
let Circulo = {
    radio: 0,
    area: 0,
    longitud: 0,
    calculaArea: () => {
        Circulo.area = (Math.PI * Math.pow(Circulo.radio, 2));
    },
    calculaLongitud: () => {
        Circulo.longitud = (2 * Math.PI * Circulo.radio)

    },
    mostrarDatos: (id) => {
        document.getElementById(id).innerHTML= `Radio del círculo dado: ${Circulo.radio}<br> Area del círculo: ${Circulo.area.toFixed(2)} <br> Longitud del círculo: ${Circulo.longitud.toFixed(2)}`
    },
    pedirRadio: () => {
        radio_introducido = prompt('Introduzca el radio');
        while (!validarNumeroPositivo(radio_introducido)) {
            radio_introducido = prompt('Error introduzca un número mayor a 0 para el radio')
        };
        Circulo.radio = parseFloat(radio_introducido);
    }

};


Circulo.pedirRadio();
Circulo.calculaArea();
Circulo.calculaLongitud();
Circulo.mostrarDatos('texto-circulo');