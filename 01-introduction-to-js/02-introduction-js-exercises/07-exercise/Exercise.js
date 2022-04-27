var age = parseInt(prompt("Insert your age"));


function price(age) {
    if (age <= 8) {
        alert("The ticket is free ");
    } else if (age >= 9 && age <= 16) {
        alert("The ticket cost 5$");
    } else if (age >= 17 && age <= 25) {
        alert("The ticket cost 8$");
    } else if (age >= 26 && age <= 55) {
        alert("The ticket cost 10$");
    } else if (age >= 56 && age <= 65) {
        alert("The ticket cost 5$");
    } else {
        alert("The ticket is free ");
    }
}
price(age);