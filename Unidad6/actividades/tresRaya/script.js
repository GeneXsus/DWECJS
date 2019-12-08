"use strict"
//variables globales
const RECEPTORESVALIDOS = {
    '1': [2, 4, 5],
    '2': [1, 3, 5],
    '3': [2, 5, 6],
    '4': [1, 5, 7],
    '5': [1, 2, 3, 4, 6, 7, 8, 9],
    '6': [3, 5, 9],
    '7': [4, 5, 8],
    '8': [5, 7, 9],
    '9': [5, 6, 8],
};
const TIEMPOJUEGO = 15;
let jugadorX = 'jugadorX',
    jugador0 = 'jugador0';
let fichasX = 0,
    fichas0 = 0,
    apagar = true,
    intervalo, 
    turnoJugadorX = true,
    dragOn = false,
    dialogo;

let tiempo = 15;



//codigo
$(() => {

    $('body').append('<div id="contendor" class="contenedor">' +
        '<h1 id="titulo">Tres en Raya</h1>' +
        '<table id="tablero"><table>' +
        '<div id="jugadores">' +
        '<p id="' + jugadorX + '">Turno del Jugador X: <span id="tiempoX" class="tiempo">15</span></p>' +
        '<p id="' + jugador0 + '">Turno del Jugador 0: <span id="tiempo0" class="tiempo">15</span></p>' +
        '</div>' +
        '<div id="comenzar">Comenzar</div>' +
        '<div id="dialogo" title="Fin del juego"></div>' +
        '</div>')

    let contadorTab = 1;
    for (let fila = 0; fila < 3; fila++) {
        let texto = '';
        for (let columna = 0; columna < 3; columna++) {
            let diagonal = ''
            switch (contadorTab) {
                case 1:
                    diagonal = ' diagonal1'
                    break;
                case 3:
                    diagonal = ' diagonal2'
                    break;
                case 5:
                    diagonal = ' diagonal1 diagonal2'
                    break;

                case 7:
                    diagonal = ' diagonal2'
                    break;
                case 9:
                    diagonal = ' diagonal1'
                    break;
                default:
                    diagonal = ''
                    break;
            }
            texto += "<td id='" + contadorTab + "' class='celda columna" + (columna + 1) + " fila" + (fila + 1) + diagonal + "' comprobaciones='columna" + (columna + 1) + " fila" + (fila + 1) + diagonal + "'></td>";
            contadorTab++

        }
        $('#tablero').append('<tr>' + texto + '</tr>');

    }
    configDialog()
    $('#comenzar').on('click', iniciar);
})




//funciones de eventos
function iniciar() {
    $('#comenzar').hide()
    turnoJugadorX = Math.random() >= 0.5;
    cambiaTurno();
}

function cambiaTurno() {
    clearInterval(intervalo);
    $('.tiempo').html(TIEMPOJUEGO);
    turnoJugadorX = !turnoJugadorX
    if (apagar) {
        $('.celda').off('click');
    }

    if (turnoJugadorX) {
        $('#' + jugadorX).addClass('turnoJugador');
        $('#' + jugador0).removeClass('turnoJugador');
        if (fichasX > 2) {
            habilitarFichas(jugadorX, jugador0);
        } else {
            if (dragOn) {
                $(".ficha").draggable('disable');
            }
            $('.celda:empty').on('click', function () {
                annadiFichaX(this);
            })
        }

    } else {
        $('#' + jugador0).addClass('turnoJugador');
        $('#' + jugadorX).removeClass('turnoJugador');
        if (fichas0 > 2) {
            habilitarFichas(jugador0, jugadorX)
        } else {
            if (dragOn) {
                $(".ficha").draggable('disable');
            }
            $('.celda:empty').on('click', function () {
                annadiFicha0(this);
            })
        }

    }


    if (fichas0 > 2 && fichasX > 2) {
        apagar = false

    }
    tiempo = TIEMPOJUEGO;
    intervalo = setInterval(tiempoContador, 1000)

}




