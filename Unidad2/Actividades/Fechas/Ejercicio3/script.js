"use strict"
//variables globales
var fecha_actual,annos,fecha_usuario_split,fecha_transformada
var fecha_usuario = prompt('Introduza su fecha de nacimiento (ejem: 23-ene-2010')
//funciones

function cambiarMes(){
    //transformamos la fecha introducida a minuscula y la separamos por las barras
    fecha_usuario_split= fecha_usuario.toLocaleLowerCase().split('-');
    let devolver= true;
    //pasamos el mes de español a ingles
    switch (fecha_usuario_split[1]) {
        case "ene":
            fecha_usuario_split[1]='Jan';
            break;
        case "feb":
            fecha_usuario_split[1]='Feb';
            break;
        case "mar":
            fecha_usuario_split[1]='Mar';
            break;
        case "abr":
            fecha_usuario_split[1]='Apr';
            break;
        case "may":
            fecha_usuario_split[1]='May';
            break;
        case "jun":
            fecha_usuario_split[1]='Jun';
            break;
        case "jul":
            fecha_usuario_split[1]='Jul';
            break;
        case "ago":
            fecha_usuario_split[1]='Aug';
            break;
        case "sep":
            fecha_usuario_split[1]='Sep';
            break;
        case "oct":
            fecha_usuario_split[1]='Oct';
            break;
        case "nov":
            fecha_usuario_split[1]='Nov';
            break;
        case "dic":
            fecha_usuario_split[1]='Dec';
            break;
        default:
            devolver=false;
            break;
    }
    return devolver;
}
//comprobamos que la fecha sea correcta
function fechaCorrecta(){
    fecha_transformada=new Date(fecha_usuario_split[0]+'-'+fecha_usuario_split[1]+'-'+fecha_usuario_split[2]);
    fecha_actual= new Date();
    if (fecha_usuario_split[0]> 31 ||
         isNaN(fecha_transformada.getDay()) ||
         fecha_transformada.getDate() != fecha_usuario_split[0] || 
         fecha_transformada.getFullYear() > fecha_actual.getFullYear())
    {
        return false;
    }else{
        return true;
    }
}


//codigo

while (fecha_usuario=='null'|| fecha_usuario=='' || !cambiarMes() || !fechaCorrecta()){
    alert('error en la fecha introducida');
    fecha_usuario = prompt('Introduza su fecha de nacimiento (ejem: 23-ene-2010')
};

document.write("Tiene "+( fecha_actual.getFullYear() - fecha_transformada.getFullYear())+" años")
