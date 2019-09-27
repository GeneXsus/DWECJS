"use strict"
// variables globales
let color="red";
let intervalo;

//funciones
function iniciar(){
    // intervalo=setInterval(cambiaColor,40);
    intervalo=setTimeout(cambiaColor,2000);
}

function parar(){
    if (intervalo==undefined){
        alert('No está iniciado');
    }{
        // clearInterval(intervalo);
        clearTimeout(intervalo)
    }
}

function cambiaColor() {
    //asignar color al fondo del body
    document.body.bgColor=color ;
    if (color=="red"){
        color= "green";
    }else if(color=="green"){
        color="blue";
    }else{
        color="red"
    }
    // color=color=="red" ? "green" :"red";
}