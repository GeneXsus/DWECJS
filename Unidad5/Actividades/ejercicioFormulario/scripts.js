"use strict"

window.addEventListener("load", ()=>{
    document.getElementById('nombre').addEventListener("blur", function(){
        this.value= this.value.toUpperCase();

    });

    document.getElementById('cp').addEventListener("keypress", function(e){
        let evento=e||window.event;
        if ((evento.which < 48 || evento.which > 57) || this.value.length > 4){ //preguntar por ascs
            evento.preventDefault();  
          }
    });
    document.getElementById('cancelar').addEventListener("click",function(e){
        let evento=e||window.event;
        evento.preventDefault();
        evento.stopPropagation();
    });
    document.getElementById('formulario').addEventListener("submit",function(e){
        let evento=e||window.event;
        if (this.checkValidity() === false) {
            evento.preventDefault();
            evento.stopPropagation();
          }else{
              if(!confirm('¿Desea enviar los datos?')){
                evento.preventDefault();
                evento.stopPropagation();
              }
          }
          this.classList.add('was-validated');
    });

})

