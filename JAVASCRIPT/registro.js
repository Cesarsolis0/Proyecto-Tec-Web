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
