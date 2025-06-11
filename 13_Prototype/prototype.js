//Prototype in js - it is an mechanics of js  - IMP for 
//it prototyping js will search the elements until it fund the null 
//protying is a behaviour of java 
const newHero = ["hulk","spiderman"];

//it eill shows - 2) ['hero', 'super']0: "hero"1: "super"length: 2[[Prototype]]: Array(0)

// Arrray -----> Object ---------> Null
//Everything in js is an object so all the properties which array have it aslo similar to String


function test(num){
    return num*5;
    //function is also an a object 
}
test.power = 2
console.log(test(5));
console.log(test.Prototype);
console.log(test.power);


//

function createuser(userName, score){
    this.userName = userName;
    this.score = score;

}

createuser.prototype.increment = function(){
    this.score++;  //here we need to provide context 
}
createuser.prototype.PrintMe = function(){
    console.log(`score is ${this.score}`)
}

const chai = new createuser("sanket",10);
const tea = new createuser("sanket2",25);

chai.increment();
chai.PrintMe();
chai.increment();




