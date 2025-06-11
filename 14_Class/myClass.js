class user {
    constructor(userName, Password, email){
        this.userName= userName;
        this.Password= Password;
        this.email= email;
    }

    encryptPassword(){
        return `${this.Password}abc`
    }

    changeUserName(){
        return this.userName.toUpperCase();
    }
}

const chai = new user("chai",123,"chai@gmail.com");
console.log(chai.encryptPassword())
console.log(chai.changeUserName())


//behind the scene - 

function User(userName,email,Password){
        this.userName= userName;
        this.Password= Password;
        this.email= email;
}
User.prototype.encryptPassword = function(){
    return `${this.Password}abc`
}

const tea = new User("tea","tea@gmail.com",1234);

console.log(tea.encryptPassword())