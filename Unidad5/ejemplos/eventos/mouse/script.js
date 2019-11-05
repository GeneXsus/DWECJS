"use strict"
//variables
let capa
//onload
window.addEventListener("load",function(){
    //establecer eventos
    capa= document.getElementById("capa");
    capa.addEventListener('mouseover', function(){
        this.style.background="yellow";
    })
    capa.addEventListener('mouseout', function(){
        this.style.background="pink";
    })
    capa.addEventListener('click', function(){
        this.style.background="blue";
    })
},false)

//funciones





//codigo
