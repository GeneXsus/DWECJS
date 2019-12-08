

$(()=>{
    $("body>p").on('click',toogleBorde);
    $("ul>li>ul>li").one('click', addDataHour)
});
// INSTRUCCIONES DEL EJERCICIO
//     a. Asigna la clase borde a Primero y Segundo.
$("body>p").addClass('borde');
//     b. Asigna la clase verde a las abreviaturas de cada módulo de segundo.
$('body>ul>li').addClass('verde');
//     c. Borra la clase borde.
$(".borde").removeClass('borde');
//     d. La clase borde se debe asignar o quitar según hagamos click sobre primero o segundo.
function toogleBorde(){
    $(this).toggleClass('borde');
}
//     e. Modifica ‘Primero’ por ‘Módulos de primero’.
$('body>p:contains(Primero)').text('Módulos de primero')
//     f. Modifica ‘Segundo’ por ‘Módulos de segundo’.
$('body>p:contains(Segundo)').text('Módulos de segundo')

//     g. Elimina los elementos de la las listas que estén vacíos.
$('li:empty').remove()
//     h. Añade el módulo de fol al final de la lista de primero. Realizar en ambos sentidos.
    $("ul:first").append('<li>FOL</li>')
    $("ul:first").prepend('<li>FOL</li>')
    
    //     i. Añade el módulo de programación al principio de la lista de primero. Realizar en ambos sentidos.
    
    $("ul:first").prepend('<li>PRO</li>')
    $("ul:first").append('<li>PRO</li>')

//     j. Añade el módulo de sistemas informáticos detrás de base de datos.
    $("ul:first li:contains('Base de datos')").append('<li>Sistemas informaticos')

//     k. En la lista de los módulos de segundo, añade al final de cada uno de ellos la cantidad de horas
//     semanales que tienen cuando se haga click sobre ellos. Parte del nombre de cada módulo y añade
//     la información desde ul.
function addDataHour(){
    $(this).append("<li>"+ $(this).parent().attr('data-hours')+"</li>");
}



//     l. Vacía la lista que contiene los módulos de segundo.
$("ul:second").empty();
//     m. Elimina la lista que contiene los módulos de primero.
// $("p:last + ul:first").empty();