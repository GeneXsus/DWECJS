"use strict"
//variables globales
let fecha,dia;
let anno_fin=2070, anno_inicio=2020;

for (let anno = anno_inicio; anno <=anno_fin ; anno++) {
    fecha= new Date(anno,4,6);
    if(fecha.getDay()==6){
        document.write(fecha.toLocaleDateString()+ "<br/>");
    }
    
}
//funciones