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
