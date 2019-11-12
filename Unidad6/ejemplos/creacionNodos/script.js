"use strict"
let contador=1;

window.addEventListener("load", ()=>{
    crearBotones();
    asigEventBoton();
    crearCapalista();
    
})

function crearBotones(){
    let capa=document.createElement("div");
    // establecer atributos a la capa
    capa.setAttribute("id", "capaBotones");
    // añadir la capa al html
    document.body.appendChild(capa);
    creaBoton('addEle','Insertar elemento',capa,false);
    creaBoton('editEle','Modificar elemento',capa,true);
    creaBoton('delEle','Borrar elemento',capa,true);
    creaBoton('addBEle','Modificar elemento',capa,true);
}

function asigEventBoton(){
    document.getElementById("addEle").addEventListener("click",addElemento)
    document.getElementById("editEle").addEventListener("click",editElemento)
    document.getElementById("delEle").addEventListener("click",delElemento)
    document.getElementById("addBEle").addEventListener("click",addBElemento)
}

function crearCapalista(){
    let capa=document.createElement("div");
    let lista= document.createElement("ol");
    capa.setAttribute("id","capaLista");
    lista.setAttribute('id','list');
    capa.appendChild(lista);
    document.body.appendChild(capa);
}

function addElemento(){
    let item= document.createElement("li");
    let texto=document.createTextNode(`Elemento ${contador}`);
    let lista= document.getElementById('list');
    item.appendChild(texto);
    lista.appendChild(item);
    contador++;
    if(lista.childNodes.length==1){
        habDesBot(false)
    }
    
}

function editElemento(){
    
}

function delElemento(){
    
}

function addBElemento(){
    
}

function habDesBot(valor){
    for (let ele of document.getElementsByTagName('button')){
        ele.disabled=valor;
    }
}


function creaBoton(id,texto,lugar,disabled){
    let boton= document.createElement('button');
    //establecer attributos
    boton.setAttribute('type','button');
    boton.setAttribute('id',id);
    boton.innerText = texto;
    boton.disabled=disabled;
    lugar.appendChild(boton);
}