const teacher ={
    makevideo: true 
}

const techingSupport ={
    isavailable: false
}

const TASupport ={
    makeassignment: true,
    fulltime: true,
    __proto__:techingSupport    //here we can inherit properties of teachingSupport in TASupport 
}

const user = {
    name:"sanket",
    email:"contactsanket1@gmail.com"
}

teacher.__proto__ = user;

//modern prototype syntax 
Object.setPrototypeOf(teacher,TASupport) //same syntax as __proto__




let anotherUserName = "chaiAurCode"
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true length is: ${this.trim().length}`);
}

anotherUserName.truelength()
"sanket     ".truelength()