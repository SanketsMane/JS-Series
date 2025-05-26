const user = {
    username : "sanket",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to Website`)        //this refers to currrent context 
    }


}

user.welcomeMessage()