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
    let correcto=true;
    if(in_usuario.value== ''){
        correcto=false;
        in_usuario.placeholder='Tiene que rellenar este campo';
        in_usuario.classList.add('is-invalid');
        in_usuario.classList.remove('is-valid');
    }else{
        in_usuario.classList.remove('is-invalid');
        in_usuario.classList.add('is-valid');
    }

    if( in_password.value== ''){
        correcto=false;
        in_password.placeholder='Tiene que rellenar este campo';
        in_password.classList.add('is-invalid');
        in_password.classList.remove('is-valid');
    }else{
        in_password.classList.remove('is-invalid');
        in_password.classList.add('is-valid');

    }
    return correcto
}

