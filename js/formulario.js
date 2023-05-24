/* Capturar los campos:
primer paso es crear unas constantes que toman los valores de las inputs que 
coincidan con el selector de atributos name (se puede utilizar id o class también) */


const nombreField = document.querySelector("[name=nombre]");
const emailField = document.querySelector("[name=correo]");

/* Si el resultado es error, al campo le agrega “invalid”, “error” y el texto message.
field.classList.add("invalid") le agrega el valor invalid para que coloree la caja y le 
dé sombra. Agrega la clase ("") a field nextElementSibling va a buscar el próximo elemento 
del field, en este caso el span y a ese elemento le agrega la clase “error” y luego le 
inserta el texto message de error. Else es para eliminar el error */


const setErrors = (message, field, isError = true) => {
  if (isError) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

/* Valida campo vacío:
Crea la constante validateEmptyField asignando (message) y 
resultado del evento (e) y dos constantes más field y fieldValue, 
ambas son strings, adonde guarda los valores del campo y del valor 
del campo, luego compara el largo del valor del campo sin espacios 
en blanco en extremos (trim()) con 0, si es igual, hace a setErrors */


const validateEmptyField = (message, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.trim().length === 0) {
    setErrors(message, field);
  } else {
    setErrors("", field, false);
  }
}

/* Valida campo email a través de verificar con expresión regular:
target es el campo que dispara el evento, value es el valor que tiene 
ese campo. Al menos debe escribir 5 caracteres. Está negado en boolean 
regex.test porque quiero que de verdadero cuando no coincida con el 
formato RegExp */


const validateEmailFormat = e => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{4,16}$/);
  if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
    setErrors("Por favor ingrese un correo válido", field);
  } else {
    setErrors("", field, false);
  }
}

/* El objeto evento (e) se dispara cuando hace “blur”, lo toma que captura información del evento */

nombreField.addEventListener("blur", (e) => validateEmptyField("El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.", e));

emailField.addEventListener("blur", (e) => validateEmptyField("Correo solo puede contener letras, numeros, puntos, guiones y guion bajo", e));

emailField.addEventListener("input", validateEmailFormat);
