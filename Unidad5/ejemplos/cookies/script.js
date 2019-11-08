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
    if (iClave.value!=''){
        document.cookie= `${iClave.value}=${iValor.value};`;

    }

}

function mostrarC(){
    listado.innerHTML='';
    if(existeCookie()){
            mostrado.innerHTML= `El valor de ${iClave.value}  es ${arrayCookies[iClave.value]}`;
    }else{
        mostrado.innerHTML= `No existe la cookie ${iClave.value}`
    }
}

function listarC(){
  
    listado.innerHTML='';
    mostrado.innerHTML='';
    if(document.cookie != ''){
        arrayCookies=cargarListaCookie();
        for (let key in arrayCookies)
        {
            listado.innerHTML+= `La clave es ${key} y su valor es ${arrayCookies[key]} <br>`
        };
    }else{
        mostrado.innerHTML= 'No hay cookies';
    }
}

function eliminarC(){
    let fecha = new Date();
    listado.innerHTML='';
    fecha.setTime(fecha.getTime()-20000);
    if(existeCookie()){
            document.cookie=`${iClave.value}=; expires=${fecha.toGMTString()};`;
            document.getElementById('mostrado').innerHTML= 'Cookie eliminada';
    }else{
        mostrado.innerHTML= `No existe la cookie ${iClave.value}`
    }
}

function existeCookie(){
    if(document.cookie != ''){
        arrayCookies= cargarListaCookie();
        if (arrayCookies[iClave.value]){
            return true 
        }
    }
    return false;

}

function cargarListaCookie(){
    return document.cookie.split(';').reduce((cookies, cookie) => {
        // let [ name, value ] = cookie.split('=').map(c => c.trim()); Esto sería con mapa
        let cookieSplit= cookie.split('=');
        let name= cookieSplit[0].trim();
        let value= cookieSplit[1].trim();
        cookies[name] = value;
        return cookies;
      }, {});
}


