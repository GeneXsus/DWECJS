export function validarNumeroPositivo(numero){
    if(numero == null || isNaN(numero) || parseFloat(numero) <= 0){
        return false;

    }else{
        return true;
    }

}

export class Gasolinera{
    constructor(prec=1.3,lit=500){
        this.precio=prec;
        this.litros=lit;
        document.getElementById('cantidad').innerHTML(this.litros);
    }

    vaciar(cantidad){
        if ((this.litros-cantidad)<=0){
            if(confirm("No hay suficiente gasolina para esa operación ¿Quieres gastar la restante precio("+(this.precio*this.litros)+"€)?")){
                this.litros=0
            }
        }else{
            if(confirm("El precio será ("+(cantidad*this.precio)+"€)¿Lo quieres gastar?)")){
                this.litros-=cantidad;

            }
        }
        if(this.litros==0){
            document.getElementById('vacio').innerHTML("<h1>No queda gasolina</h1>")
                
        }
        document.getElementById('cantidad').innerHTML(this.litros);

    }


}