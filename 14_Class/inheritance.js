class user{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`This is username : ${this.username}`)
    }
}


class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.username = username;
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log(`new course was added by : ${this.username}`)
    }
}

const chai = new teacher("sanket","chai@123",12345);
console.log(chai.addCourses())

console.log(chai.logme())

chai.logme();


const masala = new user("test","test@112",1312)

console.log(chai == masala)
