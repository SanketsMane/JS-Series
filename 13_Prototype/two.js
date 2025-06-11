let myname = "sanket    ";
console.log(myname.length);

let heros = ["thor", "spiderman"]

let heroPow ={
    thor:"hammer",
    spiderman:"web",

    herospower: function(){
        console.log(`Spiderman has power ${this.spiderman}`)
    }
}
// console.log(heroPow)

Object.prototype.myname = function(){
    console.log(`Sanket Is Present In Every Object`);
}

heroPow.myname();