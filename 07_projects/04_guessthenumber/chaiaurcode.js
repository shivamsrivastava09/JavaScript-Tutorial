let random = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = []
let numberGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
            e.preventDefault()
            const guess = parseInt(userInput.value)
            console.log(guess);
            validateGuess(guess)
        }
    )
}

function validateGuess (guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
        alert('please ender valid number')
    }else if(guess>100){
        alert('please ender number more than 100')
    }else {
        prevGuess.push(guess)
        if(numberGuess ===11){
            displayGuess(guess)
            displayMessage(`Game over Random Number was ${random}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess){
    if(guess === random){
        displayGuess(`You guessed it right`)
        endGame()
    }else if(guess < random){
        displayMessage(`Number is Tooo Low`)
    }else if (guess > random){
        displayMessage(`Number is Tooo High`)
    }
}

function displayMessage (message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}   `
    numberGuess++
    remaining.innerHTML = `${11 - numberGuess}`
}

function newGame(){
    const newgameButton = document.querySelector('#newGame')
    newgameButton.addEventListener('click', function(e){
        random = parseInt(Math.random()*100+1)
        prevGuess = []
        numberGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numberGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()    
}
