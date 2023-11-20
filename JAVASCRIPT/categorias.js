document.addEventListener("DOMContentLoaded", function () {
  // Al cargar la página, verifica si hay categorías almacenadas y agréguelas al dropdown
  let categoriasGuardadas =
    JSON.parse(localStorage.getItem("categorias")) || [];
  let dropdown = document.querySelector(".nav-item.dropdown ul.dropdown-menu");

  if (categoriasGuardadas.length > 0) {
    for (let categoria of categoriasGuardadas) {
      let nuevaCategoria = document.createElement("li");
      nuevaCategoria.innerHTML = `<hr class="dropdown-divider"><a class="dropdown-item" href="#">${categoria}</a>`;
      dropdown.appendChild(nuevaCategoria);
    }
  } else {
    // Si no hay categorías guardadas, agregar la etiqueta "No hay Categorias"
    let noCategorias = document.createElement("li");
    noCategorias.innerHTML = `<a class="dropdown-item" href="#">No hay Categorias</a>`;
    dropdown.appendChild(noCategorias);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Al cargar la página, verifica si hay categorías almacenadas y agréguelas al dropdown
  let categoriasGuardadas =
    JSON.parse(localStorage.getItem("categorias")) || [];
  let selectCategoria = document.getElementById("categoria");

  // Limpiar las opciones existentes del select
  selectCategoria.innerHTML = "";

  if (categoriasGuardadas.length > 0) {
    for (let categoria of categoriasGuardadas) {
      let nuevaOpcion = document.createElement("option");
      nuevaOpcion.value = categoria;
      nuevaOpcion.textContent = categoria;
      selectCategoria.appendChild(nuevaOpcion);
    }
  } else {
    // Si no hay categorías guardadas, puedes agregar una opción predeterminada
    let opcionPredeterminada = document.createElement("option");
    opcionPredeterminada.value = "";
    opcionPredeterminada.textContent = "No hay Categorias";
    selectCategoria.appendChild(opcionPredeterminada);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Al cargar la página, verifica si hay categorías almacenadas y agréguelas al dropdown
  let categoriasGuardadas =
    JSON.parse(localStorage.getItem("categorias")) || [];
  let selectCategoria = document.getElementById("categoria2");

  // Limpiar las opciones existentes del select
  selectCategoria.innerHTML = "";

  if (categoriasGuardadas.length > 0) {
    for (let categoria of categoriasGuardadas) {
      let nuevaOpcion = document.createElement("option");
      nuevaOpcion.value = categoria;
      nuevaOpcion.textContent = categoria;
      selectCategoria.appendChild(nuevaOpcion);
    }
  } else {
    // Si no hay categorías guardadas, puedes agregar una opción predeterminada
    let opcionPredeterminada = document.createElement("option");
    opcionPredeterminada.value = "";
    opcionPredeterminada.textContent = "No hay Categorias";
    selectCategoria.appendChild(opcionPredeterminada);
  }
});

function CrearCategoria() {
  let nombreCategoria = document.getElementById("nombreCategoria").value;
  let dropdown = document.querySelector(".nav-item.dropdown ul.dropdown-menu");
  let Vacio = dropdown.querySelector("li:first-child");

  if (nombreCategoria === "" || !isNaN(nombreCategoria)) {
    document.getElementById("advertencia").innerHTML =
      "Ingrese un nombre de categoría válido.";
  } else {
    document.getElementById("advertencia").innerHTML = "";

    let categoriasGuardadas =
      JSON.parse(localStorage.getItem("categorias")) || [];
    categoriasGuardadas.push(nombreCategoria);
    localStorage.setItem("categorias", JSON.stringify(categoriasGuardadas));

    if (Vacio && Vacio.textContent === "No hay Categorias") {
      Vacio.innerHTML = `<a class="dropdown-item" href="#">${nombreCategoria}</a>`;
    } else {
      let nuevaCategoria = document.createElement("li");
      nuevaCategoria.innerHTML = `<hr class="dropdown-divider"><a class="dropdown-item" href="#">${nombreCategoria}</a>`;
      dropdown.appendChild(nuevaCategoria);
    }

    document.getElementById("nombreCategoria").value = "";
  }
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

    // Variable para saber si la categoría existe en el dropdown
    let categoriaEncontrada = false;

    // Recorrer todas las categorías y eliminar la que coincide con el nombre
    for (let i = 0; i < categorias.length; i++) {
      if (categorias[i].textContent.trim() === nombreCategoriaEliminar) {
        categoriaEncontrada = true;
        dropdown.removeChild(categorias[i].parentNode);

        // Si no quedan categorías, agrega una nueva que diga "No hay Categorias"
        if (dropdown.children.length === 0) {
          let nuevaCategoriaVacia = document.createElement("li");
          nuevaCategoriaVacia.innerHTML = `<a class="dropdown-item" href="#">No hay Categorias</a>`;
          dropdown.appendChild(nuevaCategoriaVacia);
        }

        // Limpiar el campo de nombre de categoría después de eliminar
        document.getElementById("nombreCategoriaborrar").value = "";

        // Obtener las categorías actuales desde el LocalStorage
        let categoriasGuardadas =
          JSON.parse(localStorage.getItem("categorias")) || [];

        // Eliminar la categoría del array de categorías
        categoriasGuardadas = categoriasGuardadas.filter(
          (categoria) => categoria !== nombreCategoriaEliminar
        );

        // Actualizar el array de categorías en el LocalStorage
        localStorage.setItem("categorias", JSON.stringify(categoriasGuardadas));

        break; // Salir del bucle una vez que se elimina la categoría
      }
    }

    // Mostrar un mensaje si la categoría no se encuentra
    if (!categoriaEncontrada) {
      document.getElementById("advertencia2").innerHTML =
        "La categoría no existe.";
    }
  }
}
