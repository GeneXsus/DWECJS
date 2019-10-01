"use strict"
//variables globales
let frase="Un lenguaje de programación FrontEnd es JavaScript";
let numero= 23.45,max_num=501,min_num=200;

//funciones
//codigo
document.write("longitud: "+ frase.length+"<br/>");
document.write("FrontEnd empieza en: "+ frase.indexOf('FrontEnd')+"<br/>");
let javascript= frase.substr(frase.length-10,10)
console.log(javascript);
document.write("Primera letra d: "+ frase.indexOf('d')+"<br/>");
document.write("Ultima letra d: "+ frase.lastIndexOf('d')+"<br/>");
document.write(frase.toUpperCase()+"<br/>");
document.write(frase.toLowerCase()+"<br/>");

document.write(frase.replace('FrontEnd' , 'en entorno cliente')+"<br/>");
document.write(frase.replace(/ /g,'')+"<br/>");
document.write(frase.replace(/e/g,'').replace(/E/g,'')+"<br/>");
document.write("El numero aleatorio entre 500 y 200 es "+ Math.floor(Math.random() * (max_num -min_num) + min_num)+"<br/>")
document.write("El numero mas pequeño de la serie (23,14,3,45,67,1) es  "+ Math.min(23,14,3,45,67,1)+"<br/>")







