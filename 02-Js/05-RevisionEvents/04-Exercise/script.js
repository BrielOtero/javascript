window.onload = function() {
	var element = document.getElementById("pink");
	element.addEventListener("click",oneClick,false);
	element.addEventListener("dblclick",twoClick,false);
}
function oneClick(){
	var divPink = document.getElementById("pink").style.backgroundColor="blue";
}

function twoClick(){
	var divPink = document.getElementById("pink").style.backgroundColor="green";

}