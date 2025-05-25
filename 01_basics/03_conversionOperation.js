let score = "33"

// null will be converted to zero 0 
// undefined will be converted as NaN
// boolean (true) will be converted as  1
// boolean (false) will be converted as 0
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33"=> 33
// "33abc"=> NaN 
// true => 1; false =>0


//convert string to boolean 
let isLoggedIn = "sanket"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);




//Convert Number is string number 
let someNumber =33

let stringNumber = String(someNumber);
console.log(typeof someNumber)