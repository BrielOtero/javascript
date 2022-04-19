var closure = false;
var countries = new Array(500);


for (let index = 0; closure != true; index++) {
    countries[index] = (prompt("Insert countries"));
    if (countries[index] == "") {
        closure = true;
    }
}