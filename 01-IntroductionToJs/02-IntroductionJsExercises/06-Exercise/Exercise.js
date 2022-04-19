var num1 = parseInt(prompt("Insert a number"));
var num2 = parseInt(prompt("Insert another number"));

function isMultiple(num1, num2) {
    if (num1 % num2 == 0) {
        alert(num1 + " is a multiple of " + num2);
    } else {
        alert(num1 + " not is a multiple of " + num2);
    }
}
isMultiple(num1, num2);