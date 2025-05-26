//Array 

const myArr = [1,2,3,4,5,6,7,8,9,0, "Sanket"]   //we can store similar type of elemets 
//Array Indexing starting from 0 


console.log(myArr)

console.log(myArr[2])

const myHeros = ["shaktiman","IronMan","ArrowMan"]
console.log(myHeros)


console.log(myHeros[2])


//Array Methood

myArr.push(6)
console.log(myArr)

myArr.push(7)       //same element is not allowed in array 

myArr.push("7")     //to add similar data in array we need to chnage its type 

myArr.pop()

console.log(myArr)


//to check element is present in array 

console.log(myArr.includes(9))

//to check index of array
console.log(myArr.indexOf(3))


//Join two arrays 

const Fruits = ["Apple ", "mango", "pineapple "]
const nums = [1,2,3,4,5,6,7,8,9]

const newArr = Fruits.join()

console.log(newArr)


//join two arrays

const newArr2 = Fruits+nums

console.log(newArr2)

//slice, splice

console.log("A", myArr)


const newArr3 = nums.slice(1,5)  //shows elements between index 1 - 5 

const newArr4 = nums.splice(1,3)
console.log(newArr4)

//Push  

const marval_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marval_heros.push(dc_heros)

console.log(marval_heros)       //Array inside Array[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//to avoid Array inside Array  use concat methood 

//data Scrapping

console.log(Array.isArray("sanket"))
console.log(Array.from("sanket"))
console.log(Array.from({name : "sanket"}))     //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))



