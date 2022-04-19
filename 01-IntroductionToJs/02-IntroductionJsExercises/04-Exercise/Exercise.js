var num = parseInt(prompt("Insert a number"));

function oddEven(num) {

    if (num % 2 == 0) {
        alert(num + " is Odd");
    } else {
        alert(num + " is Even");
    }
}
oddEven(num);