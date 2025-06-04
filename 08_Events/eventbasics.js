//Javascript is sequential programming language, but it can also be asynchronous.
// This means that it can execute code in a non-blocking way, allowing other code to run while waiting for a task to complete.
// This is particularly useful for tasks like network requests, file I/O, and timers.
// In this example, we will use the setTimeout function to simulate an asynchronous task.


//lets run all browsers events

//primitive approch - 

// document.getElementById('bird').onclick= function(){
//     alert('You clicked the bird!');
// }


//1.    Click Event - 
document.getElementById('bird').addEventListener('click',function(e){
    alert('You clicked the bird!');
    console.log(e); //event object
}, false)  //false is default value, it means that the event will be captured in the bubbling phase.

//also we can use attachEvent()
//jquery - onEvent()

//type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX, clientY, offsetX, offsetY, pageX, pageY,
//altkey, ctrlKey, shiftKey, metaKey, button, buttons, relatedTarget, which, keyCode, charCode, detail, view, composedPath(), stopPropagation(), stopImmediatePropagation(), preventDefault(), isTrusted


//event Propogation - 
document.getElementById('images').addEventListener('click',function(e){
    console.log('You clicked the images!');
})

document.getElementById('bird').addEventListener('click', function(e){
    console.log('You clicked the bird!');
    e.stopPropagation();
})

document.getElementById('cloud').addEvenetListner('click', function(e){
    e.preventDefault()
    e.stopPropagation()
    console.log("cloud Clicked")
    
})

document.querySelector('#images').addEventListener('click',function(e){

    console.log(e.target.preventNode);
    let removeIT = e.target.parentNode
    removeIT.remove()
    
})


