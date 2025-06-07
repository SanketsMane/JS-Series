//lets create promise 
//A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.//A promise can be in one of three states: pending, fulfilled, or rejected.

//A promise is a placeholder for a value that is not yet known but will be resolved in the future.
const promiseOne = new Promise(function(resolve, reject){
    // do some async work

    setTimeout(function(){
        console.log("promise one resolved")
        resolve();  //use resolve. to execute or consume the promise 
    },2000);

});


//promiseOne consume 

promiseOne.then(function(){
    console.log("promise one is consume successfully")
})


new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("promise two resolved")
        resolve();

    },2000)
}).then(function(){
    console.log("promise two is consume successfully")
})



//fetch values from resolve 

const promiseThree = new Promise(function(resolve, reject){

    resolve({username:"sanket", email:"contactsanket1@gmail.com"})
    //resolve contains the object

})

promiseThree.then(function(user){
    //we can pass the parameters inside the function to get access of data from resolve .
    console.log(user);
})


//fourth promise 

const promiseFour =  new Promise(function(resolve, reject){
    setTimeout(function(){

        let error = true ;
        if(!error)
        {
            resolve({username: "sanket", password: "sanket"})
            console.log("Error is resolved")
        }
        else{
            reject('ERROR, Something Went Wrong...!!')
        }
    },2000)
})

promiseFour.then((user)=> {
    console.log(user)
    return user.username
}).then((username) =>{
    //chaining 
    console.log(username)
}).catch((function(e){
    console.log(e)
    //error handling using catch
})).finally(()=>{
    console.log("Promise is either is resolved or rejected")
})




const promiseFive = new Promise(function(resolve, reject){

        setTimeout(function(){

        let error = false ;
        if(!error)
        {
            resolve({username: "Javascript", password: "123"})
            console.log("Error is resolved")
        }
        else{
            reject('ERROR, JS Went Wrong...!!')
        }
    },2000)
})

async function consumePromiseFive() {
    const response = await promiseFive;
    // You can handle the response or errors here
    //it dosent handel error directly 
    console.log(response);

    try{
            const response = await promiseFive;
            console.log("Responce inn try catch : ",response);
    }
    catch(error){
        console.log(error)
    }
}