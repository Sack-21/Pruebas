function validar() {

    //validacion de color favorito
    var pulsado = false; //variable de comprobación
    var color = document.formulario.opc; //array de elementos [negro,azul,rojo]
    var elegido = -1; //número del elemento elegido en el array recorre y marca la posicion

    for (i = 0; i < color.length; i++) { //bucle de comprobación recorre el array
        if (color[i].checked == true) {
            pulsado = true
            elegido = i //número del elemento elegido en el array
        }
    }

    if (pulsado == true) { //mensaje de formulario válido
        miOpcion = color[elegido].value
        swal("success", "Has elegido el color: " + miOpcion + "\n \n El formulario ha sido enviado.");
    } else { //mensaje de formulario no válido.
        swal(
            "Oops!",
            "No has elegido ningun color. \n \n Elige un color a registrar para que el formulario pueda ser enviado",
            'error'
        );

        return false //el formulario no se envía.
    }

    //validacion de aceptacion de condiciones
    var opcion = document.formulario.condiciones; //acceso al botón

    if (opcion.checked == true) { //botón seleccionado
        miOpcion = color[elegido].value
        swal(
            "Confirmación",
            "Has elegido el color: " + miOpcion + "\n \n El formulario ha sido enviado.",
            'success'
        );

    } else { //botón no seleccionado
        swal(
            "Oops!",
            "El formulario no ha podido enviarse. \n \n Debe aceptar las condiciones para poder enviar el formulario",
            'error'
        );

        return false; //el formulario no se envia
    }

    alert("validando datos");
}