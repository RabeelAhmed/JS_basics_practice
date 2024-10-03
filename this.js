let person = {
    fname : "Rabeel",
    lastname : "Ahmed",
    sayHello(){
        console.log("HELLO ! i am "+ this.fname + " and i have a " + car.brand + " car")
    }
}

let car = {
    brand : "Corola",
    model : "23",
}

person.sayHello()