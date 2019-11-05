"use strict"
//variables
let boton1, boton2, boton3, boton4,enlace,boton5,boton6;
//onload
window.addEventListener("load",function(){
    //establecer eventos
    boton1= document.getElementById("boton1");
    boton1.addEventListener("click",function(){
        alert('ha pulsado el boton 1');
    },false);
    boton2= document.getElementById('boton2');
    boton2.addEventListener("click",pulsarBoton2,false );
    boton3= document.getElementById('boton3');
    boton3.addEventListener("click",pulsarBoton3,false );
    boton4= document.getElementById('boton4');
    boton4.addEventListener("click",pulsarBoton4,false );
    enlace= document.getElementById('enlace');
    enlace.addEventListener("click",function (e) {
        let evento=e||event;//preparar objeto para cualquier navegador
        alert("deberia ir a la direccion google");
        //anular la accion de <a>
        evento.preventDefault();

    },false );
    boton5= document.getElementById('boton5');
    boton5.addEventListener("click",pulsarVoton56,false );
    boton6= document.getElementById('boton6');
    boton6.addEventListener("click",pulsarVoton56,false );
},false)

//funciones
function pulsarBoton2() {
    alert('ha pulsado el boton 2');
    
}
function pulsarBoton3() {
    alert('ha pulsado el boton 3');
    pulsarBoton2();
}
function pulsarBoton4() {
    alert('ha pulsado el boton 4');
    this.removeEventListener("click",pulsarBoton4,false)
    
}
function pulsarVoton56(){
    this.innerText="Ha pulsado el " +this.value;
}





//codigo
