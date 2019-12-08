"use strict"
$(()=>{
    //estableer los eventos
    $("#verTodas").on("click",mostrar);
    $("#verNinguna").on("click",ocultar);
    cargarImagenes();

});
function cargarImagenes(){
    for (let index = 0; index < 24; index++) {
        $('#imagenes').append("<img class='image' src='./imagenes/image.jpg'></img>")
    }
    $(".image").addClass('ocultar');
    $(".image").css("opacity","0.1");
    $(".image").on("click",mostOcuUna);
}

function mostOcuUna(){
    let opc;
    if($(this).hasClass('ocultar')){
        opc="1";
    }else{
        opc="0.1";

    }
    $(this).toggleClass('ocultar');
    $(this).animate({
        opacity:opc
    },1000)
}

function mostrar(){
    animateShow($(".ocultar").first())
};

function animateShow(actual){
    $(actual).removeClass('ocultar')
    $(actual).animate({
        opacity:1
    },300,animateShow($(".ocultar").first()));
}
function animateHide(actual){
    $(actual).addClass('ocultar')
    $(actual).animate({
        opacity:0.1
    },300, animateHide($("img:not('.ocultar')").last()));
}

function ocultar(){
    animateHide($("img:not('.ocultar')").last())
};