export function validarNumeroPositivo(numero){
    if(numero == null || isNaN(numero) || parseFloat(numero) <= 0){
        return false;

    }else{
        return true;
    }
}
export function validarNIF(value){
    var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var str = value.toString().toUpperCase();
    
    if (!nifRexp.test(str) && !nieRexp.test(str)) return false;
    
    var nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2');
    
    var letter = str.substr(-1);
    var charIndex = parseInt(nie.substr(0, 8)) % 23;
    
    if (validChars.charAt(charIndex) === letter) return true;
    
    return false;
      
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
    constructor(i_iva,forma){
        this.iva=i_iva;
        this.forma_pago=forma;
        this.o_Empresa;
        this.o_Cliente;
        this.a_elementos=[];
        this.importe_total=0;
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
    }
}