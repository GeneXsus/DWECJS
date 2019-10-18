export function validarNumeroPositivo(numero){
    if(numero == null || isNaN(numero) || parseFloat(numero) <= 0){
        return false;

    }else{
        return true;
    }

}