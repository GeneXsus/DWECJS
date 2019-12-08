



// ↓ INSTRUCCIONES DEL EJERCICIO ↓
//     a - Selecciona todos los módulos de primero y mostrar en consola
//     b - Selecciona el módulo Sistemas Informáticos
//     c - Selecciona el módulo que va detrás de Sistemas Informáticos
//     d - Selecciona los módulos que van detrás de Sistemas Informáticos
//     e - Selecciona los módulos que tengan el atributo href
//     f - Selecciona los módulos que no tengan el atributo href
//     g - Selecciona aquellos módulos que contengan en el atributo href la cadena 'mod'
//     h - Selecciona aquellos módulos que empiecen en el atributo href por la cadena 'mod'
//     i - Selecciona aquellos módulos que terminen en el atributo href con la cadena '.html'
//     j - Selecciona todas las horas de los módulos de segundo
//     k - Selecciona los ítems vacíos y añade el contenido 'Nodo vacío' hacer
//     h - Selecciona los módulos DWESE, DAW y EIE



"use strict "


$(function(){
    $("ul:firts li").each((ind,element)=>{
        console.log($(element).text())
    })
})

//Selecciona el módulo Sistemas Informáticos
$(function(){
    // console.log($("ul:firts li:nth-child(3)").text());
    console.log($("a[href='SImod.hmtl']").text());
})


// Selecciona el módulo que va detrás de Sistemas Informáticos
$(function(){
    console.log($("ul:firts li:nth.child(3)+li").text());
});

// Selecciona los módulos que van detrás de Sistemas Informáticos
$(function(){
    $("ul:firts li:gt(2)").each((ind,element)=>{
        console.log($(element).text);
    });
});
// Selecciona los módulos que tengan el atributo href

// Selecciona los módulos que no tengan el atributo href
$("a").not("[href]").each((ind,elemet)=>{
    console.log($(element).text());
})
// Selecciona aquellos módulos que contengan en el atributo href la cadena 'mod'
$("ul:first a[href*='mod']").each((ind,element)=>{
    console.log($(element).text())
})

// Selecciona aquellos módulos que terminen en el atributo href con la cadena '.html'
$("ul:first a[href$='m.html']").each((ind,element)=>{
    console.log($(element).text())
})
// Selecciona todas las horas de los módulos de segundo
$("ul>:li>ul").find("li:contains('horas)").each((ind,element)=>{
    console.log($(element).text())
})

//   h - Selecciona los módulos DWESE, DAW y EIE

$('li').filter(":contains('DWESE'),:contains('DAW'),:contains('EIE')").each((ind,element)=>{
    console.log($(element).text());
});

