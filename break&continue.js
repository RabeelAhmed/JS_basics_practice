document.write("-----------CONTINOUS-----------<br>")
for(let a=1;a<=10;a++){
    if(a==5){
        document.write("Hey: " + a + "<br>")
        continue;
    }
    document.write("Hello: " + a + "<br>")
}

document.write("-----------BREAK------------<br>")

for(let i=1;i<=10;i++){
    if(i==5){
        document.write("Hey: " + i + "<br>")
        break;
    }
    document.write("Hello: " + i + "<br>")
}