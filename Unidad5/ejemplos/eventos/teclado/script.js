"use strict"
//variables
let numeros,noNumeros;
//onload
window.addEventListener("load",function(){
    //establecer eventos
    numeros= document.getElementById("numeros");
    noNumeros= document.getElementById("noNumeros");
    numeros.addEventListener("keydown", function(){
        console.log("keydown")
    });
    numeros.addEventListener("keyup", function(){
        console.log("keyup")
    });
    numeros.addEventListener("keypress", function(e){
        let evento=e||window.event;
        console.log("keypress");
        if (evento.which<48 || evento.which>57){ //preguntar por ascsis
          evento.preventDefault();  
        }
    });
    noNumeros.addEventListener("keypress", function(e){
        let evento=e||window.event;
        console.log("keypress");
        if (evento.which > 47 && evento.which < 58 ){ //preguntar por ascs
          evento.preventDefault();  
        }
    })
},false)

//funciones





//codigo
