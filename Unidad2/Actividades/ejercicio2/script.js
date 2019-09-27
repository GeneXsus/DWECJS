"use strict"
// declarar variables
let intervalo= setInterval(cuentaAtras,1000);
let contador= 60;

// declarar funciones
// iniciamos la cuenta atrás
function cuentaAtras() {
    //reducimos el valor del contador
    contador= contador-1;
    // se busca el elemento por id y se sobrescribe su valor comprobando si es menor a 10 para añadirle un 0
    document.getElementById('tiempo').innerHTML="00:"+(contador <10?"0"+contador:contador);
    if (contador==0){
        terminarCuenta()
    }
    
}
//finalizamos el intervalo y añadimos el texto
function terminarCuenta(){
    document.getElementById('resultado').innerHTML=('Tu tiempo ha terminado');
    clearInterval(intervalo)

}