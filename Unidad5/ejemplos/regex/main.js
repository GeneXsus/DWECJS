"use srtrict"

window.addEventListener("load", ()=>{
    document.getElementById('boton').addEventListener("click",expresionReg);
});


function expresionReg(){
    let expresion;
    let objeto = document.getElementById('texto');
    //contenga la palabra perro
    // expresion=/perro/;
    //contega perro al princio
    //  expresion=/^perro/i;
    //contega perro al final
    //  expresion=/perro$/i;
    //solo perro
    //  expresion=/^perro$/i;
    // expresion = new RegExp("^perro$",'i')
    // solo perro o gato
    // expresion=/^perro|gato$/i
    //solo letras minusculas y mayusculas que no este vacio
    // expresion=/^[a-zñ\sá-ú]+$/i
    
    // matricula no vocales q,ñ,ch,,ll

    expresion=/^(\d{4})([^!-AÑQEIOU\d\[-■]{3})$/
    if(expresion.test(objeto.value)){
        alert("correcto")
    }else{
        alert("Incorrecto")
    }
}