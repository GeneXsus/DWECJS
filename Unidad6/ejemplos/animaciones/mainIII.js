
"use strict"
let sem=false;
$(()=>{
    //establecer eventos
    $(":button[value='fadeIn']").on("click",fadIn);
    $(":button[value='fadeOut']").on("click",function(){
        $('#figura').fadeOut('fast');
    });
    $(":button[value='fadeToggle']").on("click",function(){
        $('#figura').fadeToggle(2000,()=>{
            alert("animacion terminada")
        }
        );
        
    });
    $(":button[value='fadeTo']").on("click",function(){
        if(!sem){
            $('#figura').fadeTo('fast',0.25);

        }else{
            $('#figura').fadeTo('fast',1);
        }
        sem = !sem
    });
});

function fadIn() {
    sem = false
    $('#figura').css({
        'opacity':'1'
    });
    $('#figura').fadeIn(3000);
}