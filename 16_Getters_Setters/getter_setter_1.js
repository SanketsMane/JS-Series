class User {
    constructor(email, password) {
        this.email = email;
        this.password = password; // this will trigger the setter
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = String(value).toUpperCase();
    }
}

const sanket = new User("abc@gmail.com", 12345);

console.log(sanket);
console.log(sanket.password); // Outputs: "12345" in uppercase (as string)
