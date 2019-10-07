let mapa=new Map();

function logMapElements(value, key, map) {
    document.write(`${key} = ${value}<br>`);
}
//asignar datos
mapa.set("nombre","María");
mapa.set("apellidos", "López");
mapa.set("edad", 16);


//mostrar solo un miembro del mapa
document.write(`El nombre es ${mapa.get("nombre")}<br>`);

//mostrar todo los miembros
//mapa.forEach(logMapElements);
mapa.forEach((value,key)=>document.write(`${key} = ${value}<br>`));