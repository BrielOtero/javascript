		window.onload = function(){
			var element = document.getElementById("addElement");
			element.addEventListener("click",insert,false);
		}

		function insert(){
			var list = document.getElementById("olId");

			var liElement = document.createElement("li");
			var inputElement = document.createElement("input");
			inputElement.setAttribute('type', 'text');
			inputElement.setAttribute('maxlength', '10');
			inputElement.setAttribute('name', 'boxes');
			liElement.appendChild(inputElement);
			list.appendChild(liElement);	
		}
