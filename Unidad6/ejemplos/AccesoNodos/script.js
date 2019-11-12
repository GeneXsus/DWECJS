"use strict";

window.addEventListener("load", function(){

    // a todos los radios
    // let cRadios= this.document.getElementsByTagName('input');
    // selecionar los radios por la clase
    // let cRadios= this.document.getElementsByClassName('edad');
    // seleccionar por parte del contenido de un atributo
    let cRadios= document.querySelectorAll("input[id*='rad']")
    for (let ele of cRadios) {
        ele.addEventListener('click', cambiar)
        
    }
})


function cambiar(){
    // modificar los atributos
    // this.type="button";
    this.setAttribute("type","button");
    //quitar texto al span
    this.nextSibling.innerText = "";
    //Eliminar evento
    this.removeEventListener('click', cambiar);
    // añadir eventos
    this.addEventListener('click', function(){
        alert("Me he convertido en boton")
    });
    //eliminar attributo
    this.removeAttribute('class');
}