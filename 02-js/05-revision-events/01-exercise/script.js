window.onload = function () {
  var elements = document.getElementById("area");
  elements.addEventListener("change", seeLenght, false);
}

function seeLenght() {
  var areaValue = document.getElementById("area").value;
  var stringArea = areaValue.toString();

  var characters= parseInt(stringArea.length);
  var msgLabel = document.getElementById("msg");

  if(characters<100){ 
	  msgLabel.innerText="Quedan "+(100-characters)+" caracteres";
	}else{
		msgLabel.innerText="Has alcanzado el máximo de "+characters+" caracteres";
	}

}
