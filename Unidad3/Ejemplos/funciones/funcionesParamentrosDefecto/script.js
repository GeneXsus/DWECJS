 
 "use strict"
 
 function calcular(total=1000, dto=10){
     document.write(`<br>El descuento es = ${(total*10)/100}`);
 }
 
 calcular();
 calcular(200);
 calcular(500, 20);
 