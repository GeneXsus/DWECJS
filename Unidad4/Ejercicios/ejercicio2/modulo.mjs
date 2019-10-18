export function Inversion(val=0,tas=0,per=0){
    this.valor=val;
    this.tasa=tas;
    this.periodo=per;
    this.valor_futuro=0;

    this.mostrar=function(id){
        document.getElementById(id).innerHTML=`Valor de la inversion: ${this.valor}<br> Tasa de la inversion: ${this.tasa}<br> Periodo de la inversion: ${this.periodo}<br> Valor Futuro de la inversion: ${this.valor_futuro.toFixed(2)}<br> `
    };

    this.calcularValorFuturo=()=>{
        this.valor_futuro =this.valor*Math.pow ((1+(this.tasa/100)),this.periodo)
    };

    this.pediDatos=()=>{
        let valor_in = prompt('Introduzca el valor de la inversion');
        while (!validarNumero(valor_in)) {
            valor_in = prompt('Error introduzca un número para el valor de la inversión')
        };
        let tasa_in = prompt('Introduzca la tasa de la inversion');
        while (!validarNumeroPositivo(tasa_in)) {
            tasa_in = prompt('Error introduzca un número mayor a 0 para la tasa de la inversión')
        };
        let periodo_in = prompt('Introduzca el periodo de la inversion');
        while (!validarNumeroPositivo(periodo_in)) {
            periodo_in = prompt('Error introduzca un número mayor a 0 para el periodo de la inversión')
        };
        this.valor=valor_in;
        this.tasa=tasa_in;
        this.periodo=periodo_in;
        this.calcularValorFuturo();
    };
}

function validarNumeroPositivo(numero){
    if(numero == null || isNaN(numero) || parseFloat(numero) <= 0){
        return false;

    }else{
        return true;
    }
}

function validarNumero(numero){
    if(numero == null || isNaN(numero)){
        return false;
    }else{
        return true;
    }

}