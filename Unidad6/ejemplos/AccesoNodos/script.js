"use strict";

window.addEventListener("load", function(){

    // a todos los radios
    let cRadios= this.document.getElementsByTagName('input');
    for (let ele of cRadios) {
        ele.addEventListener('click', cambiar)
        
    }
})


function cambiar(){
    this.type="button";
}