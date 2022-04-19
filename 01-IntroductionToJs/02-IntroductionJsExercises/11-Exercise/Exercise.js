var num = parseInt(prompt("How many numbers do you want insert?"));
var sum = 0;

for (let index = 1; index <= num; index++) {
    sum = sum + parseInt(prompt("Insert the " + index + " number please."))
}
alert("The sum of yours " + num + " numbers is " + sum);