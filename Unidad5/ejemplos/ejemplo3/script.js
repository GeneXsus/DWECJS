"use strict";

//Variables.
var message = "¡Dato requerido!";
var counter = 0;


//ARREGLAR LO DEL CONTADOR.




//Funciones.
function comprobar(){
    
    //Comprobar el nombre.
    verifDatos(document.getElementById("nombre"), document.getElementById("errNom"));
    verifDatos(document.getElementById("edad"), document.getElementById("errEdad"));
    verifDatos(document.getElementById("fecha"), document.getElementById("errFecha"));
    verifGen();
    verifProv();
    
    if(counter == 0){
        return true;
    }
    
    return false;
}

function verifDatos(objeto, error){
    let check=false;
    // if(objeto.value == ""){
    //     //Entonces es un error.
    //     error.innerHTML = message;
    //     //Añadir clase.
    //     objeto.classList.add("errorTexto");
    // } else {
    //     error.innerHTML = "";
    //     //Quitar clase.
    //     objeto.classList.remove("errorTexto");
    // }
    if(!objeto.value.checkValidity()){
        //Entonces es un error.
        error.innerHTML = objeto.validationMessage;
        //Añadir clase.
        objeto.classList.add("errorTexto");
        counter++
    } else {
        error.innerHTML = "";
        //Quitar clase.
        objeto.classList.remove("errorTexto");
        check=true 
    }
    return check
}

function verifGen(){
    let generos = document.getElementsByName("genero");
    let checked = false;
    for(let i = 0; i < generos.length; i++){
        if(generos[i].checked){
            checked = true;
        }
    }
    
    if(checked == false){
        document.getElementById("errGenero").innerHTML = message;
    } else {
        document.getElementById("errGenero").innerHTML = "";
    }
}

function verifProv(){
    let prov = document.getElementById("provincia");
    if(prov.selectedIndex == 0){
        document.getElementById("errProv").innerHTML = message;
        prov.classList.add("errorTexto");
    } else {
        document.getElementById("errProv").innerHTML = "";
        prov.classList.remove("errorTexto");
    }
}