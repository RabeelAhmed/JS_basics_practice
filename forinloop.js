// basicaly use for objects printing
        
let obj = {
    fnanme: "Rabeel",
    lname: "Ahmed",
    age: 21,
    country: "Pakistan",
}

for(let key in obj){
    document.write(key + " : " + obj[key] + "<br>")
}