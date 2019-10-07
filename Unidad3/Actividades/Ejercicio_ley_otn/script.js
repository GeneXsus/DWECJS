"use strict"
// variables globales
    let partidos_votos=[],partidos_escanos=[],nombre,votos;
    let numero_de_partidos=0,suma_votos=0,salir=false;
// Funciones
function annadirPartidos(){
    nombre=prompt('Introduce el nombre del partido "*" o "F"->Fin');
    while(nombre==""){
        nombre=prompt('Error Introduce el nombre del partido de forma correcta "*" o "F"->Fin');
    }
    if(nombre!= '*' && nombre.toLocaleUpperCase != 'F' && nombre != null){
        votos=prompt('Introduce sus votos "*" o "F"->Fin');
        while(isNaN(votos)&& votos!= '*' && votos.toLocaleUpperCase!= 'F' ){
            votos=prompt('Error Introduce el número de votos "*" o "F"->Fin');
        }
        if(votos!= '*' && votos!= 'F' && votos != null ){
            return true 
        }else{
            return false
        }
    }else{
        return false 
    }
}



function calcularPorcentaje() {
    for (let partido of partidos_votos) {
        let porcentaje= (partido[1]*100)/suma_votos;
        partido[2]=porcentaje
        
    }
    
}

function visualizarPartidosPorcentaje() {
    console.log(partidos_votos)
    let tabla="<table>"+
                    "<tr>"+
                    "<th>Partidos</th>"+
                    "<th>Votos</th>"+
                    "<th>% votos</th>"+
                    "</tr>";
    for (let partido of partidos_votos) {
        tabla= tabla+"<tr>"+
        "<td>"+partido[0]+"</td>"+
        "<td>"+partido[1]+"</td>"+
        "<td>"+partido[2]+"</td>"+
        "</tr>";
        
    }
    tabla= tabla +"</table>"
    document.write(tabla);
}


function visualizarVotosEscanos(){

}
function calcularEscanos() {
    
}
function mostrarTablaEscanos(){

}
function ordenarVotos(){
    partidos_votos.sort((a,b)=> {
        let dato1= parseInt(a[1]);
        let dato2=parseInt(b[1]);
        if (dato1 >dato2) {
            return 1;
        } else if (dato1 < dato2) {
            return -1;
        } else {
            return 0;
        }
   });
}
function ordenarEscanos(){

}


while (!salir){
    if (annadirPartidos()){
        partidos_votos[numero_de_partidos]= [nombre,votos];
        numero_de_partidos++;
        suma_votos+= parseInt(votos);
        salir=false;
    }else{
        salir=true;
    }
}
calcularPorcentaje();
ordenarVotos();
visualizarPartidosPorcentaje()

