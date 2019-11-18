
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