"use strict";
// declaración variables
let oPersona,oProfesor;
// clases
class Persona{

    //propiedades
    constructor(nom,ape,anios){
        this.nombre=nom;
        this.apellidos=ape;
        this.edad=anios;
    }

    //metodos
    mostrarDatos(){
        document.write(`<h2>${this.nombre} ${this.apellidos} tiene ${this.edad} años`);
    }
}

class Profesor extends Persona{
    
    constructor(nom, ape, anios, espec, fec_alta){
                super(nom, ape, anios);
                this.especialidad=espec;
                this.fecha_alta= fec_alta;
    }
    mostrarDatProfe(){
        document.write(`<br> la especialidad es: ${this.especialidad} y la fecha de alta es: ${this.fecha_alta}`);
     }
}


oPersona=new Persona('Maria', "perez",45);
oPersona.mostrarDatos();

oProfesor= new Profesor('Pepe', 'calvo', 40, "informatica", "20/10/20014");
oProfesor.mostrarDatos();
oProfesor.mostrarDatProfe();