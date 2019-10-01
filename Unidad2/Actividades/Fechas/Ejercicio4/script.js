
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
    apuesta=prompt('¿Qué número será más grande el A o el B?').toLocaleLowerCase()
    while (apuesta !=null && (apuesta!="a" && apuesta!="b")){
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



//Sin error de mostrado
// "use strict"
// //variables globales
// let numero_a, numero_b, apuesta,confirmar=true, jugadas_ganas=0, jugadas_perdidas=0;
// let max_num=101, min_num=1;

// //funciones

// //Genera los numero aleatorios
// function numerosAleatorios(){
//     do{
//         numero_a= Math.floor(Math.random() * (max_num -min_num) + min_num) ;
//         numero_b= Math.floor(Math.random() * (max_num -min_num) + min_num) ;
//     }while(numero_a==numero_b);
//     //llama a solicitar apuesta
//     solicitarApuesta();
// }

// //solicita la apuesta
// function solicitarApuesta(){
//     apuesta = prompt('¿Qué número será más grande el A o el B?').toLocaleLowerCase();
//     while (apuesta!="a" && apuesta!="b"){
//         apuesta = prompt(' ERROR Elija entre A o B');
//     };
//     //ejecutamos respuesta.
//     respuesta();

// }


// //Escribimos la respuesta
// function respuesta(){
//     document.write("A:"+numero_a +"<br/>");
//     document.write("B:"+numero_b +"<br/>");
//     switch (apuesta) {
//         case "A":
//             if (numero_a > numero_b){
//                 document.write("Has apostado por A y has ganado <br/>");
//                 jugadas_ganas++;
//             }else{
//                 document.write("Has apostado por A y has perdido <br/>");
//                 jugadas_perdidas++;
//             }
//             break;

//         case "B":
//             if (numero_a < numero_b){
//                 document.write("Has apostado por B y has ganado <br/>");
//                 jugadas_ganas++;
//             }else{
//                 document.write("Has apostado por B y has perdido <br/>");
//                 jugadas_perdidas++;
//             }
//             break;
    
//         default:
//             break;
//     }

//     document.write("Jugadas ganadas: "+jugadas_ganas +" Jugadas perdidas: " +jugadas_perdidas+ "<br/>");
//     //le damos un tiempo para que escriba el resultado
//     setTimeout(function() {
//       confirmar=confirm("¿Quieres volver a jugar?");
//       if(confirmar){
//         document.write("----------------------------------------------------------------------------- <br/>");
//         //volvemos a empezar el proograma
//         numerosAleatorios();
//       }
//     }, 400);

// }
// //codigo
//   numerosAleatorios();

