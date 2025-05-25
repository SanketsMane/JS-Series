const accountId = 144553. //we connot chnage values when use const
let accountEmail = "sanketpati515151@gmail.com" 
var accountPassword = "12345"
accountCity = "Pune"       //not good methood 


let accountState;
/// accountId =2  TypeError: Assignment to constant variable. this error we will get 

console.log(accountId);


accountEmail = "sanket@sanket.com"

accountPassword = "Pass@123"

accountCity = "mumbai"  

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);  //using the console.table we will get the output as a table format 

// prefer not to use var because issue in block scope and functional 

