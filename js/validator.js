const formulario = document.getElementById("formulario");

formulario.addEventListener(
    "submit",function(event){
        event.preventDefault();

        const nombre = document.getElementById ("name").value.trim();
        const edad = document.getElementById ("age").value.trim();
        const email = document.getElementById ("email").value.trim();
        const telefono = document.getElementById ("phone").value.trim();

        //Elementos de error//
        const errorNombre = document.getElementById("errorName");
        const errorAge = document.getElementById("errorAge");
        const errorEmail = document.getElementById("errorEmail");
        const errorPhone = document.getElementById("errorPhone");

        const mensaje = document.getElementById("message");

        //Tecnica de Centinela
        let valido = true;
        if(nombre === ""){
            errorNombre.textContent = "El nombre es obligatorio"
            valido = false;
        }else{
            errorNombre.textContent= "";
        }

        // Este se pone solo una sola ves
    //---------------------------------------------
        if(edad === ""){
            errorAge.textContent = "La edad es obligatoria"
            valido = false;
        }else{
            errorAge.textContent= "";
        }
    //---------------------------------------------

        if(email === ""){
            errorEmail.textContent = "El email es obligatorio"
            valido = false;
        }else{
            errorEmail.textContent= "";
        }

        if(telefono === ""){
            errorPhone.textContent = "El nombre es obligatorio"
            valido = false;
        }else{
            errorPhone.textContent= "";
        }
    }
);