function finalizar(jugador) {
    clearInterval(intervalo)
    dialogo.dialog("open")
    $("#dialogo").text(`Ganó: ${jugador}`);
}


function reset() {
    clearInterval(intervalo);
    fichasX = 0;
    fichas0 = 0;
    apagar = true;
    intervalo, turnoJugadorX = true;
    dragOn = false;
    tiempo = 15;
    $('.turnoJugador').removeClass('turnoJugador')
    $('.win').removeClass('win')
    $('.tiempo').html(TIEMPOJUEGO);
    $(".ficha").remove();
    $('#comenzar').show();
}

//funciones Auxiliares

function tiempoContador() {
    tiempo--;
    if (turnoJugadorX) {
        $('#tiempoX').html(tiempo);
    } else {
        $('#tiempo0').html(tiempo);

    }
    if (tiempo < 1) {

        cambiaTurno()
    }
}

function annadiFichaX(elem) {
    let comprobaciones = $(elem).attr('comprobaciones');
    let fin = false;
    fichasX++;
    $(elem).append('<img src="./imagen/imagenX.png" class="ficha ' + jugadorX + ' pos' + $(elem).attr('id') + '" jugador="' + jugadorX + '">')

    comprobaciones = comprobaciones.split(" ");
    for (const comprobacion of comprobaciones) {
        fin = comprobarPosicion(comprobacion, jugadorX) ? true : fin;
    }
    if (fin) {
        finalizar(jugadorX);
    } else {
        if (fichasX > 2) {
            crearDragables();
            creaDropables();
            dragOn = true;
        }
        cambiaTurno()
    }


}

function annadiFicha0(elem) {
    let comprobaciones = $(elem).attr('comprobaciones');
    let fin = false;
    fichas0++;
    $(elem).append('<img src="./imagen/imagen0.png" class="ficha ' + jugador0 + ' pos' + $(elem).attr('id') + '" jugador="' + jugador0 + '">')
    comprobaciones = comprobaciones.split(" ");
    for (const comprobacion of comprobaciones) {
        fin = comprobarPosicion(comprobacion, jugador0) ? true : fin;
    }

    if (fin) {
        finalizar(jugador0);
    } else {
        if (fichas0 > 2) {
            crearDragables();
            creaDropables();
            dragOn = true;
        }
        cambiaTurno();
    }

}

function habilitarFichas(jugadorEnabled, jugadorDisabled) {
    $("." + jugadorDisabled).draggable('disable');
    $("." + jugadorEnabled).draggable('enable');
}

function crearDragables() {
    $(".ficha").draggable({
        containment: "#tablero",
        revert: true,
        zIndex: 100,
        disbled: true
    });
}

function creaDropables() {
    $('.celda').droppable({
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        accept: function (d) {
            if ($(this).children().length == 0) {
                for (const pos of RECEPTORESVALIDOS[$(this).attr('id')]) {
                    if (d.hasClass("pos" + pos)) {
                        return true;
                    }
                }
            }
        },
        drop: (function (event, ui) {
            let comprobaciones = $(this).attr('comprobaciones');
            let jugador = $(ui.draggable).attr('jugador');
            let fin = false;
            if ((jugador == jugadorX && turnoJugadorX) || (jugador == jugador0 && !turnoJugadorX)) {

                comprobaciones = comprobaciones.split(" ");
                $(this).append('<img src="' + $(ui.draggable).attr('src') + '" class="ficha ' + jugador + ' pos' + $(this).attr('id') + '" jugador="' + jugador + '">');
                $(ui.draggable).remove();
                crearDragables();
                for (const comprobacion of comprobaciones) {
                    fin = comprobarPosicion(comprobacion, jugador) ? true : fin;
                }

                if (fin) {
                    finalizar(jugador);
                } else {
                    cambiaTurno();
                }
            }

        })
    })
}


function comprobarPosicion(clase, jugador) {
    let correcto = true;
    $('.' + clase).each(function (index) {
        correcto = $(this).children("." + jugador).length > 0 ? correcto : false;

    });
    if(correcto){
        $("."+clase).addClass('win');
    }
    return correcto;
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
                reset();
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