var fibo = [0, 1];
var limit = 0;
var i = 2;
do {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
    document.write(fibo[i] + "<br/>");
    limit = fibo[i];
    i++;
} while (limit < 10000);