  // call back function

        // call back function with sum
        
        let calculate = (c, d, operation) =>  operation(c,d)

       const result =  calculate(3,4,function(c,d){  //this is like Anonymous function
        return  c + d
       })
        console.log(result)

        // call back function with subtract

        const subtraction = (a, b) => a-b;

        const subResult = calculate(8, 3, subtraction)
        console.log(subResult)

        // call back function with divid

        const divide = (x,y) => x/y;

        const divResult = calculate(2,2, divide)

        console.log(divResult)

        // practically use of call back function

        const a = [4,1,6,-2,-5,3,2,-8,6,7]

        // const firstneg = (num) => num<0;

        // // for find()
        // const findResult = a.find(firstneg)
        // console.log(findResult)

        // // for findIndex()
        // const findindexResult = a.findIndex(firstneg)
        // console.log(findindexResult)

        // forEach() ---> use for apply operation on every element in an array

        a.forEach((num) => {
            console.log("array num", (num+2))
        })
        console.log("------>simple array<------")
        a.forEach((num) => {
            console.log("array num", num)
        })

