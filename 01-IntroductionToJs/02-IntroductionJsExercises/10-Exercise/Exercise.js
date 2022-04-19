var result = 1;

do {
    var num = parseInt(prompt("Insert a positive number"));
    if (num < 0) {
        alert("ERROR: Please insert a positive number")
    }
} while (num < 0);

if (num == 0 || num == 1) {
    result = 1;
} else {
    for (let i = num; i >= 1; i--) {
        result = result * i;
    }
}
alert("The factorial of " + num + " is " + result);