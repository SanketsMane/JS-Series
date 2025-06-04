document.addEventListener('DOMContentLoaded', function() {

const randomNum = (parseInt(Math.random()*100 +1));  //genrate random number

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guess = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt (userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    // 
    if(isNaN(guess)){
        alert('Please enter a valid number between 1 and 100');
        
    }
    else if(guess <1 ){
        alert('Please enter a number greater than 0');
        
    }
    else if(guess > 100){
        alert('Please enter a number less than or equal to 100');
        
    }
    else {
        (prevGuess.push(guess))
        if(numGuesses === 11){
            displayGuess(guess);
            displayMessage(`Game Over! ${randomNum} was the number!`);
            endGame();
        }
        else{

            displayGuess(guess);
            checkGuess(guess);
        }
        
        
    }
}

function checkGuess(guess){
    //    
    if(guess === randomNum){
        displayMessage(`Congratulations! ${guess} is the correct number!`);
        endGame();
    }
    else if(guess < randomNum){
        displayMessage(`${guess} is too low!`);
        lowOrHi.textContent = 'Last guess was too low!';
    }
    else if(guess > randomNum){
        displayMessage(`${guess} is too high!`);
        lowOrHi.textContent = 'Last guess was too high!';
    }
}

function displayGuess(guessValue){
    //
    userInput.value = '';
    guess.innerHTML += `${guessValue} , `;
    numGuesses++;
    remaining.innerHTML = `You have ${11 - numGuesses} guesses left.`;
    if(numGuesses === 2){
        startOver.appendChild(p);
    }
                 
}

function displayMessage(message){
    //
    lowOrHi.textContent = `${message}`;
}

function newGame(){
    //
    playGame = true;
    numGuesses = 1;
    prevGuess = [];
    randomNum = (parseInt(Math.random()*100 +1));
    guess.innerHTML = '';
    remaining.innerHTML = '';
    lowOrHi.textContent = '';
    userInput.value = '';
    p.textContent = '';
    startOver.innerHTML = '';
    startOver.appendChild(p);
    p.textContent = 'Start a new game!';
    p.classList.add('newGame');
    p.addEventListener('click', function(){
        newGame();
    });
    p.style.cursor = 'pointer';         

}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', 'disabled');
    playGame = false;
    p.textContent = 'Start a new game!';
    p.classList.add('newGame');
    p.addEventListener('click', function(){
        newGame();
    });
    p.style.cursor = 'pointer';                         

}

});
