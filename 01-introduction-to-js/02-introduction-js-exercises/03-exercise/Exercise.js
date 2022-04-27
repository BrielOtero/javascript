var radio = prompt("Insert radio on meters");

function area(radio) {
    var area = Math.PI * (parseFloat(radio) * parseFloat(radio));
    alert(area);
}

area(radio);