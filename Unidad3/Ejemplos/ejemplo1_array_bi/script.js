"use strict"
//variables globales
let a_numeros=[]
//funciones
function cargarArray(){
    for (let fil = 0; fil <10 ; fil++) {
        a_numeros[fil]=[]
        for (let col = 0; col < 10; col++) {
            a_numeros[fil].push(`${fil}-${col}`)
            
        } 
        
    }
}
cargarArray()
console.log(a_numeros)
