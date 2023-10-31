function CrearCategoria() {
  // Obtenermos el valor del nombre ingresado
  let nombreCategoria = document.getElementById("nombreCategoria").value;
  // buscamos y asignamos el elemento deseado (en este caso el dropdown)
  let dropdown = document.querySelector(".nav-item.dropdown ul.dropdown-menu");
  //   obtenemos el primer eleemnto del dropdown en este caso ("No hay Categorias")
  let Vacio = dropdown.querySelector("li:first-child");

  // Verificar que el campo no esté vacío y no contenga solo números
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
