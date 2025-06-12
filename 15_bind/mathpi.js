const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);


const Demo = Object.create(null)

const chai = {
    name: 'sanket',
    price: 150,
    isAvailable: true,
}

const show = Object.getOwnPropertyDescriptor(chai, "name");  //with this we can red properties of object, like read / write 


console.log(show)

Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false,
    configurable: false

    //here we can update object properties of read and write
})

const changed = Object.getOwnPropertyDescriptor(chai, 'name')
console.log(changed)

