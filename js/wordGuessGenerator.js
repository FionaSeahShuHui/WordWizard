const wordGuess = document.getElementById("wordGuess")
const hangmanImage = document.getElementById("hangmanImage");

let wrongGuessCount = 0;
const maxWrongGuessCount = 6;

let randomWord;
let word = "";
initializeGame();

function initializeGame() {
    wordGuess.innerHTML = "";
    wrongGuessCount = 0;
    randomWord = getRandomGameWord();
    console.log("New Word: "+randomWord);
    for (let i = 0; i < randomWord.length; i++) {
        const letterBox = document.createElement("div");
        letterBox.className = "wordGuessLetter";
        wordGuess.appendChild(letterBox);
    }
    initializeKeyboard();
    hangmanImage.src = "./assets/images/hangman/0.png";
}

function handleGuess(letter) {
    let isCorrect = false;
    const letterBoxes = document.querySelectorAll(".wordGuessLetter");
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i].toLowerCase() === letter) {
            letterBoxes[i].innerText = randomWord[i]; // Reveal the letter
            isCorrect = true;
        }
    }

    if (!isCorrect) {
        console.log("Wrong guess!");
        wrongGuessCount += 1
        hangmanImage.src = `./assets/images/hangman/${wrongGuessCount}.png`;
    }

    if (wrongGuessCount >= maxWrongGuessCount) {
        console.log("Game Over")
        alert("Game Over. The word is "+randomWord)
        initializeGame()
    }
}