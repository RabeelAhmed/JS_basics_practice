function prom(hogya){
    return new Promise(function(resolve, reject){
        console.log("plz wait data uthaya ja raha hai")
        setTimeout(() => {
            if(hogya==1){
                console.log("Hogya bro")
            }else{
                console.log("Nhi hua bro")
            }
        }, 3000)
    })
}

function hua(result){
    console.log(result)
}
function nhihua(error){
    console.log(error)
}

prom(2/2).then(hua).catch(nhihua)