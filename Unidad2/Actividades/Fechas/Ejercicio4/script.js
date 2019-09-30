"use strict"
//variables globales
let numero_a, numero_b, apuesta,confirmar=true, jugadas_ganas=0, jugadas_perdidas=0;
let max_num=100, min_num=1;

//funciones
function numerosAleatorios(){
    do{
        numero_a= Math.floor(Math.random() * (max_num -min_num) + min_num) ;
        numero_b= Math.floor(Math.random() * (max_num -min_num) + min_num) ;
        

    }while(numero_a==numero_b)
    
}
function solicitarApuesta(){
    apuesta=prompt('¿Qué número será más grande el A o el B')
    while (apuesta !=null && (apuesta!="A" && apuesta!="B")){
        apuesta = prompt(' ERROR Elija entre A o B');
    };
}



function respuesta(){
    document.write("A:"+numero_a +"<br/>");
    document.write("B:"+numero_b +"<br/>");
    switch (apuesta) {
        case "A":
            if (numero_a > numero_b){
                document.write("Has apostado por A y has ganado <br/>");
                jugadas_ganas++;
            }else{
                document.write("Has apostado por A y has perdido <br/>");
                jugadas_perdidas++;
            }
            break;

        case "B":
            if (numero_a < numero_b){
                document.write("Has apostado por B y has ganado <br/>");
                jugadas_ganas++;
            }else{
                document.write("Has apostado por B y has perdido <br/>");
                jugadas_perdidas++;
            }
            break;
    
        default:
            break;
    }

    document.write("Jugadas ganadas: "+jugadas_ganas +" Jugadas perdidas: " +jugadas_perdidas+ "<br/>");


}



//codigo
do{
    numerosAleatorios();
    solicitarApuesta();
    respuesta();
    
    confirmar=confirm("¿Quieres volver a jugar?");
        


}while (confirmar)
