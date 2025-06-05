const randomColor = function(){

    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i =0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color;

};

let intervalId;
const changeColor = function(){
    if(!intervalId){
   intervalId =  setInterval(changebgcolor,1000);
    }
    function changebgcolor(){
    document.body.style.backgroundColor = randomColor();
    }
}
const stopchangeColor = function(){

    clearInterval(intervalId);
    intervalId = null;
    document.body.style.backgroundColor = "#ffffff";

    const heading = document.querySelector('h1');
    if (heading) {
        heading.textContent = 'Again Original Color';
    }
}

    document.querySelector("#Start").addEventListener('click',changeColor);

    document.querySelector("#Stop").addEventListener('click',stopchangeColor);
