function Registro() {
  // obtenemos el valor del email ingresado y lo asignamos a la variable
  const emailRegister = document.getElementById("emailRegister").value;
  // obtenemos el valor de la contraseña ingresada y la asignamos a la variable
  const passwordRegister = document.getElementById("passwordRegister").value;
  // obtenemos el valor de la segunda contraseña ingresada y la asignamos a la variable
  const passwordRegister2 = document.getElementById("passwordRegister2").value;

  // buscamos los elemntos warnings en el documento html para luego actualizar su contenido
  document.getElementById("warning1").innerHTML = "";
  document.getElementById("warning2").innerHTML = "";
  document.getElementById("warning3").innerHTML = "";
  document.getElementById("warning4").innerHTML = "";

  // verifica que los campos no esten vacios
  if (!emailRegister || !passwordRegister || !passwordRegister2) {
    document.getElementById("warning4").innerHTML =
      "Por favor, complete todos los campos.";
    return;
  }
  // Establecemos un formato de email y verificamos si el email ingresado coincide con el formato establecido
  const formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!formatoEmail.test(emailRegister)) {
    document.getElementById("warning1").innerHTML =
      "Ingrese una dirección de correo electrónico válida.";
    return;
  }

  // verifica que la contraseña cumpla con el minimo y maximo de carcteres permitido
  if (passwordRegister.length < 8 || passwordRegister.length > 15) {
    document.getElementById("warning3").innerHTML =
      "La contraseña debe tener entre 8 y 15 caracteres.";
    return;
  }

  // verifica que la contraseña ingresada contenga minmo una letra mayuscula
  if (!/[A-Z]/.test(passwordRegister)) {
    document.getElementById("warning3").innerHTML =
      "La contraseña debe contener al menos una letra mayúscula.";
    return;
  }

  // verifica que la contraseña ingresada contenga minmo una letra minuscula
  if (!/[a-z]/.test(passwordRegister)) {
    document.getElementById("warning3").innerHTML =
      "La contraseña debe contener al menos una letra minúscula.";
    return;
  }

  // verifica que la contraseña ingresada contenga minmo un numero
  if (!/\d/.test(passwordRegister)) {
    document.getElementById("warning3").innerHTML =
      "La contraseña debe contener al menos un dígito numérico.";
    return;
  }

  // verifica que la contraseña ingresada contenga minmo un caracter especial
  if (!/[@#$%^&+=!]/.test(passwordRegister)) {
    document.getElementById("warning3").innerHTML =
      "La contraseña debe contener al menos uno de los caracteres especiales (@, #, $, %, ^, &, +, o !).";
    return;
  }

  // verifica que la segunda contraseña ingresada coincida con la primera ingresada
  if (passwordRegister !== passwordRegister2) {
    document.getElementById("warning2").innerHTML =
      "Las contraseñas no coinciden. Intente nuevamente.";
    return;
  }

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

function eliminar_Categoria() {
  // Obtener el nombre de la categoría a eliminar
  let nombreCategoriaEliminar = document.getElementById(
    "nombreCategoriaborrar"
  ).value;

  // Verificar si el nombre de la categoría a eliminar está vacío
  if (nombreCategoriaEliminar === "") {
    document.getElementById("advertencia2").innerHTML =
      "Ingrese el nombre de la categoría a eliminar.";
  } else {
    // Borrar la advertencia si el campo es válido
    document.getElementById("advertencia2").innerHTML = "";

    // Buscamos las categorías en el dropdown
    let dropdown = document.querySelector(
      ".nav-item.dropdown ul.dropdown-menu"
    );
    let categorias = dropdown.querySelectorAll(".dropdown-item");

    // Recorrer todas las categorías y eliminar la que coincide con el nombre
    for (let i = 0; i < categorias.length; i++) {
      if (categorias[i].textContent.trim() === nombreCategoriaEliminar) {
        dropdown.removeChild(categorias[i].parentNode);

        // Si no quedan categorías, agrega una nueva que diga "No hay Categorias"
        if (dropdown.children.length === 0) {
          let nuevaCategoriaVacia = document.createElement("li");
          nuevaCategoriaVacia.innerHTML = `<a class="dropdown-item" href="#">No hay Categorias</a>`;
          dropdown.appendChild(nuevaCategoriaVacia);
        }

        // Limpiar el campo de nombre de categoría después de eliminar
        document.getElementById("nombreCategoriaborrar").value = "";
        return; // Salir del bucle una vez que se elimina la categoría
      }
    }

    // Mostrar un mensaje si la categoría no se encuentra
    document.getElementById("advertencia2").innerHTML =
      "La categoría no existe.";
  }
}

function Agregar_Metas() {
  // Obtenemos el monto ingresado
  let monto = document.getElementById("monto").value;

  // Validacion para que el monto sea valido
  if (!monto.trim() || isNaN(parseFloat(monto)) || parseFloat(monto) <= 0) {
    document.getElementById("advertencia3").innerHTML =
      "Ingrese un monto válido";
    return;
  }

  // Limpiar el mensaje de advertencia si el monto es válido
  document.getElementById("advertencia3").innerHTML = "";

  // Obtenemos la tabla
  let tablaMetas = document.querySelector(".table1 tbody");

  // Obtenemos la primera fila de la tabla
  let primeraFila = document.getElementById("primerafila");

  // Verificar si ya hay contenido en las celdas de la primera fila
  if (primeraFila) {
    // Eliminar la primera fila
    tablaMetas.removeChild(primeraFila);
  }

  // Crea una nueva fila para la tabla
  let nuevaFila = document.createElement("tr");

  // Crea celda para el monto ingresado
  let celdaMeta = document.createElement("td");
  celdaMeta.textContent = "$" + monto;
  nuevaFila.appendChild(celdaMeta);

  // Crea celda para el progreso de la meta
  let celdaProgreso = document.createElement("td");
  celdaProgreso.textContent = "0%";
  nuevaFila.appendChild(celdaProgreso);

  // Agregar la nueva fila a la tabla
  tablaMetas.appendChild(nuevaFila);

  //   limpiamos el monto ingresado para usarlo nuevamente
  document.getElementById("monto").value = "";
}
