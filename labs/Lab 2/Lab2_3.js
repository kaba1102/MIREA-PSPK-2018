function pow(x, n){
  var result = x;
  for(var i = 1; i < n; i++){
    result *= x;
  }
  return result;
}

var x = parseInt(prompt("Введите число"));
var n = parseInt(prompt("Введите степень"));
alert(pow(x,n));