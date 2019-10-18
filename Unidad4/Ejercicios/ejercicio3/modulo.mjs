export function validarNumeroPositivo(numero){
    if(numero == null || isNaN(numero) || parseFloat(numero) <= 0){
        return false;

    }else{
        return true;
    }

}
export function validarNumeroSalida(numero){
    if(numero != null && (isNaN(numero) || parseFloat(numero) <= 0)){
        return false;

    }else{
        return true;
    }
}

export class Gasolinera{
    constructor(prec=1.3,lit=500){
        this.precio=prec;
        this.litros=lit;
        document.getElementById('cantidad').innerHTML= "Quedan: "+this.litros +"L";
    }

    vaciar(cantidad){
        if ((this.litros-cantidad)<=0){
            if(confirm("No hay suficiente gasolina para esa operación("+this.litros+"L) ¿Quieres gastar la restante precio("+(this.precio*this.litros).toFixed(2)+"€)?")){
                this.litros=0
            }
        }else{
            if(confirm("El precio será ("+(cantidad*this.precio).toFixed(2)+"€)¿Lo quieres gastar?)")){
                this.litros-=cantidad;

            }
        }
        
        document.getElementById('cantidad').innerHTML="Quedan: "+this.litros +"L";

    }


}