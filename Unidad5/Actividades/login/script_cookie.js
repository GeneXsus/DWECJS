"use strict"
//variables globales
let in_usuario = document.getElementById('usuario');
let in_password = document.getElementById('contrasena');
let arrayUsuarios= cargarListaCookie();
in_usuario.placeH_last = in_usuario.placeholder;
in_password.placeH_last = in_password.placeholder;
window.addEventListener('load',function(){
    document.getElementById('formulario').addEventListener('submit',function (e){
        let evento=e||window.event;
     
        if(comprobarDatos()){
            if (document.getElementById('check').checked){
                document.cookie= `${in_usuario.value}=${in_password.value};`;
            }
            alert('logueado');
        }else{
            evento.preventDefault();
            evento.stopPropagation();
        }
    });
    in_usuario.addEventListener('focus',function(){
        resetPlaceholder(this);
    });
    in_password.addEventListener('focus',function(){
        resetPlaceholder(this);
        if (arrayUsuarios[in_usuario.value]){
            this.value= arrayUsuarios[in_usuario.value];
        }
    });

});


//funciones
function resetPlaceholder(elemento){
    elemento.placeholder= elemento.placeH_last;
}

function comprobarDatos(){
    let correcto= true;
    if(!comprobarRelleno(in_usuario)) 
        correcto= false;
    if(!comprobarRelleno(in_password)) 
        correcto= false;

    return correcto ;
}

function comprobarRelleno(elemento){
    if( elemento.value== ''){
        elemento.placeholder='Tiene que rellenar este campo';
        elemento.classList.add('is-invalid');
        elemento.classList.remove('is-valid');
        return false 
    }else{
        resetPlaceholder(elemento);
        elemento.classList.remove('is-invalid');
        elemento.classList.add('is-valid');
        return  true
    }
}

function cargarListaCookie(){
    return document.cookie.split(';').reduce((cookies, cookie) => {
        let cookieSplit= cookie.split('=');
        let name= cookieSplit[0].trim();
        let value= cookieSplit[1].trim();
        cookies[name] = value;
        return cookies;
      }, {});
}