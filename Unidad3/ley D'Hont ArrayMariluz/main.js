"use strict";
let aPartidos = [],
    escanios, sumaVotosTotal = 0,
    aRepartoEsc = [];

function validarDatoNum(texto) {
    let dato = prompt(texto);
    while (isNaN(dato) || dato == "" || dato == null) {
        dato = prompt("Error, el dato no es correcto\n" + texto)
    }
    return parseInt(dato)

}

function entradaDatos() {
    let i = 0;
    let nomPartido = prompt("Introduzca el nombre del partido, F|f->Fin");
    while (nomPartido.toUpperCase() != "F") {

        let numVotos = validarDatoNum("Introduzca número total de votos");
        aPartidos.push(new Array(nomPartido, numVotos));
        sumaVotosTotal += numVotos;
        nomPartido = prompt("Introduzca el nombre del partido, F|f->Fin");

    }
    //ordenar descendentemente por votos
    aPartidos.sort((a, b) => b[1] - a[1]);// aPartidos.sort(function(a,b){return b[1]- a[1]})
}

function entradaEscanios() {
    escanios = validarDatoNum("Introduzca escaños a repartir")
}

function calcularPorcentaje(valor) {
    //añadir el porcentaje y la columna que tendrá los escaños
    valor.push(((valor[1] * 100) / sumaVotosTotal).toFixed(2), 0);

}

function mostrarTabla(...datos) {
    document.write("<table border=1><tr>");
    //mostrar cabeceras
    datos.forEach((value) => {
        document.write(`<td>${value}</td>`);
    })
    document.write("</tr>");
    //mostrar datos
    aPartidos.map((fila) => {
        document.write('<tr>');
        for (let index in fila) {
            if (datos.length == 3 && index < 3) { //mostrar los datos de la primera tabla
                document.write(`<td>${fila[index]}</td>`);
            } else if (datos.length == 2 && (index == 0 || index == 3)) { //mostrar los datos de la última tabla
                document.write(`<td>${fila[index]}</td>`);
            }
        }
        document.write("</tr>");
    });

}

function crearTablaMayor3porCiento() {
    for (let i = 0; i < aPartidos.length; i++) {
       if (aPartidos[i][2] >=3) { //solo los partidos que han obtenido >=3%
            aRepartoEsc[i] = [];
            for (let col = 1; col <= escanios; col++) {

                aRepartoEsc[i].push((aPartidos[i][1] / col));

            }
        }
    }
}
function mostrarTablaMayor3porCiento() {
    let num = 0, i = 0;
    document.write("<table border=1><tr><td></td>")
    for (let i = 1; i <= escanios; i++) {
        document.write(`<td>Votos/${i}</td>`);
    }
    document.write(`<tr>`);
    aRepartoEsc.forEach((fila, index) => {
        document.write(`<tr><td>${aPartidos[index][0]}</td>`);
        fila.forEach((value) => {
            document.write(`<td>${value.toFixed(2)}</td>`);
        });
    })
}
let repartoEscanios = () => {
    let columna, fila, max = 0;
    for (let esc = 0; esc < escanios; esc++) {

        for (let fil = 0; fil < aRepartoEsc.length; fil++) {
            for (let col = 0; col < aRepartoEsc[fil].length; col++) {
                if (max < aRepartoEsc[fil][col]) {
                    max = aRepartoEsc[fil][col];
                    fila = fil;
                    columna = col;
                }
            }
        }
        //asignar escaño al partido

        aPartidos[fila][3]  += 1;
        //limpiar datos para asignar el siguiente escaño
        //aRepartoEsc[fila][columna] = 0;
        
        aRepartoEsc[fila].splice(columna,1);
        fila = 0, columna = 0, max = 0;
    }
}
// cuerpo principal

entradaDatos();
entradaEscanios();
//calcular porcentaje de los partidos;
aPartidos.forEach(calcularPorcentaje)
mostrarTabla("Partido", "Votos", "% votos");
crearTablaMayor3porCiento();
mostrarTablaMayor3porCiento();
repartoEscanios();
mostrarTabla("Partido", "Escaños");