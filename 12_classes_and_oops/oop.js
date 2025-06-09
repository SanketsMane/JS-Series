//object literal - 

// const user = {
//     username: 'sanket',
//     loginCount: 8,
//     isloggedIn: true,



//     getUserDetails: function(){
//         console.log("Got User Details From DataBase..");
//         console.log(`username: $(this.username)`)
//         //this keyword is used to access elements outside the function

//         console.log("This keyword in node enviroment: ",this) //now it will show the current context - 

        

//     }
// }
// console.log(user.getUserDetails())
// console.log(user.username)

// console.log("this keyword in global context: ",this)   //this keyword in global context



console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
//counstructor 

//const promiseOne = new promise();
//new keyword is also called as constructor function 
//new keyword allow to create multiple inmstance from one object - 
// new keyword will create new context 

function UserS(username, isloggedIn, loginCount){
   this.username =  username;
   this.isloggedIn = isloggedIn;
   this.loginCount = loginCount;


    return this;
}

console.log(UserS);

const UserOne = UserS('sanket',true,8);   //without new keyword it will show all the mess
console.log(UserOne);


const UserTwo = new UserS('vaishnavi',true,10);
const UserThree = new UserS('Sanket',false,7);

console.log('Data of UserTwo: ', UserTwo);
console.log('Data of UserThree: ', UserThree);