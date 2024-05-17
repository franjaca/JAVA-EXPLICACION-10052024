let boton = document.querySelector(".boton");

boton.addEventListener("click", function () {

    let n1 = document.querySelector("#nombre1");
    let e1 = document.querySelector("#edad1");

    let n2 = document.querySelector("#nombre2");
    let e2 = document.querySelector("#edad2");

    let n3 = document.querySelector("#nombre3");
    let e3 = document.querySelector("#edad3");
    let mE = document.querySelector(".mensajeError");
    let mC = document.querySelector(".mensaje");

    let msnError = "";
    let error = false;

    if (n1.value == "" || n2.value == "" || n3.value == "") {

        msnError = "El campo nombre es obligatorio"
        error = true;

    }

    if (e1.value < 0 || e1.value == "" || e2.value < 0 || e2.value == "" || e3.value < 0 || e3.value == "") {
        msnError += "<br>El campo edad es obligatorio";
        error = true;


    }

    if (error) { //Si la variable error=true
        mC.innerHTML = "";
        mE.innerHTML = msnError;
    }

    })













