// const tinderUser = new Object()
const tinderUser = {}                 //singleton object

tinderUser.id = "123abc"
tinderUser.name = "sanket"
tinderUser.isLoggedIn = false
console.log(tinderUser)


console.log(tinderUser)



const realUser ={
    email :"sanket@gmail.com",
    fulname: {
        userfullname :{
            firstname : "sanket",
            middlename : "sinabhau",
            lastname : "mane"
        }
    }
}

console.log(realUser.fulname?.userfullname)




//Merge objects

const obj1 = {1: "a",2: "b"}
const obj2 = {1: "f",2: "g"}

// const obj3 = {obj1,obj2}. it will shows object inside object

const obj3 = Object.assign({}, obj1,obj2)

console.log(obj3)




//

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))


console.log(Object.entries(tinderUser))


//check value available or not 

console.log(tinderUser.hasOwnProperty('isLogged'))