function fib(n){
    var a = 1;
    var b = 1;
  for (var i = 3; i <= n; i++){
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

var n = prompt("Введите порядковый номер числа Фибоначчи");
var x = fib(n);
alert(x);