
"use strict"

$(()=>{
    //establecer eventos
    $(":button[value='animacion1']").on("click",dimensionar);
    $(":button[value='animacion2']").on("click",function(){
        $('#figura').animate({
            width:'500px',
            height: '150px',
            left:'500000px',
            opacity:'0.5'
        },50000)
       
    });
    $(":button[value='animacion3']").on("click",animacion1);
    animacTitulo();
});

function dimensionar() {
    $('#figura').animate({
        width:'500000px',
        height: '150px'
    },50000)
}


function animacion1(){
    $('#figura').animate({
        width:'100px',
        height: '100px',
        left:'100%',
        top:'0',
        backgroundColor:'red'
    },500,animacion2)

}
function animacion2(){
    $('#figura').animate({
        width:'100px',
        height: '100px',
        left:'50%',
        top:'100vh',
        backgroundColor:'blue'
    },500,animacion3)
}


function animacion3(){
    $('#figura').animate({
        width:'100px',
        height: '100px',
        left:'0',
        top:'0',
        backgroundColor:'green'
    },500,animacion1)

}

function animacTitulo(){
    $('#titulo').animate({
        left: (screen.width-155),
        color: 'red'
    },2000,volver)
    

}

function volver(){
    $('#titulo').animate({
        left: ((screen.width-155)/2),
        color: 'blue'
    },2000)
    

}
