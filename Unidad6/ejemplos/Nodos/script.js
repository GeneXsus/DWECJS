"use strict"

window.addEventListener("load", function(){
    //estructura en arbol de los nodos
    let html = document.documentElement;
    // let head= html.firstChild;
    // let body= html.lastChild;
    // document.write(`Tipo ${head.nodeType} Nombre ${head.nodeName} <br>`)
    // document.write(`Tipo ${body.nodeType} Nombre ${body.nodeName} <br>`)
    // mostrar los hijos de html
    console.log(html.childNodes.length);
    //acceso a los nodos hijos
    // let head= html.childNodes[0]    
    // let body= html.childNodes[1]    
    // document.write(`Tipo ${head.nodeType} Nombre ${head.nodeName} <br>`)
    // document.write(`Tipo ${body.nodeType} Nombre ${body.nodeName} <br>`)
    //recorrer todos los hijos
    for(let ele of html.childNodes ){
        document.write(`Tipo ${ele.nodeType} Nombre ${ele.nodeName} <br>`)
     
    }


})