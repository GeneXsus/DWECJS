let conjunto = new Set(["javascript", "php", "c#", "jsp"]);

//asignar
// conjunto.add("javascript");
// conjunto.add("php");
// conjunto.add("c#").add("jsp");

console.log(conjunto);

document.write(`Existe php ${conjunto.has('php')}`);

document.write(`<br>Existe Python ${conjunto.has('python')}`);

document.write(`<br>Nº de elementos ${conjunto.size}`);

document.write(`<br>Borrar php ${conjunto.delete('php')}`);

document.write(`<br>Nº de elementos ${conjunto.size}`);

//recorrer los elementos
document.write("<br>-----Listado del conjunto ----")
for (let ele of conjunto) {
    document.write("<br>" + ele);
}
document.write("<br>-----Listado del conjunto ----")
conjunto.forEach(
    // function(ele){
    //      document.write("<br>" + ele)
    // }
    (ele)=>document.write("<br>" + ele)
    
);