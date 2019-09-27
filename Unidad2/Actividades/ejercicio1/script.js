"use strict"
// declarar variables

// declarar funciones

function abrir(){
    let ventana
    //recorre el bucle para cada ventana
    for (let x = 1; x < 6; x++) {
        //asigna la nueva ventana a la variable
        ventana= window.open("","Mi ventana"+x,"height=200, width=200, top=0, left="+(200*x));
        //escribe el h2 de la nueva ventana
        ventana.document.write("<h2>ventana secundaria</h2>");
        //crea un boton en la nueva ventana con el evento onclick que la cierra
        ventana.document.write("<button onclick='self.close();'>Cerrar ventana</button>"); 
    }
}