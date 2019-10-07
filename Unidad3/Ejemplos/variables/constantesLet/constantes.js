"use strict"
const DESCUENTO=10;

let nombre="María"

function variablesVar(){
    var x=100;
    document.write("<br>--------------var------------");
    if (x<=100){
        var x=50;
        document.write("<br> La variable x="+ x);
    }
    document.write("<br>La variable x="+ x);

}
function variablesLet(){
    let x=100;
    document.write("<br>--------------let------------");
    if (x<=100){
        let x=50;
        document.write("<br>-let-La variable x="+ x);
    }
    document.write("<br>-let-La variable x="+ x);

}
//cuerpo programa
document.write("El descuento de 500 es : "+ (500*DESCUENTO)/100 );
variablesVar();
variablesLet();