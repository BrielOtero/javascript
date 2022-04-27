var age = parseFloat(prompt("Insert your age"));

function winReward(age) {
    if (age >= 75 && age <= 80) {
        alert("You won: " + age * 0.05 + "$");
    } else {
        alert("You can't participate");
    }
}
winReward(age);