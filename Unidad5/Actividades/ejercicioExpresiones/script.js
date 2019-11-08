"use srtrict"


window.addEventListener("load", ()=>{
    document.getElementById('botonInput1').addEventListener("click",function(){comprobarexpresion('input1',/Alejandro/)});
    document.getElementById('botonInput2').addEventListener("click",function(){comprobarexpresion('input2',/^Alejandro/)});
    document.getElementById('botonInput3').addEventListener("click",function(){comprobarexpresion('input3',/\svisión\s/)});
    document.getElementById('botonInput4').addEventListener("click",function(){comprobarexpresion('input4',/\Svisión/)});
    document.getElementById('botonInput5').addEventListener("click",function(){comprobarexpresion('input5',/^(cama)|(mesita\sde\snoche)$/)});
    document.getElementById('botonInput6').addEventListener("click",function(){comprobarexpresion('input6',/^((a+)|(b+))$/)});
    document.getElementById('botonInput7').addEventListener("click",function(){comprobarexpresion('input7',/((aba)|(bab))/)});
    document.getElementById('botonInput8').addEventListener("click",function(){comprobarexpresion('input8',/^(([0-1][0-9])|(2[0-3]))((:[0-5][0-9]){2})$/)});
    //Visa
        //  /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/
    //MasterCard
        //  /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/
    document.getElementById('botonInput9').addEventListener("click",function(){comprobarexpresion('input9',/^(4\d{3}\d{4}\d{4}\d{4})|(4\d{3}-\d{4}-\d{4}-\d{4})|(5[1-5]\d{2}\d{4}\d{4}\d{4})|(5[1-5]\d{2}-\d{4}-\d{4}-\d{4})$/)});
    document.getElementById('botonInput10').addEventListener("click",function(){comprobarexpresion('input10',/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/)});
    document.getElementById('botonInput11').addEventListener("click",function(){comprobarexpresion('input11',/^[8-9](\d{8})$/)});
});



function comprobarexpresion(id,expresion)  {
    let objeto=document.getElementById(id)
    if(expresion.test(objeto.value)){
        alert("correcto")
    }else{
        alert("Incorrecto")
    }
}