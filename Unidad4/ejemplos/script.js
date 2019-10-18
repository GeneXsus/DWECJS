"use strict"
//variables
let a_alumnos=[], nombre;

// classe
class Alumno{
    constructor(nom,ape,loc){
        this.nombre=nom;
        this.apellidos=ape;
        this.localidad=loc;
    }
    mostrarDatos(){
        document.write(`<h2>${this.nombre} ${this.apellidos} Localidad: ${this.localidad}</h2><br>`);
    }
}


while((nombre=prompt("Introduzca nombre(*->Fin)"))!='*'){
    let apels=prompt("Introduzca apellidos");
    let local=prompt("Introduzca localidad");
    a_alumnos.push(new Alumno(nombre,apels,local));
}


//ordenar por apellidos
a_alumnos.sort((a,b)=>b.apellidos.toLowerCase().localeCompare(a.apellidos.toLowerCase()));

a_alumnos.forEach(alumno => {
    alumno.mostrarDatos();
    
});