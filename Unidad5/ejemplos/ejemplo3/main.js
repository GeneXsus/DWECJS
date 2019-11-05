"use strict";
//declaracion de variables


//function
function comprobar(){
    let arrayErr=[];
    let valido=true;
    //comprobar el nombre
    arrayErr.push(verifDatos(document.getElementById("nombre"),document.getElementById("errNom")));
    arrayErr.push(verifDatos(document.getElementById("edad"),document.getElementById("errEdad")));
    arrayErr.push(verifDatos(document.getElementById("fecha"),document.getElementById("errFecha")));
    arrayErr.push(verifGenero());
    arrayErr.push(verifProvincia());
    arrayErr.forEach((ele)=>{
        if(!ele){
            valido=false;
                }      
    });
    if(valido){
        return true;
    }
    else{
        return false;
    }
}




function verifDatos(objeto,error){
    let check=false;
    if(objeto.value==""){
        //error
        error.innerHTML="Dato Requeridos";
        //añadir clase
        objeto.classList.add("errorTexto");
    }
    else{
        error.innerHTML="";
        //quitar lka clase errorTexto;
        objeto.classList.remove("errorTexto");
        check=true;
    }
    return check;
}
function verifGenero(){
    let check=false;
    for(let ele of document.getElementsByName("genero")){
        if(ele.checked){
            check=true;
        }
    }
    ;
    if(!check){
        document.getElementById("errGenero").innerHTML="Dato Requerido";
        //quitar lka clase errorTexto;
        document.getElementById("errGenero").classList.add("errorTexto");
    }
    else{
        document.getElementById("errGenero").innerHTML="";
        //añadir clase
        document.getElementById("errGenero").classList.remove("errorTexto");
    }

    return check;
}
function verifProvincia(){
    let check=false;
    if(document.getElementById("provincia").selectedIndex==0){
        document.getElementById("errProv").innerHTML="Dato requerido";
        document.getElementById("provincia").classList.add("errorTexto");
        check=true;
    }
    else{
        document.getElementById("errProv").innerHTML="";
        document.getElementById("provincia").classList.remove("errorTexto");  
    }
    return check;


}

document.onload= function(){
    grecaptcha.ready(function() {
        grecaptcha.execute('6LfJ0r8UAAAAAClsoasQjaYytqbAjsCxeCL_FKFs', {action: 'homepage'}).then(function(token) {
           document.getElementById('g-recaptcha-response').value=token
        });
    });
}