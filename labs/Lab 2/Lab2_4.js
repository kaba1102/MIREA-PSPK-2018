function sumTo1(n){
  var sum = 0;
  for(var i = 1; i <= n; i++){
    sum += i;
  }
  return sum;
}

function sumTo2(n){
  if (n == 1){
      return 1;
  }
  return n + sumTo(n - 1);
}

function sumTo3(n){
  return n * (n + 1) / 2;
}

var x = prompt("Введите число")
var n = sumTo1(x);
alert(n);