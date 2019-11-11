"use strict"
//variables globales
let in_usuario = document.getElementById('usuario');
let in_password = document.getElementById('contrasena');
in_usuario.placeH_last = in_usuario.placeholder;
in_password.placeH_last = in_password.placeholder;
window.addEventListener('load',function(){
    document.getElementById('formulario').addEventListener('submit',function (e){
        let evento=e||window.event;
        if(comprobarDatos()){
            if (document.getElementById('check').checked){
                if (window.localStorage) {
                    localStorage.setItem(in_usuario.value, in_password.value);
        
                    
        
                }else {
                throw new Error('Tu Navegador no soporta LocalStorage!');
                }
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
        if (localStorage.getItem(in_usuario.value) != undefined){
            this.value= localStorage.getItem(in_usuario.value);
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


