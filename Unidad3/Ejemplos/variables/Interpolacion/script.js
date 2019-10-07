const DATOS={
    nombre:"María",
    apellidos:"López",
    edad:23
}


var cadena="El nombre es: "+ DATOS.nombre+ " apellidos: "+ DATOS.apellidos+ " edad: "+ DATOS.edad;
let cadena2=(`<br>El nombre es: ${DATOS.nombre}  apellidos:  ${DATOS.apellidos}  edad:  ${DATOS.edad}`);

document.write(cadena);
document.write("<br>------ Interpolación -------<br>");
document.write(cadena2);
