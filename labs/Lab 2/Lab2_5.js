function factorial(n){
  return (n != 1) ? n * factorial(n - 1) : 1;
}

var x = prompt("Введите число");
var n = factorial(x);
alert(n);