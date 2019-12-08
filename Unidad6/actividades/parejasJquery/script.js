"use strict";


let arrayCookies;
let juego;
let columnas = 4;
let filas = 3;


//clase
class Juego {
    constructor(columnas, filas) {
        this.numParejas = (columnas * filas) / 2;
        this.intentos = 0;
        this.aciertos = 0;
        this.carta1 = "";
        this.carta2 = "";
        this.cartas = [];
        this.ar_cartas = [];
        this.tiempo_inicio = 0;
        this.tiempo_fin;
    }
    //inicializamos el juego
    prepararJuego() {
        this.cargaCartas()
        let dato = $("#juego");
        dato.css('opacity', '1');
        this.tiempo_inicio = fecha_ms();

    }
    cargaCartas() {
        let posicion = 0;
        this.cartas = []
        for (let i = 0; i < this.numParejas; i++) {
            ;
            this.cartas.push({
                carta: i + 1,
                posicion: 0
            });
            this.cartas.push({
                carta: i + 1,
                posicion: 0
            });
        }
        this.cartas.sort(function () {
            return Math.random() - 0.5
        });
        this.ar_cartas = [];
        //asignamos la posicion a la carta una vez desordenada
        for (let carta of this.cartas) {
            carta.posicion = posicion;
            this.ar_cartas.push(carta);
            posicion++;
        }
    }
    //registramos la carta seleccionada y la comprobamos
    seleccionarCarta(td) {
        let id_seleccionado = $(td)[0].id;
        if (this.carta1 == "") {
            this.carta1 = this.ar_cartas[id_seleccionado];
            this.mostrarCarta(this.carta1);
            $(td).off('click');

        } else if (this.carta2 == "") {
            this.intentos++;
            this.carta2 = this.ar_cartas[id_seleccionado];
            this.mostrarCarta(this.carta2);
            $(td).off('click');

            if (this.carta1.carta == this.carta2.carta) {
                this.aciertos++;
                this.comprobarFin();
                this.carta1 = "";
                this.carta2 = "";
            } else {
                setTimeout(juego.ocultarCartas.bind(this)

                    , 1000);
            }
        }
    }
    //mostramos la carta
    mostrarCarta(carta) {
        $("#" + (carta.posicion)+" .cardFace-back").css("background-image", `url(./img/imagen${carta.carta}.jpg)`);
        //esperamos un pelin a que cargue el fondo para girarla
        setTimeout(function () {

            $("#" + (carta.posicion)).addClass('is-flipped')
        }, 16);

    }

    //Oculta las cartas
    ocultarCartas() {
        let cartaM1 = $("#" + this.carta1.posicion);
        let cartaM2 = $("#" + this.carta2.posicion);
        // quitamos la clase girado
        cartaM1.removeClass('is-flipped')
        cartaM2.removeClass('is-flipped')
        cartaM1.on('click', elegirCarta);
        cartaM2.on('click', elegirCarta);
        this.carta1 = "";
        this.carta2 = "";
        //esperamos a que termine de girar para eliminar el fondo
        setTimeout(function () {
            cartaM1.find('.cardFace-back').first().css('backgroundImage', '');
            cartaM2.find('.cardFace-back').first().css('backgroundImage', '');
        }, 500);
    }

    //Comprueba si se ha finalizado y si es así llama a finalizar
    comprobarFin() {
        if (this.aciertos == 6) {
            setTimeout(this.finalizarJuego.bind(this), 500)

        }
    }
    // Calcula el tiempo tardado y crea la capa  y la cookie si es necesario
    finalizarJuego() {
        let capa;
        let segundos_de_inicia_fin, segundos_entre_fechas, dif, boton;
        this.tiempo_fin = fecha_ms();
        dif = this.tiempo_inicio.getTime() - this.tiempo_fin.getTime()
        segundos_de_inicia_fin = dif / 1000;
        segundos_entre_fechas = Math.abs(segundos_de_inicia_fin);
        arrayCookies = cargarListaCookie();
        $("body").append('<div id="capaFin"></div>');
        $("#capaFin").append('<div id="capaInterior"></div>');
        capa = $("#capaInterior");
        capa.append('<h1>Ganaste</h1>');
        capa.append(`<p>Has tardado ${segundos_entre_fechas} segundos</p>`);
        capa.append(`<p>Has necesitado ${this.intentos} intentos</p>`);





        if (arrayCookies['partida']) {
            let intentosAnte=arrayCookies['partida'].intentos;
            let tiempoAnte=arrayCookies['partida'].segundos
            if (segundos_entre_fechas < arrayCookies['partida'].segundos || this.intentos < arrayCookies['partida'].intentos) {
                capa.append('<h2>¡Nuevo record!</h2>');
               
                setCookie('partida', JSON.stringify({
                    'segundos': segundos_entre_fechas,
                    'intentos': this.intentos
                }), 360);
            }
            capa.append('<h2>Mejor partida anterior:</h2>');
            capa.append(`<p>Intentos: ${intentosAnte}</p>`);
            capa.append(`<p>Tiempo: ${tiempoAnte} segundos</p>`);


        } else {
            setCookie('partida', JSON.stringify({
                'segundos': segundos_entre_fechas,
                'intentos': this.intentos
            }), 360);

        }
        capa.append('<button id="volverAJugar">Volver a jugar</button>');
        $("#volverAJugar").on('click', volverAJugar);

    }

}


//funciones



function creacionDom() {
    let tabla, juego;
    let x = 0
    $('body').append('<div id="juego"><div>');
    juego = $('#juego');
    juego.append('<h1 id="titulo">Juego de parejas<h1>');
    juego.append('<table id="tabla">');
    tabla = $("#tabla");
    juego.append('<button id="iniciar">iniciar</button>');
    $("#iniciar").on('click', iniciarJuego);;
    //Creamos tabla    
    for (let i = 0; i < 3; i++) {
        let fila;
        tabla.append("<tr id='fila" + i + "'></tr>")
        fila = $("#fila" + i);
        for (let j = 0; j < 4; j++) {
            let columna;
            fila.append("<td id='" + x + "' class='card'><td>");
            columna = $("#" + x);
            columna.append('<div class="cardFace cardFace-front"></div>');
            columna.append('<div class="cardFace cardFace-back"></div>');
            x++
        }

    }
}


function iniciarJuego() {
    let botonIni = $('#iniciar')
    botonIni.remove();
    juego = new Juego(columnas, filas);

    $('td').each(function () {
        $(this).on('click', elegirCarta);
    });
    juego.prepararJuego();

}

function elegirCarta() {
    juego.seleccionarCarta($(this));
}

function volverAJugar() {
    console.log('hey');
    let juegoDom = $("#juego");
    let capa = $("#capaFin")
    capa.remove();
    juegoDom.remove();
    creacionDom()
}







function cargarListaCookie() {
    return document.cookie.split(';').reduce((cookies, cookie) => {
        try {
            let cookieSplit = cookie.split('=');
            let name = cookieSplit[0].trim();
            let value = JSON.parse(cookieSplit[1].trim());
            cookies[name] = value;

        } catch (error) {}
        return cookies;
    }, {});
}

function fecha_ms() {
    return new Date()
}

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "";
}





//codigo
$(()=>{
    creacionDom();
});