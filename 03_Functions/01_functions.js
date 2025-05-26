//function will convert the loc into the package that we can reuse further 

function sayMyName() {
    console.log("s")
    console.log("A")
    console.log("N")
    console.log("K")
    console.log("E")
    console.log("T")
}

sayMyName()

//Addition Function has been written here .
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
    return num1 + num2                      //if function returns any value then only we can capture it 
}

const result = addTwoNumbers(10,14)

console.log("Result : ", result)



//
// function loginUserMsg(username){

//     return `${username} just logged in`

// }

// console.log(loginUserMsg("sanket"))


function loginUserMsg(username){
    if(!username)
    {
        console.log("Please Enter UserName")
        return 
    }
    return `${username} just logged in`

}
console.log(loginUserMsg())





//CART Issue - 

function calculateCartPrice (...num1){          //here i have used rest operator to store multiple values
    return num1
}
console.log(calculateCartPrice(200,300,400))




//handel object in function .
const user = {
    username :"sanket",
    price : 199

}
function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handelObject(user)


