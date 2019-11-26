var numericMessage = "* Este campo debe ser numerico";
var letterMessage = "* Este campo no debe ser alphanumerico";

function regexNumberValidator(value) {
  let numberValidate = /^[0-9]*$/gm;
  return numberValidate.test(value);
}
function regexLetterValidator(value) {
  let letterValidate = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g;
  return letterValidate.test(value);
}
function regexEmailValidator(value) {
  let emailValidate = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
  return emailValidate.test(value);
}

function validator(userData) {
  var errorHandler = {};
  errorHandler.error = false;
  errorHandler.errorId = [];
  errorHandler.errorPosition = [];
  errorHandler.errorName = [];
  errorHandler.errorEmail = [];
  errorHandler.errorApellido = [];
  errorHandler.errorEdad = [];

  if (!userData.id || !regexNumberValidator(userData.id)) {
    errorHandler.errorId.push("* Debe ingresar una id para el registro");
    errorHandler.errorId.push(numericMessage);
    errorHandler.error = true;
  }
  if (!userData.position || !regexNumberValidator(userData.position)) {
    errorHandler.errorPosition.push(
      "* Debe ingresar una posicion valida para el registro"
    );
    errorHandler.errorPosition.push(numericMessage);
    errorHandler.error = true;
  }
  if (!userData.name || !regexLetterValidator(userData.name)) {
    errorHandler.errorName.push(
      "* Debe ingresar un nombre valido para el registro"
    );
    errorHandler.errorName.push(letterMessage);
    errorHandler.error = true;
  }
  if (!userData.email || !regexEmailValidator(userData.email)) {
    errorHandler.errorEmail.push(
      "* Debe ingresar un email valido para el registro"
    );
    errorHandler.error = true;
  }
  if (!userData.apellido || !regexLetterValidator(userData.apellido)) {
    errorHandler.errorApellido.push(
      "* Debe ingresar una apellido valido para el registro"
    );
    errorHandler.errorApellido.push(letterMessage);
    errorHandler.error = true;
  }
  if (!userData.edad || !regexNumberValidator(userData.edad)) {
    errorHandler.errorEdad.push(
      "* Debe ingresar una edad valida para el registro"
    );
    errorHandler.errorEdad.push(numericMessage);
    errorHandler.error = true;
  }
  return errorHandler;
}

export default validator
