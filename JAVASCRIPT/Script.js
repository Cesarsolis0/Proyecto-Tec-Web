function Registro() {
  const emailRegister = document.getElementById("emailRegister").value;
  const passwordRegister = document.getElementById("passwordRegister").value;
  const passwordRegister2 = document.getElementById("passwordRegister2").value;

  document.getElementById("warning1").innerHTML = "";
  document.getElementById("warning2").innerHTML = "";
  document.getElementById("warning3").innerHTML = "";
  document.getElementById("warning4").innerHTML = "";

  if (!emailRegister || !passwordRegister || !passwordRegister2) {
    document.getElementById("warning4").innerHTML =
      "Por favor, complete todos los campos.";
    return;
  }

  const formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!formatoEmail.test(emailRegister)) {
    document.getElementById("warning1").innerHTML =
      "Ingrese una dirección de correo electrónico válida.";
    return;
  }

  // Validar la contraseña
  if (passwordRegister.length < 8 || passwordRegister.length > 15) {
    document.getElementById("warning3").innerHTML =
      "La contraseña debe tener entre 8 y 15 caracteres.";
    return;
  }

  if (!/[A-Z]/.test(passwordRegister)) {
    document.getElementById("warning3").innerHTML =
      "La contraseña debe contener al menos una letra mayúscula.";
    return;
  }

  if (!/[a-z]/.test(passwordRegister)) {
    document.getElementById("warning3").innerHTML =
      "La contraseña debe contener al menos una letra minúscula.";
    return;
  }

  if (!/\d/.test(passwordRegister)) {
    document.getElementById("warning3").innerHTML =
      "La contraseña debe contener al menos un dígito numérico.";
    return;
  }

  if (!/[@#$%^&+=!]/.test(passwordRegister)) {
    document.getElementById("warning3").innerHTML =
      "La contraseña debe contener al menos uno de los caracteres especiales (@, #, $, %, ^, &, +, o !).";
    return;
  }

  if (passwordRegister !== passwordRegister2) {
    document.getElementById("warning2").innerHTML =
      "Las contraseñas no coinciden. Intente nuevamente.";
    return;
  }

  // Si todo está correcto, puedes continuar con el proceso de registro
  console.log("Registro Exitoso");
  document.getElementById("warning4").innerHTML = "Registro Exitoso";
}

function CrearCategoria() {
  // Obtenermos el valor del nombre ingresado y lo asignamos a una variable
  let nombreCategoria = document.getElementById("nombreCategoria").value;
  // buscamos y asignamos el elemento deseado (en este caso el dropdown)
  let dropdown = document.querySelector(".nav-item.dropdown ul.dropdown-menu");
  //   obtenemos el primer eleemnto del dropdown en este caso ("No hay Categorias")
  let Vacio = dropdown.querySelector("li:first-child");

  // Verificar que la variable nombreCategoria no esté vacío y no contenga solo números
  if (nombreCategoria === "" || !isNaN(nombreCategoria)) {
    document.getElementById("advertencia").innerHTML =
      "Ingrese un nombre de categoría válido.";
  } else {
    // Borrar la advertencia si el campo es válido
    document.getElementById("advertencia").innerHTML = "";
  }
  // Si existe "Vacio", lo reemplamaos con la nueva categoría ingresaoo solo la primera vez
  if (Vacio && Vacio.textContent === "No hay Categorias") {
    Vacio.innerHTML = `<a class="dropdown-item" href="#">${nombreCategoria}</a>`;
  } else {
    // Si no existe "vacio" o fue reemplazado, crea una nueva categoria debajo o al ultimo
    let nuevaCategoria = document.createElement("li");
    nuevaCategoria.innerHTML = `<hr class="dropdown-divider"><a class="dropdown-item" href="#">${nombreCategoria}</a>`;
    dropdown.appendChild(nuevaCategoria);
  }
  //   limpiamos el nombre ingresado para usarlo nuevamente
  document.getElementById("nombreCategoria").value = "";
}
