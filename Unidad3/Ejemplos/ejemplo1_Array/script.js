"use strict"
//variables globales
let a_nombre=["ana", "juan", "maria"]
//funciones

//codigo
//for
for (let i = 0; i < a_nombre.length; i++) {
    document.write(`${a_nombre[i]} - `);
    
}

document.write(`<br/>`);
// for in 
for (let x in a_nombre) {
    document.write(`${a_nombre[x]} - `);
}
document.write(`<br/>`);
//for of 
for (let valor of a_nombre) {
    document.write(`${valor} - `);
    
}