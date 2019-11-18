"use strict"
let contador=1;

window.addEventListener("load", ()=>{
    crearBotones();
    asigEventBoton();
    crearCapalista();
    
})

function crearBotones(){
    let capa= creaElemento('div',false,null,'capabotones',document.body)
    creaElemento('button',false,'Insertar elemento','addEle',capa,null,false);
    creaElemento('button',false,'Modificar elemento','editEle',capa,null,true);
    creaElemento('button',false,'Borrar elemento','delEle',capa,null,true);
    creaElemento('button',false,'Añadir antes elemento','addBEle',capa,null,true);
}


function asigEventBoton(){
    document.getElementById("addEle").addEventListener("click",addElemento)
    document.getElementById("editEle").addEventListener("click",editElemento)
    document.getElementById("delEle").addEventListener("click",delElemento)
    document.getElementById("addBEle").addEventListener("click",addBElemento)
}

function crearCapalista(){
    let capa=creaElemento('div',false,null,'capaLista',document.body)
    creaElemento('ol',false,null,'list',capa);
}

function addElemento(){
    let texto=creaElemento(null,true,`Elemento ${contador}`);
    let lista= document.getElementById('list');
    creaElemento('li',false,null,null,lista,texto);;
    contador++;
    if(lista.childNodes.length==1){
        habDesBot(false)
    }
    
}

function editElemento(){
    let texto=creaElemento(null,true,`Elemento ${contador}`);
    let item= creaElemento('li',false,null,null,null,texto);
    document.getElementById('list').replaceChild(item, document.getElementById("list").lastChild);
    contador++;
    
}

function delElemento(){
    document.getElementById('list').removeChild(document.getElementById("list").lastChild);
    contador--;
    if(!document.getElementById('list').hasChildNodes()){
        habDesBot(true);
        contador=1;
    }
}

function addBElemento(){
    let texto=creaElemento(null,true,`Elemento ${contador}`,null,null,null,null);
    let item= creaElemento('li',false,null,null,null,texto);
    document.getElementById('list').insertBefore(item, document.getElementById("list").lastChild);
    contador++;
}

function habDesBot(valor){
    document.getElementById("editEle").disabled=valor;
    document.getElementById("delEle").disabled=valor;
    document.getElementById("addBEle").disabled=valor;
}


function creaElemento(tipo,isTextNode=false,texto=null,id=null,lugar=null,contenido=null,disabled=null){
    let elemento;
    if(isTextNode){
        elemento=document.createTextNode(texto);
    }else{
        elemento= document.createElement(tipo);
        //establecer attributos
        if(id !=null){
            elemento.setAttribute('id',id);
        }
    
        if(texto != null){
            elemento.innerText = texto;
        }
    
        if(contenido != null){
            elemento.appendChild(contenido);
        }
    
        if(disabled != null){
            elemento.disabled=disabled;
        }
    
    }
    
    if(lugar != null){
        lugar.appendChild(elemento);
    }

    return elemento;
}