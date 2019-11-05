"use script"

function ejecutar(){
    document.getElementById("mostrar").innerHTML= document.formNameBusq.entradaName.value;

    document.getElementById("mostrar").innerHTML+= `<br> ${document.formNameBusq.elements['entradaName'].value}`
    document.getElementById("mostrar").innerHTML+= `<br> ${document.getElementById("entrada").value}`
}