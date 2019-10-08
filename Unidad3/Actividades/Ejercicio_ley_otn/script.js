"use strict"
// variables globales
let partidos_votos = [],
    votos_divididos = [],
    partidos_votos_divididos_tem = [],
    nombre, votos, numero_de_escanos = 5;
let numero_de_partidos = 0,
    suma_votos = 0,
    salir = false;

// Funciones

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



function calcularPorcentaje() {
    for (let partido of partidos_votos) {
        let porcentaje = (partido[1] * 100) / suma_votos;
        partido[2] = porcentaje.toFixed(2)

    }

}

function visualizarPartidosPorcentaje() {

    let tabla = "<table  border=1>" +
        "<tr>" +
        "<th>Partidos</th>" +
        "<th>Votos</th>" +
        "<th>% votos</th>" +
        "</tr>";
    for (let partido of partidos_votos) {
        tabla = tabla + "<tr>" +
            "<td>" + partido[0] + "</td>" +
            "<td>" + partido[1] + "</td>" +
            "<td>" + partido[2] + "%</td>" +
            "</tr>";
    }
    tabla = tabla + "</table><br/>";
    document.write(tabla);
}


function visualizarVotosEscanos() {
    let cabeceraTabla = "<tr><th>Partido</th>";
    let cuerpoTabla = "";
    for (let x = 1; x <= numero_de_escanos; x++) {
        cabeceraTabla += `<th>votos/${x}</th>`;
    }

    partidos_votos.forEach((partido, index) => {
        if (partido[2] > 3) {
            cuerpoTabla += `<tr><td>${partido[0]}</td>`;
            for (let x = 1; x <= numero_de_escanos; x++) {
                votos_divididos[index] = [];
                votos_divididos[index].push(parseInt(partido[1]) / x);
                cuerpoTabla += `<td>${(parseInt(partido[1])/x).toFixed(2)}</td>`;
                partidos_votos_divididos_tem.push([index, partido[1] / x, partido[1], partido[0]]);
            }
            cuerpoTabla += '</tr>';
        }
    });
    cabeceraTabla += "</tr>";
    let tabla = "<table border=1>" + cabeceraTabla + cuerpoTabla + "</table> <br/>";
    document.write(tabla);
}

function calcularEscanos() {
    ordenarPorVotosDiv();
    for (let x = 0; x < numero_de_escanos; x++) {
        partidos_votos[partidos_votos_divididos_tem[x][0]][3] = partidos_votos[partidos_votos_divididos_tem[x][0]][3] + 1;
    }
}

function mostrarTablaEscanos() {
    ordenarNumeroPosicion(partidos_votos, 3);
    let tabla = "<table border=1>" +
        "<tr>" +
        "<th>Partidos</th>" +
        "<th>Escaños</th>" +
        "<tr>";
    for (let partido of partidos_votos) {
        tabla = tabla + "<tr>" +
            "<td>" + partido[0] + "</td>" +
            "<td>" + partido[3] + "</td>" +
            "</tr>";

    }
    tabla = tabla + "</table><br/>"
    document.write(tabla);
}

function ordenarNumeroPosicion(array, posicion) {
    array.sort((a, b) => {
        let dato1 = parseInt(a[posicion]);
        let dato2 = parseInt(b[posicion]);
        if (dato1 > dato2) {
            return -1;
        } else if (dato1 < dato2) {
            return 1;
        } else {
            return 0;
        }
    });
}

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

function isNumberValid(numero) {
    if (!isNaN(numero) && numero!="" || (numero == null || numero == '*' || numero.toLowerCase() == 'f')) {
        return true;
    } else {
        return false;
    }
}


numero_de_escanos = prompt('Elija el numero de escaños "*" o "F"->Fin')
while (!isNumberValid(numero_de_escanos)) {
    numero_de_escanos = prompt('Error Introduce el número de escaños "*" o "F"->Fin');
}
if (numero_de_escanos != null && numero_de_escanos != '*' && numero_de_escanos.toLowerCase != 'f') {



    while (!salir) {
        if (annadirPartidos()) {
            partidos_votos[numero_de_partidos] = [nombre, votos, 0, 0];
            numero_de_partidos++;
            suma_votos += parseInt(votos);
            salir = false;
        } else {
            salir = true;
        }
    }

    calcularPorcentaje();
    ordenarNumeroPosicion(partidos_votos, 1);
    visualizarPartidosPorcentaje();
    visualizarVotosEscanos();
    calcularEscanos();
    mostrarTablaEscanos();
}