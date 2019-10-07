 "use strict"
 
 let param=["tomates", 100, 50];

 function mostrar(nombre, precio, unidad){
     
         document.write(`${nombre}<br>`);
         document.write(`${precio}<br>`);
         document.write(`${unidad}<br>`);
    
 }
 
 mostrar(...param);
 

 