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
    aPartidos.sort((a, b) => b[1] - a[1]);
}

function entradaEscanios() {
    escanios = validarDatoNum("Introduzca escaños a repartir")
}

function calcularPorcentaje(fila) {
    //añadir el porcentaje y la columna que tendrá los escaños
    fila.push(((fila[1] * 100) / sumaVotosTotal).toFixed(2), 0);

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
            }else if (datos.length==2 && (index==0 || index==3)){ //mostrar los datos de la última tabla
                document.write(`<td>${fila[index]}</td>`);
            }
        }
        document.write("</tr>");
    });

}

function crearTablaMayor3porCiento() {
    aPartidos.map((value, ind) => {
        if (value[2] >= 3) {
            for (let col = 1; col <= escanios; col++) {
                aRepartoEsc.push([(aPartidos[ind][1] / col), ind]);
            }
        }
    })
}
function mostrarTablaMayor3porCiento(){
    //mostrar cabeceras
    let num=0, i=0;
    document.write("<table border=1><tr><td></td>")
    for (let i=1; i<=escanios; i++) {
        document.write(`<td>Votos/${i}</td>`);
    }
    document.write(`<tr>`);
    aRepartoEsc.forEach((fila)=>{
        if (num==0){//mostrar el nombre del partido
            document.write(`<tr>`);
            document.write(`<td>${aPartidos[i][0]}</td>`);
        }
        document.write(`<td>${fila[0].toFixed(2)}</td>`);//mostrar el cociente
        num++;
        if (num==escanios) {//reiniciar para mostrar los cocientes del siguiente partido
            num=0;
            i++;
            document.write(`</tr>`);
        }
        
    });
    document.write("</table>")
}
let repartoEscanios = () => {
    aRepartoEsc.sort(function (a, b) {
        let valor=b[0]-a[0];
        if (valor==0) {
            return a[1]-b[1];
        }else{
            return valor;
        }
        // if (a[0] > b[0]) {
        //     return -1;
        // } else if (a[0] < b[0]) {
        //     return 1;
        // } else return a[1] > b[1] ? 1 : -1;


    })
    //Recorrer el array de escaños y sumar
    for (let i = 0; i < escanios; i++) {
        aPartidos[aRepartoEsc[i][1]][3] += 1
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