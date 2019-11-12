"use strict"

window.addEventListener("load", ()=>{
    let html= document.documentElement;
    if(html.hasChildNodes){
        recorrerhijos(html)
    }
    

})

function recorrerhijos(ele){
    for(let elem of ele.childNodes ){
        if (elem.nodeType !=3){
            document.write(`${elem.nodeName} <br>`)
            if(ele.hasChildNodes){
                recorrerhijos(elem)
            }
           
        }else{
            document.write(elem.nodeValue+"<br>")
        }
    }
}