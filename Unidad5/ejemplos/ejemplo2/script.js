"use strict"

function ejecutar(){
    let mostrar=document.getElementById("mostrar");
    //mostrar el numero de formularios que tenemos en el body
    mostrar.innerHTML= `el nº de formularios es ${document.forms.length}`;
    //mostrar el numero de elementos de cada formulario
    mostrar.innerHTML+= `<br> Los elementos del ${document.getElementById('frmFirst').id} son ${document.getElementById('frmFirst').elements.length}`;
    mostrar.innerHTML+= `<br> Los elementos del ${document.getElementById('frmSec').id} son ${document.getElementById('frmSec').elements.length}`;
    //mostrar todos los elementos de los diferentes formularios que hay dentro del body
    for (let frm of document.forms){
        mostrar.innerHTML+= `<hr> <br> <br>Formulario ${frm.id}`
        for (let ele of frm.elements) {
            mostrar.innerHTML+= `<br><br> El id es ${ele.id}`+
                                `<br>El type es ${ele.type}`+
                                `<br>El value es ${ele.value}`;
            
        }
    }
}