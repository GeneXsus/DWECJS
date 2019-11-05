"use strict"

window.addEventListener("load",function(){
    document.getElementById('capa1').addEventListener('click', accionCapa1,false)//burbujeo
    // document.getElementById('capa1').addEventListener('click', accionCapa1,true)//captura
    document.getElementById('capa2').addEventListener('click', accionCapa2,false)//burbujeo
    // document.getElementById('capa2').addEventListener('click', accionCapa2,true)//captura

})


function accionCapa1(){
    alert("ha pulsado la capa 1")
}
function accionCapa2(){
    alert("ha pulsado la capa 2")
}