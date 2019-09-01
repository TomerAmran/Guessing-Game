
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessCount = 1;

    const guessField = document.getElementById('guessField');
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', playGame);
    const previousGuesses = document.querySelector('.previousGuesses');
    const result = document.querySelector('.result');
    const highOrLow = document.querySelector('.highOrLow');
    let resetButton;

function playGame() {
    //test
    // console.log("button was clicked");
    // console.log(highOrLow);
    // console.log(result);
    // console.log(previousGuesses);
    // console.log(guessField);
    console.log(randomNumber);

    //function
    const userGuess = Number(guessField.value);
    if (guessCount===1) {
        previousGuesses.textContent = "Previous Guesses:"
    }
    previousGuesses.textContent = previousGuesses.textContent + " " + userGuess;

    if (userGuess !== randomNumber) {
        if (guessCount < 10 ) {
            result.textContent = "Wrong! try again."
            result.backgroundColor = "red";
            highOrLow.textContent = highOrLowChecker(userGuess);
        }
        else if (guessCount === 10) {
            console.log("round 10");
            result.textContent = "GAME OVER"
            // result.backgroundColor = "Black";
            // result.color = "white";
            highOrLow.textContent = highOrLowChecker(userGuess);
            setGameOver()
        }
    }
    else {
        result.textContent = "Bravo! You guessed right.";
        highOrLow.textContent = "The number is: " +randomNumber;
        setGameOver()
    }
    guessCount++;
}

function highOrLowChecker(userGuess) {
    if (userGuess < randomNumber) {
        return "Last guess was too low";
    }
    if (userGuess > randomNumber) {
        return "Last guess was too high"
    }
}

    function setGameOver() {
        guessField.disabled =true;
        submitButton.disabled =true;
        resetButton = document.createElement('button');
        resetButton.textContent = "start new game";
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click ', resetGame);
    }

    function resetGame() {
        console.log("'start new game' button was clicked");
        guessCount = 1;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        result.textContent = "";
        highOrLow.textContent = "";
        previousGuesses.textContent = "";
        guessField.disabled = false;
        submitButton.disabled = false;
        resetButton.parentNode.removeChild(resetButton);
    }
