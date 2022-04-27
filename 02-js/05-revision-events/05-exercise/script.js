window.onload = function () {
  var element = document.getElementById("send");
  element.addEventListener("click", checkPass, false);
};

function checkPass() {
  var pass = document.getElementById("pass").value.toString();
  var error = document.getElementById("error");

  error.innerHTML = "";

  if (!/(?=.{8,})/.test(pass)) {
    error.innerHTML = "Debes introducir al menos 8 caracteres";
  }
  if (!/(?=.*[A-Z])/.test(pass)) {
    error.innerHTML =
      error.innerHTML + "<br>" + "Debes introducir al menos 1 mayuscula";
  }
  if (!/(?=.*[0-9])/.test(pass)) {
    error.innerHTML =
      error.innerHTML + "<br>" + "Debes introducir al menos 1 número";
  }
}
