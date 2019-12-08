"use strict";

let cartas = new Array({
    carta: '1',
    posicion: 0
}, {
    carta: '2',
    posicion: 0
}, {
    carta: '3',
    posicion: 0
}, {
    carta: '4',
    posicion: 0
}, {
    carta: '5',
    posicion: 0
}, {
    carta: '6',
    posicion: 0
}, {
    carta: '1',
    posicion: 0
}, {
    carta: '2',
    posicion: 0
}, {
    carta: '3',
    posicion: 0
}, {
    carta: '4',
    posicion: 0
}, {
    carta: '5',
    posicion: 0
}, {
    carta: '6',
    posicion: 0
});
let arrayCookies;
let juego;


//clase


class Juego {
    constructor() {
        this.intentos = 0;
        this.aciertos = 0;
        this.carta1 = "";
        this.carta2 = "";
        this.ar_cartas = [];
        this.tiempo_inicio = 0;
        this.tiempo_fin
    }
    //inicializamos el juego
    prepararJuego() {
        let dato = document.getElementById("juego");
        let posicion = 0;
        dato.style.opacity = 1;
        cartas.sort(function () {
            return Math.random() - 0.5
        });
        //asignamos la posicion a la carta una vez desordenada
        for (let carta of cartas) {
            carta.posicion = posicion
            this.ar_cartas.push(carta);
            posicion++;
        }
        this.tiempo_inicio = fecha_ms();

    }
    //registramos la carta seleccionada y la comprobamos
    seleccionarCarta(td) {
        let id_seleccionado = td.id;
        if (this.carta1 == "") {
            this.carta1 = this.ar_cartas[id_seleccionado];
            this.mostrarCarta(this.carta1);
            td.removeEventListener('click', elegirCarta);

        } else if (this.carta2 == "") {
            this.intentos++;
            this.carta2 = this.ar_cartas[id_seleccionado];
            this.mostrarCarta(this.carta2);
            td.removeEventListener('click', elegirCarta);

            if (this.carta1.carta == this.carta2.carta) {
                this.aciertos++
                this.comprobarFin()
                this.carta1 = ""
                this.carta2 = ""
            } else {
                setTimeout(juego.ocultarCartas.bind(this)

                    , 1000);
            }
        }
    }
    //mostramos la carta
    mostrarCarta(carta) {
        let cartaMost = document.getElementById(carta.posicion);
        cartaMost.getElementsByClassName('cardFace-back')[0].setAttribute("style", `background-image:url(./img/imagen${carta.carta}.jpg);`);
        //esperamos un pelin a que cargue el fondo para girarla
        setTimeout(function () {

            cartaMost.classList.add('is-flipped')
        }, 10);

    }

