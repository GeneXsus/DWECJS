"use strict";
//variables globales
let caracter= prompt('Elija un caracter entre "*" y "+"');
let filas,columnas;
while (caracter!="*" && caracter!="+" ){
    caracter= prompt('Error elija un caracter entre "*" y "+"');
};

filas= prompt('¿Cuántas filas? (1-10)');
while (isNaN(filas) || filas<1 || filas>10){
  
    filas= prompt('Error introduzca un número (1-10)');
};

 columnas= prompt('¿Cuántas columnas? (1-10)');
while (isNaN(columnas) || columnas<1 || columnas>10 ){

    columnas= prompt('Error introduzca un número (1-10)');
};

for(let x=0; x<parseInt(filas); x++){
    for(let y=0; y<parseInt(columnas); y++){
        document.write(caracter)
    }
    document.write("<br/>")

};




