"use strict";
// objeto unica instancia
let Persona={
    nombre:"maria",
    apellidos: "Palacios Ortega",
    edad: 30,
    mostrar:function(){
        document.write(`<h2>${this.nombre} ${this.apellidos} tiene ${this.edad} años`)
    }
};
console.log(Persona.nombre);
Persona.mostrar();