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
    
        if (window.localStorage) {
            if (iClave.value!=''){
                localStorage.setItem(iClave.value, iValor.value);

            }

        }else {
        throw new Error('Tu Navegador no soporta LocalStorage!');
        }

}

function mostrarC(){
    listado.innerHTML='';
    if (window.localStorage) {
        if (localStorage.getItem(iClave.value) != undefined)
         mostrado.innerHTML= `El valor de ${iClave.value}  es ${localStorage.getItem(iClave.value)}`;
        else{
            mostrado.innerHTML= `No existe la cookie ${iClave.value}`
        }
    }else {
    throw new Error('Tu Navegador no soporta LocalStorage!');
    }
}

function listarC(){
  
    listado.innerHTML='';
    mostrado.innerHTML='';
    if (localStorage.length > 0){
        for (let i = 0; i < localStorage.length; i++) 
        {
            listado.innerHTML+= `La clave es ${localStorage.key(i)} y su valor es ${localStorage.getItem(localStorage.key(i))} <br>`
        }
    }else{
        mostrado.innerHTML= `No hay nada en local storage`
    }
}

function eliminarC(){
    listado.innerHTML='';
    if (window.localStorage) {
        if (localStorage.getItem(iClave.value) != undefined){
            localStorage.removeItem(iClave.value);
            mostrado.innerHTML= 'Cookie eliminada';
        }
        else{
            mostrado.innerHTML= `No existe la cookie ${iClave.value}`
        }
    }else {
    throw new Error('Tu Navegador no soporta LocalStorage!');
    }

}



