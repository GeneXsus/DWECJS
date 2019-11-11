"use strict"
//varibles
let nom,edad,loc;
//principal
window.addEventListener('load', function(){
    nom=document.getElementById('nombre');
    edad=document.getElementById('edad');
    loc=document.getElementById('localidad');
    // asignar eventos
    document.getElementById('addCookie').addEventListener('click',crear)
    document.getElementById('listCookie').addEventListener('click',listar)
})

function crear(){
    let objeto={
        nombre:nom.value,
        edad:edad.value,
        localidad:loc.value
    }
    //guerdar en local
    localStorage.setItem("persona"+(localStorage.length+1), JSON.stringify(objeto));
    
    for (let ele of  document.getElementsByTagName('input') ){
        ele.value="";
    };
}

function listar(){
    document.getElementById("listado").innerHTML="";//limpiar
    for (let i = 0; i < localStorage.length; i++) {
        let objeto= JSON.parse(localStorage.getItem(localStorage.key(i)));

        document.getElementById("listado").innerHTML+=`nombre=${objeto.nombre} | edad=${objeto.edad} | localidad=${objeto.localidad}<br> `
    }

}