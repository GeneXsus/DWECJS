export class Partido{
    constructor(nom,votos,porcentaje=0,escanos=0){
        this.nombre= nom;
        this.votos=votos;
        this.porcentaje=porcentaje;
        this.escanos=escanos;
    }
    incrementarEscanos(){
        this.escanos++;
    }

}

// comprobar si es una entrada numerica valida
export function isNumberValid(numero) {
    if (!isNaN(numero) && numero!="" || (numero == null || numero == '*' || numero.toLowerCase() == 'f')) {
        return true;
    } else {
        return false;
    }
}


// ordenar por una posicion de un array
export function ordenarVotos(array) {
    array.sort((a, b) => {
        let dato1 = parseInt(a.votos);
        let dato2 = parseInt(b.votos);
        if (dato1 > dato2) {
            return -1;
        } else if (dato1 < dato2) {
            return 1;
        } else {
            return 0;
        }
    });
}

// ordenar por una posicion de un array
export function ordenarEscanos(array) {
    array.sort((a, b) => {
        let dato1 = parseInt(a.escanos);
        let dato2 = parseInt(b.escanos);
        if (dato1 > dato2) {
            return -1;
        } else if (dato1 < dato2) {
            return 1;
        } else {
            return 0;
        }
    });
}
