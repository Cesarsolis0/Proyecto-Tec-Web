// establecemos que no se ha creado una metas
let metaCreada = false;

// Función para agregar la meta
function agregarMeta(monto) {
  // Validamos que el monto sea un número y no sea menor que 0
  if (isNaN(parseFloat(monto)) || parseFloat(monto) <= 0) {
    return;
  }

  // Verificar si ya se creó una meta
  if (metaCreada) {
    document.getElementById("advertencia3").innerHTML =
      "Debe completar la meta anterior antes de ingresar otra.";
    return;
  }

  // Limpiar el mensaje de advertencia si el monto es válido
  document.getElementById("advertencia3").innerHTML = "";

  // Obtener la tabla
  let tablaMetas = document.querySelector(".table-center tbody");

  // Obtener la primera fila de la tabla
  let primeraFila = document.getElementById("primerafila");

  // Verificar si ya hay contenido en las celdas de la primera fila, si lo hay, la elimina
  if (primeraFila) {
    tablaMetas.removeChild(primeraFila);
  }

  // Crear una nueva fila para la tabla
  let nuevaFila = document.createElement("tr");

  // Crear celda para el monto ingresado
  let celdaMeta = document.createElement("td");
  celdaMeta.textContent = "$" + monto;
  nuevaFila.appendChild(celdaMeta);

  // Crear celda para el progreso de la meta
  let celdaProgreso = document.createElement("td");
  celdaProgreso.textContent = "0%";
  nuevaFila.appendChild(celdaProgreso);

  // Agregar la nueva fila a la tabla
  tablaMetas.appendChild(nuevaFila);

  // si se ejecuta correctamente se cambiara el valor de la meta estableciendo que se ha creado
  metaCreada = true;
}

// Función para agregar la meta y almacenarla en localStorage
function Agregar_Metas() {
  // Obtenemos el monto ingresado
  let monto = document.getElementById("monto").value;

  // Almacenar el monto en localStorage
  localStorage.setItem("metaMonto", monto);

  // Agregar la meta utilizando la función agregarMeta
  agregarMeta(monto);

  // Limpiamos el monto ingresado para usarlo nuevamente
  document.getElementById("monto").value = "";
}

// Cargar el valor de la meta al cargar la página
window.onload = function () {
  // Obtener el valor de la meta desde localStorage
  let monto = localStorage.getItem("metaMonto");

  // Si hay un valor en localStorage, agregar la meta automáticamente
  if (monto) {
    agregarMeta(monto);
    // si se ejecuta correctamente se cambiara el valor de la meta estableciendo que se ha creado
    metaCreada = true;
  }
};

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
  let tablaIngresos = document.querySelector("#tablaIngresos tbody");

  // Obtenemos la fila existente con el id "primerafila1"
  let filaExistente = document.getElementById("filaIngresos");

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
    "#suma-ingreso tr.monto td:last-child"
  );
  tablaTotal.textContent = "$" + totalIngresos;

  // Limpiar los campos después de agregar la fila para utilizarlos nuevameente
  document.getElementById("descripcion").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("Ingreso").value = "";

  IngresoTablaHistorial(fechaInput, categoria, monto);
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
  let tablaGastos = document.querySelector("#tablaGastos tbody");

  // Obtener la fila existente con el id "primerafila2"
  let filaExistente = document.getElementById("filaGastos");

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
    "#suma-Gastos tr.monto td.gastos:last-child"
  );
  tablaTotalGastos.textContent = "$" + totalGastos.toFixed(2);

  // Limpiar los campos después de agregar la fila para utilizarlos nuevamente
  document.getElementById("descripcion2").value = "";
  document.getElementById("fecha2").value = "";
  document.getElementById("categoria2").value = "";
  document.getElementById("Gasto").value = "";

  GastoTablaHistorial(fechaInput, categoria, monto);
}

function IngresoTablaHistorial(fecha, categoria, monto) {
  // Obtén la tablaHistorial del Local Storage (si existe)
  let historialStorage = JSON.parse(localStorage.getItem("historial")) || [];

  // Crea un nuevo objeto para la fila actual
  let nuevaFila = {
    fecha: fecha,
    categoria: categoria,
    monto: monto,
  };

  // Agrega la nueva fila al historial
  historialStorage.push(nuevaFila);

  // Actualiza el Local Storage con el nuevo historial
  localStorage.setItem("historial", JSON.stringify(historialStorage));

  // Llama a la función para construir la tablaHistorial
  construirTablaHistorial();
}

function GastoTablaHistorial(fecha, categoria, monto) {
  // Obtén la tablaHistorial del Local Storage (si existe)
  let historialStorage = JSON.parse(localStorage.getItem("historial")) || [];

  // Crea un nuevo objeto para la fila actual
  let nuevaFila = {
    fecha: fecha,
    categoria: categoria,
    monto: monto,
  };

  // Agrega la nueva fila al historial
  historialStorage.push(nuevaFila);

  // Actualiza el Local Storage con el nuevo historial
  localStorage.setItem("historial", JSON.stringify(historialStorage));

  // Llama a la función para construir la tablaHistorial
  construirTablaHistorial();
}

function construirTablaHistorial() {
  // Obtén la tablaHistorial del Local Storage (si existe)
  let historialStorage = JSON.parse(localStorage.getItem("historial")) || [];

  // Obtén la tablaHistorial del documento HTML
  let tablaHistorial = document.querySelector("#tablaHistorial tbody");

  // Limpia la tablaHistorial existente
  tablaHistorial.innerHTML = "";

  // Itera sobre el historial y agrega las filas a la tablaHistorial
  historialStorage.forEach((fila) => {
    let nuevaFila = document.createElement("tr");

    let celdafecha = document.createElement("td");
    celdafecha.textContent = fila.fecha;
    nuevaFila.appendChild(celdafecha);

    let celdacategoria = document.createElement("td");
    celdacategoria.textContent = fila.categoria;
    nuevaFila.appendChild(celdacategoria);

    let celdaMonto = document.createElement("td");
    celdaMonto.textContent = "$" + fila.monto;
    // Agrega la clase según sea un ingreso o gasto
    celdaMonto.classList.add(fila.monto > 0 ? "ingresos" : "gastos");
    nuevaFila.appendChild(celdaMonto);

    tablaHistorial.appendChild(nuevaFila);
  });
}

// Llama a la función para construir la tablaHistorial al cargar la página
// construirTablaHistorial();
