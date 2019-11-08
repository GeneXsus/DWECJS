"use strict"
//declararcio variables
let iClave, iValor,listado;
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
    //elimine a los 20 segundos
    let fecha = new Date();
    // fecha.setTime(fecha.getTime()+20000);
    document.cookie= `${iClave.value}=${iValor.value};`;
    //limpiar datos
    // iClave.value
}

function mostrarC(){
    let arrayCookies=cargarListaCookie();
    if (arrayCookies[iClave.value]){
        document.getElementById('mostrado').innerHTML= `El valor de ${iClave.value}  es ${arrayCookies[iClave.value]}`;
    }else{
        document.getElementById('mostrado').innerHTML= `No existe la cookie ${iClave.value}`
    }
}

function listarC(){
    let arrayCookies=cargarListaCookie();

    for (let key in arrayCookies)
    {
        document.getElementById('listado').innerHTML+= `La clave es ${key} y su valor es ${arrayCookies[key]} <br>`
        
    };

}

function eliminarC(){
    let fecha = new Date();
    fecha.setTime(fecha.getTime()-20000);
    document.cookie=`${iClave.value}=${iValor.value}; expires=${fecha.toGMTString()};`;
    document.getElementById('mostrado').innerHTML= 'Cookie eliminada';
}


function cargarListaCookie(){
    return document.cookie.split(';').reduce((cookies, cookie) => {
        let [ name, value ] = cookie.split('=').map(c => c.trim());
        cookies[name] = value;
        return cookies;
      }, {});
}


