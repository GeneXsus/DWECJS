function creaElemento(tipo, isTextNode = false, texto = null, id = null, lugar = null, contenido = null, disabled = null, clase = null) {
    let elemento;
    if (isTextNode) {
        elemento = document.createTextNode(texto);
    } else {
        elemento = document.createElement(tipo);
        //establecer attributos
        if (id != null) {
            elemento.setAttribute('id', id);
        }

        if (texto != null) {
            elemento.innerText = texto;
        }

        if (contenido != null) {
            elemento.appendChild(contenido);
        }

        if (disabled != null) {
            elemento.disabled = disabled;
        }

    }

    if (lugar != null) {
        lugar.appendChild(elemento);
    }
    if (clase != null) {
        elemento.classList.add(clase)
    }

    return elemento;
}

function calculaSegundos(fechaInicio,fechaFin){
    let dif,segundos_de_inicia_fin,segundos_entre_fechas
    dif = fechaInicio.getTime() - fechaFin.getTime()
    segundos_de_inicia_fin = dif / 1000;
    segundos_entre_fechas = Math.abs(segundos_de_inicia_fin);
    return segundos_entre_fechas;
}

function cargarListaCookie() {
    return document.cookie.split(';').reduce((cookies, cookie) => {
        // let [ name, value ] = cookie.split('=').map(c => c.trim()); Esto sería con mapa
        try {
            let cookieSplit = cookie.split('=');
            let name = cookieSplit[0].trim();
            let value = cookieSplit[1].trim();
            cookies[name] = value;

        } catch (error) {}
        return cookies;
    }, {});
}

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "";
}

function recorrerhijos(ele){
    for(let elem of ele.childNodes ){
        if (elem.nodeType !=3){
            document.write(`${elem.nodeName} <br>`)
            if(ele.hasChildNodes){
                recorrerhijos(elem)
            }
           
        }else{
            document.write(elem.nodeValue+"<br>")
        }
    }
}


