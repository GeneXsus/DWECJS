export function validarNumeroPositivo(numero){
    if(numero == null || isNaN(numero) || parseFloat(numero) <= 0){
        return false;

    }else{
        return true;
    }
}
export function validarNIF(value){
    let char_index;
    let value_number= value.substr(0, 8);
    let valid_chars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let str = value.toString().toUpperCase();
    let letter = str.substr(-1);
    if(!isNaN(value_number))return true;
    char_index=parseInt(value_number) % 23;
    if (valid_chars.charAt(char_index) === letter) return true;
    
    return false;
      
}
export function validarNumDig(numero,digitos){
    if(isNaN(numero)){
        return false
    }else if(numero.length ==digitos){
        return true 
    }else{
        return false 
    }
    // let regex= new RegExp("[0-9]{"+digitos+"}",'i');
    // return regex.test(numero+"");
}
export function estaRelleno(texto){
    if(texto==null || texto==""){
        return false 
    }else{
        return true
    }

}

export class Empresa{
    constructor(nom,dir,tel,nif){
        this.nombre=nom;
        this.direccion=dir;
        this.telefono=tel;
        this.nif=nif;
    }
}

export class Cliente{
    constructor(nom,dir,tel,nif){
        this.nombre=nom;
        this.direccion=dir;
        this.telefono=tel;
        this.nif=nif;
    }
}
export class Elemento{
    constructor(desc,pre,cant){
        this.descripcion=desc;
        this.precio=pre;
        this.cantidad=cant;
    }
}
//  (importe total, tipo de IVA, forma de
// pago).
export class Factura{
    constructor(i_iva){
        this.iva=i_iva;
        this.forma_pago='';
        this.o_Empresa;
        this.o_Cliente;
        this.a_elementos=[];
        this.importe_total=0;
    }
    anadirFormaPago(pago){
        this.forma_pago=pago;
    }
    anadirEmpresa(empresa){
        this.o_Empresa=empresa;
    }
    anadirCliente(cliente){
        this.o_Cliente=cliente
    }
    anadirElemento(elemento){
        this.a_elementos.push(elemento)
    }
    calcularTotal(){
        this.a_elementos.forEach(elemento => {
            this.importe_total+= (elemento.precio * elemento.cantidad);
        });
        this.importe_total+= (this.importe_total*(this.iva/100))
    }
}