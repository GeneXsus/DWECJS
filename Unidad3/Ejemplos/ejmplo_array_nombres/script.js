"use strict"
//variables globales
let array_personas=[],nombre,apellido,numero_personas=0,salir=false 
//funciones
function introducirDatos(){
    nombre=prompt('Introduce tu nombre *->Fin');
    if(nombre!= '*' && nombre != null){
        apellido=prompt('Introduce tu apellido *->Fin');
        if(apellido!= '*' && apellido != null){
            return true 
        }
    }else{
        return false 
    }
}

function annadirAArray(){
    array_personas[numero_personas]= [nombre,apellido];
}

let ordenarApellidos=()=>{
array_personas.sort((a,b)=>{
    // if(a[1]>b[1]){
    //     return 1;
    // }else if (a[1]<b[1]){
    //     return -1;
    // }else{
    //     return 0;
    // }
     a[1].localeCompare(b[1]);
});
}
function mostrarDatos(texto){
    document.write(`Ordenado ${texto} </br>`);
    for(let dato of array_personas){
        document.write(dato[0]);
        document.write(` - ${dato[1]} </br>`);
    
    }
}


while (!salir){
    if (introducirDatos()){
        annadirAArray();
        numero_personas++;
        salir=false;
    }else{
        salir=true;
    }

}
mostrarDatos('');
ordenarApellidos();
mostrarDatos('Ascendente');




