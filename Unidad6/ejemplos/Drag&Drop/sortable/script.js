"use strict"
let numbers=[]
let dialogo;

$(()=>{
    
    //generar numeros aleatorios y mostrar en los span
    generarNumeros()
    $(".ui-button").on("click",comprobar);
    $('#sortable').sortable()
    $('#sortable').disableSelection()
    configDialog()

})

function generarNumeros() {
    numbers=[];
    $('.ui-state-default span').each(function(){
        let numero;
        do{
            numero= 1 + Math.floor(Math.random() * 50);
        }while($.inArray(numero,numbers) > -1);
        numbers.push(numero);
        $(this).text(numero);

    });
    numbers.sort(function(a,b) {
        return a - b;
    });
    
}

function comprobar(){
    let numeros=[]
    $('.ui-state-default span').each(function(){
        numeros.push(parseInt($(this).text()));

    })
    
    if(isEcual(numbers,numeros)){
        haGanado();
    }else{
        haPerdido();
    }
    dialogo.dialog("open");
    
}


function haGanado(){
    $("#dialogo p").text("Has ganado")
}

function haPerdido(){
    $("#dialogo p").text("Has perdido")
}

function configDialog(){
    dialogo=$( "#dialogo" ).dialog({
        resizable: false,//no se puede cambiar el tamañp
        height: "auto",
        width: 400,
        modal: true,
        autoOpen:false,
        buttons: {
          "Nueva Jugada": function() {
            generarNumeros();
            dialogo.dialog( "close" );
          },
          "Seguir jugada": function() {
            dialogo.dialog( "close" );
          }
        },
        show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
      });
} 

function isEcual(array1,array2){

    for (let index = 0; index < array1.length; index++) {
        if(array1[index]!=array2[index]){
            return false;
        }
        
    }
    return true

}
