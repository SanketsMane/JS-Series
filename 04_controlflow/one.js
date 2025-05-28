//if- else 

// if(condition){      //if condition is true it will execute & if false not execute 

// }

// < , > , <= , >=, ==,!=, === 

// const balance  = 1000

// if (balance >500)
// {
//     console.log(`balance is ${balance}, Grater than 500`)
// }

// //nested if else 

// if (balance > 500)
// {

//     console.log("less than")
// }
// else if(balance <750 )
// {
//     console.log("less than 750")
// }
// else if(balance <900 ){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }





const userLoggedIn = true 
const debitCard = true 
const laptop = false 

if(userLoggedIn && debitCard && laptop)
{
    console.log("Allow to Buy Courses ..")

}
else{
    console.log("Not Allowed ...")
}

const loggedInFromGoogle = true
const loggedInFromEmail = true

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("user loggeed in ")
}
