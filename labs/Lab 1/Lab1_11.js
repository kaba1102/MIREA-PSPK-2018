var age = parseInt(prompt("Введите возраст"));
if((age > 0 && age < 14) || age > 90){
    alert("Входит");
}
else{
    alert("Не входит");
}