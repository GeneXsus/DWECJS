"use strict"
//variables 
let oDatos, oProfe;
function Persona(){
    //declarar propiedades
    this.nombre="";
    this.apellidos="";
    this.edad=0;

    // declarar metodos
    this.mostrar=  function(){
        document.write(`<h2>${this.nombre} ${this.apellidos} tiene ${this.edad} años`);
    };


   
}
//establecer otro mñetodo a la clase
Persona.prototype.mostrarMasInformacion = function () {
    document.write("<br> Podemos mostrar más infomación del objeto");
};

//clase profesor que hereda de persona
function Profesor(nom, ape, anios, espec, fec_alta) {
    Persona.call(this,nom,ape,anios);
    this.especialidad=espec;
    this.fecha_alta= fec_alta;
    //metodo
    this.mostrarDatProfe=function(){
       document.write(`<br> la especialidad es: ${this.especialidad} y la fecha de alta es: ${this.fecha_alta}`);
    }
    
}
Profesor.prototype=new Persona();



oDatos=new Persona();
oDatos.nombre= prompt('Introduzca el nombre');
oDatos.apellidos=prompt('Introduzca el apellidos');
oDatos.edad=prompt('Introduzca el edad');
oDatos.mostrar();
oDatos.mostrarMasInformacion();

oProfe=new Profesor("maria", "cano", 29,"informatica", "14/10/2019");
oProfe.mostrar();
oProfe.mostrarMasInformacion();
oProfe.mostrarDatProfe();
