"use strict";
//variables globales
let altura, peso, imc;

peso = prompt('¿Cuantos pesa en Kg?');
while (isNaN(peso) || peso == "" || peso == null || peso == 0) {
    if (peso == 0)
        peso = prompt('Error no se puede pesar 0Kg');
    else
        peso = prompt('Error introduzca un número');
};

altura = prompt('¿Cuantos mide en cm?');
while (isNaN(altura) || altura == "" || altura == null || altura == 0) {
    if (altura == 0)
        altura = prompt('Error no se puede medir 0m');
    else
        altura = prompt('Error introduzca un número');
};
imc = peso / ((altura/100)*(altura/100));

document.write("<h2> su imc es " + imc + " con lo cual tiene ");
//mostrar en la página el texto
switch (true) {
    case (imc < 16):
        document.write("'Criterio de ingreso en hospital' </h2>");
        break;
    case (imc > 16 && imc <= 17):
        document.write("'infrapeso' </h2>");
        break;
    case (imc > 17 && imc <= 18):
        document.write("'bajo peso' </h2>");
        break;
    case (imc > 18 && imc <= 25):
        document.write("'peso normal (saludable)' </h2>");
        break;
    case (imc > 25 && imc <= 30):
        document.write("'sobrepeso (obesidad de grado I)' </h2>");
        break;
    case (imc > 30 && imc <= 35):
        document.write("sobrepeso crónico (obesidad de grado II)' </h2>");
        break;
    case (imc > 35 && imc <= 40):
        document.write("' obesidad premórbida (obesidad de grado III)' </h2>");
        break;
    case (imc < 40):
        document.write("' obesidad mórbida (obesidad de grado IV)' </h2>");
        break;

    default:
        break;
}