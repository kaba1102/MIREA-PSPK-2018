var login = prompt("login");

if(login === null){
	alert("Вход отменен");
}
else{
    if(login === null){
	   alert("Вход отменен");
	else if(login == "admin"){
		var password = prompt("Пароль");
		if(password == "Чёрный Властелин"){
			alert("Добро пожаловать!");
		}
        else {
			alert("Пароль неверен");
		}
	}
    else {
		alert("Я вас не знаю");
	}
}
}