    //Oculta las cartas
    ocultarCartas() {
        let cartaM1 = document.getElementById(this.carta1.posicion);
        let cartaM2 = document.getElementById(this.carta2.posicion);
        // quitamos la clase girado
        cartaM1.classList.remove('is-flipped')
        cartaM2.classList.remove('is-flipped')
        cartaM1.addEventListener('click', elegirCarta);
        cartaM2.addEventListener('click', elegirCarta);
        this.carta1 = "";
        this.carta2 = "";
        //esperamos a que termine de girar para eliminar el fondo
        setTimeout(function () {
            cartaM1.getElementsByClassName('cardFace-back')[0].style.backgroundImage = '';
            cartaM2.getElementsByClassName('cardFace-back')[0].style.backgroundImage = '';
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
        let texto;
        let segundos_de_inicia_fin, segundos_entre_fechas, dif, boton;
        this.tiempo_fin = fecha_ms();

        dif = this.tiempo_inicio.getTime() - this.tiempo_fin.getTime()

        segundos_de_inicia_fin = dif / 1000;
        segundos_entre_fechas = Math.abs(segundos_de_inicia_fin);
        arrayCookies = cargarListaCookie();
        capa = creaElemento('div', false, null, 'capaFin', document.body)
        capa = creaElemento('div', false, null, 'capaInterior', capa)
        texto = creaElemento(null, true, 'GANASTE');
        creaElemento('h1', false, null, null, capa, texto);
        texto = creaElemento(null, true, `Has tardado ${segundos_entre_fechas} segundos`);
        creaElemento('p', false, null, null, capa, texto);
        texto = creaElemento(null, true, `Has necesitado ${this.intentos} intentos`);
        creaElemento('p', false, null, null, capa, texto);




        if (arrayCookies['tiempo'] && arrayCookies['intentos']) {

            if (segundos_entre_fechas < arrayCookies['tiempo'] || this.intentos < arrayCookies['intentos']) {
                setCookie('tiempo', segundos_entre_fechas, 360);
                setCookie('intentos', this.intentos, 360);
                texto = creaElemento(null, true, `¡Nuevo record!`);
                creaElemento('h2', false, null, null, capa, texto);
            }
            texto = creaElemento(null, true, `Mejor partida anterior:`);
            creaElemento('h2', false, null, null, capa, texto);
            texto = creaElemento(null, true, `Intentos: ${this.intentos}`);
            creaElemento('p', false, null, null, capa, texto);
            texto = creaElemento(null, true, `Tiempo: ${this.intentos} segundos`);
            creaElemento('p', false, null, null, capa, texto);


        } else {
            setCookie('tiempo', segundos_entre_fechas, 360);
            setCookie('intentos', this.intentos, 360);
        }
        boton = creaElemento('button', false, 'Volver a jugar', 'volverAjugar', capa);
        boton.addEventListener('click', volverAJugar);

    }

}


//funciones

function creacionDom() {
    let cardFront, cardBack;
    let x = 0
    let capa = creaElemento('div', false, null, 'juego', document.body);
    let titulo = creaElemento('h1', false, null, 'titulo', capa);
    let tabla = creaElemento('table', false, null, null, capa);
    let boton = creaElemento('button', false, 'iniciar', 'iniciar', capa);
    let enlace = document.createElement("link");
    boton.addEventListener('click', iniciarJuego);
    enlace.setAttribute("rel", "stylesheet");
    enlace.setAttribute("href", "estilos.css");
    document.head.appendChild(enlace);
    titulo.innerHTML = "Juego de parejas";

    //Creamos tabla    

    for (let i = 0; i < 3; i++) {
        let fila = creaElemento('tr', false, null, null, tabla);
        tabla.appendChild(fila);
        for (let j = 0; j < 4; j++) {
            let columna = creaElemento('td', false, null, x, fila, null, null, 'card');
            cardFront = creaElemento('div', false, null, null, columna, null, null, 'cardFace')
            cardBack = creaElemento('div', false, null, null, columna, null, null, 'cardFace')
            cardFront.classList.add('cardFace-front');
            cardBack.classList.add('cardFace-back');
            x++
        }

    }
}


function iniciarJuego() {
    let botonIni = document.getElementById('iniciar')
    botonIni.parentNode.removeChild(botonIni);
    juego = new Juego();

    for (const td of document.getElementsByTagName('td')) {
        td.addEventListener('click', elegirCarta);
    }
    juego.prepararJuego();

}

function elegirCarta() {
    juego.seleccionarCarta(this);
}


function volverAJugar() {
    let juegoDom = document.getElementById("juego");
    let capa = document.getElementById("capaFin")
    capa.parentNode.removeChild(capa);
    juegoDom.parentNode.removeChild(juegoDom);
    creacionDom()

}



//funciones auxiliares

function creaElemento(tipo, isTextNode = false, texto = null, id = null, lugar = null, contenido = null, disabled = null, clase = null) {
    let elemento;
    if (isTextNode) {
        elemento = document.createTextNode(texto);
    } else {
        elemento = document.createElement(tipo);
        //establecer attributos
        if (id != null) {
            elemento.setAttribute('id', id);
        }

        if (texto != null) {
            elemento.innerText = texto;
        }

        if (contenido != null) {
            elemento.appendChild(contenido);
        }

        if (disabled != null) {
            elemento.disabled = disabled;
        }

    }

    if (lugar != null) {
        lugar.appendChild(elemento);
    }
    if (clase != null) {
        elemento.classList.add(clase)
    }

    return elemento;
}



function cargarListaCookie() {
    return document.cookie.split(';').reduce((cookies, cookie) => {
        // let [ name, value ] = cookie.split('=').map(c => c.trim()); Esto sería con mapa
        try {
            let cookieSplit = cookie.split('=');
            let name = cookieSplit[0].trim();
            let value = cookieSplit[1].trim();
            cookies[name] = value;

        } catch (error) {}
        return cookies;
    }, {});
}


function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "";
}

function fecha_ms() {
    return new Date()
}





//codigo
window.addEventListener("load", function () {
    creacionDom();
});