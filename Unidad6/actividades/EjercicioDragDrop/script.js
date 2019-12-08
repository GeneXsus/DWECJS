let contador = 0,
    animales = 0,
    contadorP, dialogo;
$(() => {
    //establecer eventos
    contadorP = $("#puntos")
    animales = $(".animal").toArray().length
    shuffleElements($(".animal"));
    animacTitulo();
    animalDragable();
    carneDropable()
    hierbaDropable()
    insectoDropable()
    configDialog()
});




function animacTitulo() {
    $('#titulo').animate({
        fontSize: "60px",
        left: ($("#titulo").parent().width() - 610),


    }, 2000, volver)


}

function volver() {
    $('#titulo').animate({
        fontSize: "30px",
        left: $("#titulo").parent().width() / 2 - 304 / 2
    }, 2000)
}

function animalDragable() {
    $(".animal").draggable({
        revert: true,
        opacity: 0.35,
        zIndex: 900
    });
}

function carneDropable() {
    $("#carne").droppable({
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        accept: ".animal",
        drop: (function (event, ui) {
            if ($(ui.draggable).hasClass('carnivoro')) {
                $(ui.draggable).hide();
                contador += 5
                contadorP.text(`${contador} Puntos`)
                animales--;
            } else {
                contador -= 5
                contadorP.text(`${contador} Puntos`)
            }
            comprobar();
        })
    })
}

function hierbaDropable() {
    $("#hierba").droppable({
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        accept: ".animal",
        drop: (function (event, ui) {
            if ($(ui.draggable).hasClass('herbivoro')) {
                $(ui.draggable).hide();
                contador += 5
                contadorP.text(`${contador} Puntos`)
                animales--;
            } else {
                contador -= 5
                contadorP.text(`${contador} Puntos`)
            }
            comprobar();
        })
    })
}

function insectoDropable() {
    $("#insecto").droppable({

        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        accept: ".animal",
        drop: (function (event, ui) {
            if ($(ui.draggable).hasClass('insectivoro')) {
                $(ui.draggable).hide();
                contador += 5
                contadorP.text(`${contador} Puntos`)
                animales--;
            } else {
                contador -= 5
                contadorP.text(`${contador} Puntos`)
            }
            comprobar();
        })
    })
}

function comprobar() {
    if (animales == 0) {
        dialogo.dialog("open")
        $("#dialogo").text(`${contador} Puntos`)
    }
}


function configDialog() {
    dialogo = $("#dialogo").dialog({
        resizable: false, //no se puede cambiar el tamañp
        height: "auto",
        width: 400,
        modal: true,
        autoOpen: false,
        buttons: {
            "Volver a jugar": function () {
                $(".animal").show();
                animales = $(".animal").toArray().length
                contador = 0
                shuffleElements($(".animal"));
                contadorP.text(`${contador} Puntos`)
                dialogo.dialog("close");
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



//desordenar elementos
function shuffleElements($elements) {
    var i, index1, index2, temp_val;

    var count = $elements.length;
    var $parent = $elements.parent();
    var shuffled_array = [];


    // populate array of indexes
    for (i = 0; i < count; i++) {
        shuffled_array.push(i);
    }

    // shuffle indexes
    for (i = 0; i < count; i++) {
        index1 = (Math.random() * count) | 0;
        index2 = (Math.random() * count) | 0;

        temp_val = shuffled_array[index1];
        shuffled_array[index1] = shuffled_array[index2];
        shuffled_array[index2] = temp_val;
    }

    // apply random order to elements
    $elements.detach();  //hacer que cuando se copie el elemento se elimine el original del array
    for (i = 0; i < count; i++) {
        $parent.append($elements.eq(shuffled_array[i]));
    }
}