const userEmail = []

if(userEmail){
    console.log("Got User Email.")
}
else{
    console.log("Don't Have UserEmail")
}

//Falsy Values - 
// false , 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values
// [] , "0" , 'false', " ", function(){},  



if(userEmail.length===0){
    console.log("Array is Empty")
}
else{
    console.log("Array Has Values.")
}


const Emptyobj = {}

if (Object.keys(Emptyobj).length=== 0){
    console.log("object is empty")
}
