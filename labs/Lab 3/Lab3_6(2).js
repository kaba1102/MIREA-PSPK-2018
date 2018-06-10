var sum = 0;
var edge = 2;
listA:
for(var i = 2; i < 101; i++){
    for (var j = 2; j < edge; j++){
        if(i % j == 0){
            continue listA;
        }
    }
    if(edge !== 10){
         edge++;
    }
    sum += i;
}
alert(sum);
