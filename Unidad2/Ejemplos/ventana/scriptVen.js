"use strict"
let ventana;
function abrir(){
        if (ventana==undefined || ventana.closed== true){
            ventana= window.open("","Mi ventana","height=250px", "widht=250px");
            ventana.document.write("<h2>ventana secundaria</h2>");
            ventana.document.write("<button onclick='self.close();'>Cerrar ventana</button>");
        }else{
            alert("La ventana secundaria ya está abierta");
        }

};
function cerrar(){
    if (ventana==undefined){
        close();
        
        
    } else if( ventana.closed!= true){
        if(confirm("La ventana secundaria esta abierta ¿quiere cerrar ambas?")){
            ventana.close();
            self.close();
        }
        
        
        }else{
            close();
        }
       

    
}