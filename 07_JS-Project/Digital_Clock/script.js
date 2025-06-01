
document.addEventListener('DOMContentLoaded', function() {
const clock = document.getElementById('clock');
// const clock2 = document.querySelector("#clock");

//to use setInterval to update the clock every second
// we need to wrap the code in DOMContentLoaded to ensure the DOM is fully loaded before we try to access the clock element

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
});