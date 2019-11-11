"use strict"
//declararcio variables
let iClave, iValor;
let mostrado= document.getElementById('mostrado');
let listado=document.getElementById('listado');
let arrayCookies;
//asiganar eventos
window.addEventListener('load',function(){
    //asignar los objetos a variables
    
    iClave = document.getElementById('clave');
    iValor = document.getElementById('valor');
    //asiganr eventos a botones
    document.getElementById('addCookie').addEventListener("click",anadirC);
    document.getElementById('viewCookie').addEventListener("click",mostrarC);
    document.getElementById('listCookie').addEventListener("click",listarC);
    document.getElementById('delCookie').addEventListener("click",eliminarC);
});


function anadirC(){
        if (window.sessionStorage) {
            if (iClave.value!=''){
                sessionStorage.setItem(iClave.value, iValor.value);

            }

        }else {
        throw new Error('Tu Navegador no soporta sessionStorage!');
        }

}

function mostrarC(){
    listado.innerHTML='';
    if (window.sessionStorage) {
        if (sessionStorage.getItem(iClave.value) != undefined)
         mostrado.innerHTML= `El valor de ${iClave.value}  es ${sessionStorage.getItem(iClave.value)}`;
        else{
            mostrado.innerHTML= `No existe la cookie ${iClave.value}`
        }
    }else {
    throw new Error('Tu Navegador no soporta sessionStorage!');
    }
}

function listarC(){
  
    listado.innerHTML='';
    mostrado.innerHTML='';
    if (sessionStorage.length > 0){
        for (let i = 0; i < sessionStorage.length; i++) 
        {
            listado.innerHTML+= `La clave es ${sessionStorage.key(i)} y su valor es ${sessionStorage.getItem(sessionStorage.key(i))} <br>`
        }
    }else{
        mostrado.innerHTML= `No hay nada en local storage`
    }
}

function eliminarC(){
    listado.innerHTML='';
    if (window.sessionStorage) {
        if (sessionStorage.getItem(iClave.value) != undefined){
            sessionStorage.removeItem(iClave.value);
            mostrado.innerHTML= 'Cookie eliminada';
        }
        else{
            mostrado.innerHTML= `No existe la cookie ${iClave.value}`
        }
    }else {
    throw new Error('Tu Navegador no soporta sessionStorage!');
    }

}



