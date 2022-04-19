window.onload = function () {
  var addElement = document.getElementById("addElement");
  var deleteElement = document.getElementById("deleteElement");
  var showElement = document.getElementById("showElement");
  addElement.addEventListener("click", insert, false);
  deleteElement.addEventListener("click", del, false);
  showElement.addEventListener("click", show, false);
};

function insert() {
  var list = document.getElementById("olId");
  var liElement = document.createElement("li");
  var inputElement = document.createElement("input");
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("maxlength", "10");
  inputElement.setAttribute("name", "boxes");
  liElement.appendChild(inputElement);
  list.appendChild(liElement);
}

function del() {
  var listDel = document.getElementById("olId");
  var chilLi = document.getElementsByTagName("li");
  var inputElement = document.createElement("input");
  listDel.removeChild(chilLi[chilLi.length - 1]);
}

function show() {
  var chilLi = document.getElementsByName("boxes");
  var select = [];

  for (i = 0; i < chilLi.length; i++) {
    select.push(chilLi[i].value);
  }
  var values = "";

  for (i = 0; i < select.length; i++) {
    values += select[i].toString() + "\n";
  }

  alert(values);
}
