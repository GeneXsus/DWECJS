// Ejercicio 3: Información Factura Definir la estructura de un objeto que almacena una
// factura. Las facturas están formadas por la información de la propia empresa (nombre
// de la empresa, dirección, teléfono, NIF), la información del cliente (similar a la de la
// empresa), una lista de elementos (cada uno de los cuales dispone de descripción, precio,
// cantidad) y otra información básica de la factura (importe total, tipo de IVA, forma de
// pago).
// Una vez definidas las propiedades del objeto, añadir un método que calcule el importe
// total de la factura y actualice el valor de la propiedad correspondiente. Por último,
// añadir otro método que muestre por pantalla el importe total de la factura. La clase se
// creará mediante class.
// Controlar todos los datos numéricos, así como el NIF. Permitir que el usario pueda
// introducir varias facturas. 
"use strict"

import { Empresa,Elemento,Cliente,validarNIF,estaRelleno,validarNumDig,validarNumeroPositivo, Factura } from "./modulo.mjs";
//variables globales
let o_Empresa,o_Cliente,o_Elemento,a_factura=[],o_Factura;
let elemento_mostrar= document.getElementById('muestraFactura');


//funciones
function pedirTexto(dato){
    let valor= prompt('Introduce '+dato);
    while(!estaRelleno(valor)){
        valor= prompt('Error '+dato+' no puede estar en blanco');
    }
    return valor;

}
function pedirNif(dato){
    let valor= prompt('Introduce '+dato);
    while(!validarNIF(valor)){
        valor= prompt('Error '+dato+' no es valido');
    }
    return valor;
}

function pedirTel(dato){
    let valor= prompt('Introduce '+dato);
    while(!validarNumDig(valor,9)){
        valor= prompt('Error '+dato+' no es valido');
    }
    return valor;
}

function pedirNumeroPositivo(dato){
    let valor= prompt('Introduce '+dato);
    while(!validarNumeroPositivo(valor)){
        valor= prompt('Error '+dato+' no es valido');
    }
    return valor;
}


function crearEmpresa(){
    let nombre=pedirTexto('el nombre de la empresa');
    let direccion = pedirTexto('la direccion de la empresa');
    let tel= pedirTel('el teléfono de la empresa');
    let nif= pedirNif('el nif de la empresa');
    o_Empresa= new Empresa(nombre,direccion,tel,nif);
}

function crearCliente(){
    let nombre=pedirTexto('el nombre del cliente');
    let direccion = pedirTexto('la direccion del cliente');
    let tel= pedirTel('el teléfono del cliente');
    let nif= pedirNif('el nif del cliente');
    o_Cliente= new Cliente(nombre,direccion,tel,nif);
}

function crearFactura(){
    let iva= pedirNumeroPositivo('el iva de la factura');
    o_Factura= new Factura(iva);
}



function pedirElementos(){
    let descripcion,precio,cantidad;
   do{
        descripcion=pedirTexto('la descripcion del elemento');
        precio= pedirNumeroPositivo('el precio del elemento');
        cantidad= pedirNumeroPositivo('la cantidad de elementos');
        o_Elemento= new Elemento(descripcion,precio,cantidad)
        o_Factura.anadirElemento(o_Elemento);
    } while(confirm('¿Quiere introducir otro elemento?'))
}
function anadirFactura(){
    let forma_pago= pedirTexto(' la forma de pago');
    o_Factura.anadirFormaPago(forma_pago);
    o_Factura.anadirEmpresa(o_Empresa); 
    o_Factura.anadirCliente(o_Cliente);
    o_Factura.calcularTotal();
    a_factura.push(o_Factura);
}

function mostrarFacturas(){
    a_factura.forEach(factura => {
        let visualizacion_factura= "<div class='cuerpo-factura'>"+
        "<div class='empresa'>"+
            "<h2>Empresa</h2>"+
            "<p> <b>Nombre:</b>"+factura.o_Empresa.nombre+"</p>"+
            "<p> <b>Direccion:</b>"+factura.o_Empresa.direccion+"</p>"+
            "<p> <b>Telefono:</b>"+factura.o_Empresa.telefono+"</p>"+
            "<p> <b>NIF:</b>"+factura.o_Empresa.nif+"</p>"+
        "</div>"+
        "<hr/>"+
        "<div class='cliente'>"+
            "<h2>Cliente</h2>"+
            "<p> <b>Nombre:</b>"+factura.o_Cliente.nombre+"</p>"+
            "<p> <b>Direccion:</b>"+factura.o_Cliente.direccion+"</p>"+
            "<p> <b>Telefono:</b>"+factura.o_Cliente.telefono+"</p>"+
            "<p> <b>NIF:</b>"+factura.o_Cliente.nif+"</p>"+
        "</div>"+
        "<hr/>"+
        "<div class='factura'>"+
            "<table>"+
                "<thead>"+
                "<tr>"+
                    "<th>Descripcion</th>"+
                    "<th>Catidad</th>"+
                    "<th>Precio</th>"+
                "</tr>"+
                "</thead>"+
            "<tbody>";
            
                factura.a_elementos.forEach(elemento => {
                    visualizacion_factura+="<tr>"+
                    "<td>"+
                        elemento.descripcion+
                        "</td>"+
                        "<td>"+
                        elemento.cantidad+
                        "</td>"+
                        "<td>"+
                        elemento.precio+
                        "</td>"+
                    "</tr>";
                });
        
        visualizacion_factura +=  "</tbody>"+
            "<tfoot>"+
                "<tr>"+
                "<th colspan=2>Forma de pago</th>"+
                    "<td>"+
                    factura.forma_pago+
                    "</td>"+
                "</tr>"+
                "<tr>"+
                "<th colspan=2>IVA</th>"+
                    "<td>"+
                    factura.iva+
                    "</td>"+
                "</tr>"+
                "<tr>"+
                    "<th colspan=2>Precio total</th>"+
                    "<td>"+
                    factura.importe_total+
                    "</td>"+
                "</tr>"+

                
                "</tfoot>"+
                "<table>"+
            "</div>"+
            "</div>";
        elemento_mostrar.innerHTML+= visualizacion_factura;
        
    });
}


//cuerpo
do{
    crearEmpresa();
    crearCliente();
    crearFactura();
    pedirElementos();
    anadirFactura();
}while(confirm('¿Quiere introducir otra Factura?'))
mostrarFacturas();