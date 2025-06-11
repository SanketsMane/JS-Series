class user{
    constructor(username){
        this.username= username;
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

     createId(){             //if we use static keyword here we are not able to pass referance of this outside the user class EX - Static createId(){}
        return `123`
    }
}

const sanket = new user("sanket")

console.log(sanket.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

console.log(iphone.createId())

