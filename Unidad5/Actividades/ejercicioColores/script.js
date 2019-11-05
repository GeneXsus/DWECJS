"use strict"
//variables
let capas;
//onload
window.addEventListener("load",function(){
    //establecer eventos
    capas= document.getElementsByClassName("capa");
    for (let capa of capas) {
        capa.addEventListener('mouseover', seleccionarColor)
        capa.addEventListener('mouseout', seleccionarBlanco)
        capa.addEventListener('click', function(){
            this.removeEventListener('mouseover', seleccionarColor);
            this.removeEventListener('mouseout', seleccionarBlanco);
        })
        
    }
    
   
},false)

//funciones
function seleccionarBlanco(){
    this.style.background="#FFFFFF";
}


function seleccionarColor(){
    this.style.background=`rgb(${ramdonNumber(0,255)},${ramdonNumber(0,255)},${ramdonNumber(0,255)})`;
}

function ramdonNumber(min, max){
    return Math.floor(Math.random() * (max-1 -min) + min)
}





//codigo
