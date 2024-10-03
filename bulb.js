// let get = document.getElementById("demo")
// let btn = document.getElementById("btn")

// let count = 0;
// btn.addEventListener("click",function(){
    
//     if(count == 0){
//     get.style.backgroundColor = "yellow"
//     count = 1
//     }else{
//         get.style.backgroundColor = "transparent"
//         count = 0;
//     }
// })

let on = document.getElementById("demo")
let c = 0;
document.getElementById("btn").addEventListener("click",function(){
    if(c == 0){
    on.style.backgroundColor = "yellow"
    c = 1
}else {
    on.style.backgroundColor = "transparent"
    c= 0
}
})

