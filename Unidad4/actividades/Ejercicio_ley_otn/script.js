"use strict"
import {Partido, isNumberValid,ordenarVotos,ordenarEscanos} from "./modulo.mjs"
// variables globales
let partidos_votos = [],
    votos_divididos = [],
    partidos_votos_divididos_tem = [],
    nombre, votos, numero_de_escanos = 0;

let numero_de_partidos = 0,
    suma_votos = 0,
    salir = false;

// Funciones
//Funcion para recoger partidos
function annadirPartidos() {
    nombre = prompt('Introduce el nombre del partido "*" o "F"->Fin');
    while (nombre == "") {
        nombre = prompt('Error Introduce el nombre del partido de forma correcta "*" o "F"->Fin');
    }
    if (nombre != null && nombre != '*' && nombre.toLowerCase() != 'f') {
        votos = prompt('Introduce sus votos "*" o "F"->Fin');
        while (!isNumberValid(votos)) {
            votos = prompt('Error Introduce el número de votos "*" o "F"->Fin');
        }
        if (votos != null && votos != '*' && votos.toLowerCase != 'f') {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}


//Funcion para calcular el porcentaje de votos
function calcularPorcentaje() {
    for (let partido of partidos_votos) {
        let porcentaje = (partido.votos * 100) / suma_votos;
        partido.porcentaje = porcentaje.toFixed(2)

    }

}

//funcion para visualizar los votos y porcentajes
function visualizarPartidosPorcentaje() {

    let tabla = "<table  border=1>" +
        "<tr>" +
        "<th>Partidos</th>" +
        "<th>Votos</th>" +
        "<th>% votos</th>" +
        "</tr>";
    for (let partido of partidos_votos) {
        tabla = tabla + "<tr>" +
            "<td>" + partido.nombre + "</td>" +
            "<td>" + partido.votos + "</td>" +
            "<td>" + partido.porcentaje + "%</td>" +
            "</tr>";
    }
    tabla = tabla + "</table><br/>";
    document.getElementById("tabla1").innerHTML=tabla
}

//funcion para visualizar los votos divididos por escaños y agregar datos a un array para ordenar luego
function visualizarVotosEscanos() {
    let cabeceraTabla = "<tr><th>Partido</th>";
    let cuerpoTabla = "";
    for (let x = 1; x <= numero_de_escanos; x++) {
        cabeceraTabla += `<th>votos/${x}</th>`;
    }
    partidos_votos.forEach((element,index) => {
        if (element.porcentaje > 3) {
            cuerpoTabla += `<tr><td>${element.nombre}</td>`;
            for (let x = 1; x <= numero_de_escanos; x++) {
                votos_divididos[index] = [];
                votos_divididos[index].push(parseInt(element.votos) / x);
                cuerpoTabla += `<td>${(parseInt(element.votos)/x).toFixed(2)}</td>`;
                partidos_votos_divididos_tem.push([index, element.votos / x, element.votos, element.nombre]);
            }
            cuerpoTabla += '</tr>';
        }
    });

    cabeceraTabla += "</tr>";
    let tabla = "<table border=1>" + cabeceraTabla + cuerpoTabla + "</table> <br/>";

    document.getElementById("tabla2").innerHTML=tabla
}

// calcular los escaños que tiene un partido
function calcularEscanos() {
    ordenarPorVotosDiv();
    for (let x = 0; x < numero_de_escanos; x++) {
        partidos_votos[partidos_votos_divididos_tem[x][0]].incrementarEscanos();
    }
}

//Mostrar la tabla de los escaños
function mostrarTablaEscanos() {
    ordenarEscanos(partidos_votos);
    let tabla = "<table border=1>" +
        "<tr>" +
        "<th>Partidos</th>" +
        "<th>Escaños</th>" +
        "<tr>";
    for (let partido of partidos_votos) {
        tabla = tabla + "<tr>" +
            "<td>" + partido.nombre + "</td>" +
            "<td>" + partido.escanos + "</td>" +
            "</tr>";

    }
    tabla = tabla + "</table><br/>"

    document.getElementById("tabla3").innerHTML=tabla
}




//ordenar por votos u por votos divididos
function ordenarPorVotosDiv() {
    partidos_votos_divididos_tem.sort((a, b) => {
        let votos1 = parseInt(a[1]);
        let votosTotal1 = parseInt(a[2]);
        let votos2 = parseInt(b[1]);
        let votosTotal2 = parseInt(b[2]);
        if (votos1 > votos2) {
            return -1;
        } else if (votos1 < votos2) {
            return 1;
        } else {
            if (votosTotal1 > votosTotal2) {
                return -1;
            } else if (votosTotal1 < votosTotal2) {
                return 1;
            } else {
                return 0;
            }
        }
    });
}




numero_de_escanos = prompt('Elija el numero de escaños "*" o "F"->Fin')
while (!isNumberValid(numero_de_escanos)) {
    numero_de_escanos = prompt('Error Introduce el número de escaños "*" o "F"->Fin');
}
if (numero_de_escanos != null && numero_de_escanos != '*' && numero_de_escanos.toLowerCase != 'f') {

    while (!salir) {
        if (annadirPartidos()) {
            partidos_votos[numero_de_partidos] =  new Partido(nombre, votos);
            numero_de_partidos++;
            suma_votos += parseInt(votos);
            salir = false;
        } else {
            salir = true;
        }
    }

    calcularPorcentaje();
    ordenarVotos(partidos_votos);
    visualizarPartidosPorcentaje();
    visualizarVotosEscanos();
    calcularEscanos();
    mostrarTablaEscanos();

}