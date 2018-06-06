var calculator = {
    read: function(){
    this.a = +prompt("Введите A", 0);
    this.b = +prompt("Введите B", 0);
  },
    sum: function(){
    return this.a + this.b;
  },

    mul: function(){
    return this.a * this.b;
  }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());