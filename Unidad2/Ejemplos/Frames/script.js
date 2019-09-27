"use strict"
//declarar variables

//declarar funciones
function ejecutar() {
    // averiguar el color elegido
    let color=parent.frame1.form1.color.value;
   
    // averiguar el LADO elegido
    if(parent.frame1.form1.lado.selectedIndex == 0){
        parent.frame1.document.bgColor = color 
    }else{
        parent.frame2.document.bgColor = color 
    }
    
}