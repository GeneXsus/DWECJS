"use strict"
// declarar variables
let ventana
let intervalo


// declarar funciones
function abrir(){
    // abrimos una ventana y la asignamos a la variable
    ventana= window.open("","Ventana movil","height=200, width=300");
    // iniciamos el intervalo
    intervalo=setInterval(moverVentana,100);
    // creamos un evento para cortar el intervalo
    setTimeout(() => {
        clearInterval(intervalo);
        ventana.close();
        
    }, 5000);
    
 

}

function moverVentana(){
    //asignamos los valores para que nos de un numero aleatorio para el eje X y el eje Y
    ventana.moveTo(Math.floor(Math.random() * 900)  , Math.floor(Math.random() * 600)  )

}