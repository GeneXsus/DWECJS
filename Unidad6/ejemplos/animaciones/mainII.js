"use strict"
$(()=>{
    //establecer eventos
    $(":button[value='slideDown']").on("click",abajo);
    $(":button[value='slideUp']").on("click",function(){
        $('#figura').slideUp('fast');
    });
    $(":button[value='slideToggle']").on("click",function(){
        $('#figura').slideToggle(2000,()=>{
        alert("animacion terminada")
        }
        );

    });
});

function abajo() {
    $('#figura').slideDown(3000);
}