// model

const app = document.getElementById("app");
const minNumber = 0;
const maxNumber = 1000;
const delay = 3000;
let correctNumber = 0;
let playerGuess = 0;

// view

function updateView() {
    app.innerHTML = /*html*/ `
		<h4>Guess a number between ${minNumber} and ${maxNumber}</h4>
		<input type="number" placeholder="Type in a number" id="guessInput">
		<button onclick="checkNumber()">Enter</button>
		<br/><br/>
		<div id="feedback"></div>
	`;
}

// controller

function generateNumber() {
    correctNumber = Math.floor(Math.random() * maxNumber);
    updateView();
}

function giveFeedback(inText, useDelay) {
    const resultFeedback = document.querySelector("#feedback");
    resultFeedback.innerHTML = inText;
    if (useDelay) {
        setTimeout(() => { resultFeedback.innerHTML = ""; }, delay);
    }
}

function checkNumber() {
    playerGuess = document.querySelector("#guessInput").value;

    if (playerGuess > correctNumber) {
        giveFeedback("Your guess is too high", true);
    }

    if (playerGuess < correctNumber) {
        giveFeedback("Your guess is too low", true);
    }

    if (playerGuess == correctNumber) {
        giveFeedback("Your guess is correct", false);
    }

    if (playerGuess < minNumber || playerGuess > maxNumber) {
        giveFeedback("The number must be between " + minNumber + " and " + maxNumber, true);
    }
}
