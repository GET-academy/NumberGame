// model

const app = document.getElementById("app");
const minNumber = 0;
const maxNumber = 1000;
const delay = 1500;
let correctNumber = 0;
let playerGuess = 0;

// view

function updateView() {
    app.innerHTML = /*html*/ `
		<h4>Guess a number between ${minNumber} and ${maxNumber}</h4>
		<input type="number" placeholder="Type in your guess here" id="guessInput" onchange="checkNumber()">
		<br/><br/>
		<div id="feedback"></div>
	`;
}

// controller

function generateNumber() {
    correctNumber = Math.floor(Math.random() * maxNumber);
    updateView();
}

function giveFeedback(inText, inDelay) {
    const resultFeedback = document.querySelector("#feedback");
    resultFeedback.innerHTML = inText;
    if (inDelay) {
        setTimeout(() => { resultFeedback.innerHTML = ""; }, inDelay);
    }
}

function checkNumber() {
    playerGuess = document.querySelector("#guessInput").value;

    if (playerGuess > correctNumber) {
        giveFeedback("Your guess is too high", delay);
    }

    if (playerGuess < correctNumber) {
        giveFeedback("Your guess is too low", delay);
    }

    if (playerGuess == correctNumber) {
        giveFeedback("Your guessed the correct number", 0);
    }

    if (playerGuess < minNumber || playerGuess > maxNumber) {
        giveFeedback("The number must be between " + minNumber + " and " + maxNumber, delay);
    }
}
