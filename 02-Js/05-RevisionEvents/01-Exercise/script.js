window.onload = function () {
  var elements = document.getElementById("area");
  elements.addEventListener("change", seeLenght, false);
};

function seeLenght() {
  var areaValue = document.getElementById("area");
  var stringArea = areaValue.nodeValue;
  
  alert(stringArea.toString.length)
}
