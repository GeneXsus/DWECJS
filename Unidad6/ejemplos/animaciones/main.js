"use strict"
$(()=>{
    //establecer eventos
    $(":button[value='hide']").on("click",ocultar);
    $(":button[value='show']").on("click",function(){
        $('#figura').show('fast');
    });
    $(":button[value='toggle']").on("click",function(){
        $('#figura').toggle(2000,()=>{
        // alert("animacion terminada")
        }
        );

    });
});

function ocultar() {
    $('#figura').hide(3000);
}