let contA=0, contR=0,dialogo;
$(()=>{
    rojoDragable();
    azulDragable();
    rojoDropable();
    azulDropable();
    configDialog()
    
})

function rojoDragable(){
    $( ".rojo" ).draggable({
        // axis:"x"//movimiento lateral;
        containment:"#principal",
        helper: "clone",  //move clone
        revert: true,
        opacity:0.35,
        drag:function(event,ui){
            console.log("drag")
            // console.log(event)
            // console.log(ui)
        },
        start:function(event,ui){
            console.log("start")
            
        },
        stop:function(event,ui){
            console.log("stop")
            
        }
    }   
    
    );
    
}
function azulDragable(){
    $( ".azul" ).draggable({
        // axis:"y"//movimiento lateral;
        containment:"#principal",
        revert: true,
        distance: 100,
        opacity:0.35
        // revertDuration: 2000

    });

}
function rojoDropable(){
    $("#contRojo").droppable({
        
        classes:{
            "ui-droppable-hover":"ui-state-hover"
        },
        accept:".rojo",
        drop:(function(event,ui){
            //quitar la opcion revert
            // ui.draggable.revert(false);
            $(ui.draggable).draggable("option","revert",false);
            contR++
            
            //añadir objeto a rojo
            $(this).append(`<div class=${$(ui.draggable).attr("class")}></div>`)
            
            $(ui.draggable).remove();
            //dibuje el objeto segu la posicion del raton;
            $(this).find("div:last").css({
                top:ui.position.top,
                left:ui.position.left
            })
            $(this).find("span").html(`Arrastra aquí elementos rojos<br><b>Drop=${contR}</b>`)
            comprobar();
        }),
        over: function(){
            $(this).find("span").text("Suelta el objeto rojo")
        },
        out:function(){
            $(this).find("span").text("Arrastra aquí elementos rojos")
        },
    })

}
function azulDropable(){
    $("#contAzul").droppable({
        
        classes:{
            "ui-droppable-hover":"ui-state-highlight"
        },
        
        accept:".azul",
        drop:(function(event,ui){
            //quitar la opcion revert
            // ui.draggable.revert(false);
            $(ui.draggable).draggable("option","revert",false);
            $(ui.draggable).draggable("disable");
            //repopner span
            contA++
               
            //añadir objeto a rojo
            $(this).append(`<div class=${$(ui.draggable).attr("class")}></div>`)
            
            $(ui.draggable).remove();
            //dibuje el objeto segu la posicion del raton;
            $(this).find("div:last").css({
                top: ui.position.top,
                left: ui.position.left
            })
            
            $(this).find("span").html(`Arrastra aquí elementos azules<br><b>Drop=${contA}</b>`)
            comprobar();
        }),
        over: function(){
            $(this).find("span").text("Suelta el objeto azul")
        },
        out:function(){
            $(this).find("span").text("Arrastra aquí elementos azules")
        },
    })
}

function comprobar(){
    if(contA==2 && contR==2){
        dialogo.dialog("open");
    }
};



function configDialog(){
    dialogo=$( "#dialogo" ).dialog({
        resizable: false,//no se puede cambiar el tamañp
        height: "auto",
        width: 400,
        modal: true,
        autoOpen:false,
        buttons: {
          "Finalizar": function() {
            dialogo.dialog( "close" );
          },
         
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