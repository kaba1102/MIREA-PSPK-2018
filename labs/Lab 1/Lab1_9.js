var login = prompt("Логин");
var message = (login == "Вася") ? "Привет" :
(login == "Директор") ? "Здравстуйте" :
(login == "") ? "Нет логина" :
"";
alert(message);