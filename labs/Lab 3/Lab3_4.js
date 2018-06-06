function Calculator(){
  this.read = function(){
    this.a = +prompt("Введите A", 0);
    this.b = +prompt("Введите B", 0);
  };
  this.sum = function(){
    return this.a + this.b;
  };
  this.mul = function(){
    return this.a * this.b;
  };
}

var calculator = new Calculator();
calculator.read();
alert("Сумма = " + calculator.sum());
alert("Произведение = " + calculator.mul());