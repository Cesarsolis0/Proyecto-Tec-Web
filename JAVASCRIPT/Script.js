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
        return;
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

  // Validamos que el campo no este vacio,que sea un numero y que no sea menor que 0
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

  // Verificar si ya hay contenido en las celdas de la primera fila,si lo hay la elimina
  if (primeraFila) {
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

// aqui se almacena el total de ingresos
let totalIngresos = 0;

function Agregar_Ingresos() {
  // Obtenemos los valores ingresado en lis campos
  let monto = document.getElementById("Ingreso").value;
  let fechaInput = document.getElementById("fecha").value;
  let categoria = document.getElementById("categoria").value;
  let descripcion = document.getElementById("descripcion").value;

  // obtenemos mensajes de advertencia para actualizarlos luego
  document.getElementById("advertencia4").innerHTML = "";
  document.getElementById("advertencia5").innerHTML = "";
  document.getElementById("advertencia6").innerHTML = "";
  document.getElementById("advertencia7").innerHTML = "";

  // Valida que el campo no este vacio,si lo ingresado es un numero y que no sea menor que 0
  if (!monto.trim() || isNaN(parseFloat(monto)) || parseFloat(monto) <= 0) {
    document.getElementById("advertencia4").innerHTML =
      "Ingrese un monto válido";
    return;
  }
  // valida que el campo de la fecha no este Vacio
  if (!fechaInput.trim()) {
    document.getElementById("advertencia5").innerHTML =
      "Ingrese una fecha válida";
    return;
  }
  // valida que el campo de categoria no este Vacio
  if (!categoria.trim()) {
    document.getElementById("advertencia6").innerHTML =
      "Ingrese una categoría válida";
    return;
  }
  // valida que el campo de la descripcion no este Vacio
  if (!descripcion.trim()) {
    document.getElementById("advertencia7").innerHTML =
      "Ingrese una descripción válida";
    return;
  }

  // sumamos el monto ingresado al total
  totalIngresos += parseFloat(monto);

  // buscamos y Obtenemos la tabla de ingresos
  let tablaIngresos = document.querySelector(".table3 tbody");

  // Obtenemos la fila existente con el id "primerafila1"
  let filaExistente = document.getElementById("primerafila1");

  // Verificamos si la fila existente existe,si exite se elimina
  if (filaExistente) {
    tablaIngresos.removeChild(filaExistente);
  }

  // Crear una nueva fila
  let nuevaFila = document.createElement("tr");

  // Crear celdas para la nueva fila
  let celdaDescripcion = document.createElement("td");
  celdaDescripcion.textContent = descripcion;
  nuevaFila.appendChild(celdaDescripcion);

  let celdaFecha = document.createElement("td");
  celdaFecha.textContent = fechaInput;
  nuevaFila.appendChild(celdaFecha);

  let celdaCategoria = document.createElement("td");
  celdaCategoria.textContent = categoria;
  nuevaFila.appendChild(celdaCategoria);

  let celdaMonto = document.createElement("td");
  celdaMonto.textContent = "$" + monto;
  nuevaFila.appendChild(celdaMonto);

  // Agregar la nueva fila a la tabla de ingresos
  tablaIngresos.appendChild(nuevaFila);

  // agregamos los montos ingresados a la tabla total de ingresos
  let tablaTotal = document.querySelector(
    ".tabla.centrar tr.monto td:last-child"
  );
  tablaTotal.textContent = "$" + totalIngresos.toFixed(2);

  // Limpiar los campos después de agregar la fila para utilizarlos nuevameente
  document.getElementById("descripcion").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("Ingreso").value = "";
}

// aqui se almacena el total de gastos
let totalGastos = 0;

function Agregar_Gastos() {
  // Obtenemos los valores ingresados en los campos
  let monto = document.getElementById("Gasto").value;
  let fechaInput = document.getElementById("fecha2").value;
  let categoria = document.getElementById("categoria2").value;
  let descripcion = document.getElementById("descripcion2").value;

  // obtenemos mensajes de advertencia para actualizarlos luego
  document.getElementById("advertencia8").innerHTML = "";
  document.getElementById("advertencia9").innerHTML = "";
  document.getElementById("advertencia10").innerHTML = "";
  document.getElementById("advertencia11").innerHTML = "";

  // Valida que el campo no este vacio,si lo ingresado es un numero y que no sea menor que 0
  if (!monto.trim() || isNaN(parseFloat(monto)) || parseFloat(monto) <= 0) {
    document.getElementById("advertencia8").innerHTML =
      "Ingrese un monto válido";
    return;
  }
  // valida que el campo de la fecha no este Vacio
  if (!fechaInput.trim()) {
    document.getElementById("advertencia9").innerHTML =
      "Ingrese una fecha válida";
    return;
  }
  // valida que el campo de la categoria no este Vacio
  if (!categoria.trim()) {
    document.getElementById("advertencia10").innerHTML =
      "Ingrese una categoría válida";
    return;
  }
  // valida que el campo de la descripcion no este Vacio
  if (!descripcion.trim()) {
    document.getElementById("advertencia11").innerHTML =
      "Ingrese una descripción válida";
    return;
  }

  // sumamos el monto ingresado al total de gastos
  totalGastos += parseFloat(monto);

  // Obtener la tabla de gastos
  let tablaGastos = document.querySelector(".table4 tbody");

  // Obtener la fila existente con el id "primerafila2"
  let filaExistente = document.getElementById("primerafila2");

  // Verificar si la fila existente es un hijo de la tabla
  if (filaExistente) {
    // Si la fila existente está presente, eliminarla
    tablaGastos.removeChild(filaExistente);
  }

  // Crear una nueva fila
  let nuevaFila = document.createElement("tr");

  // Crear celdas para la nueva fila
  let celdaDescripcion = document.createElement("td");
  celdaDescripcion.textContent = descripcion;
  nuevaFila.appendChild(celdaDescripcion);

  let celdaFecha = document.createElement("td");
  celdaFecha.textContent = fechaInput;
  nuevaFila.appendChild(celdaFecha);

  let celdaCategoria = document.createElement("td");
  celdaCategoria.textContent = categoria;
  nuevaFila.appendChild(celdaCategoria);

  let celdaMonto = document.createElement("td");
  celdaMonto.textContent = "$" + monto;
  nuevaFila.appendChild(celdaMonto);

  // Agrega la nueva fila a la tabla de gastos
  tablaGastos.appendChild(nuevaFila);

  // agregamos los monto ingresados a la tabla de total de gastos
  let tablaTotalGastos = document.querySelector(
    ".tabla.centrar tr.monto td.gastos:last-child"
  );
  tablaTotalGastos.textContent = "$" + totalGastos.toFixed(2);

  // Limpiar los campos después de agregar la fila para utilizarlos nuevamente
  document.getElementById("descripcion2").value = "";
  document.getElementById("fecha2").value = "";
  document.getElementById("categoria2").value = "";
  document.getElementById("Gasto").value = "";
}
