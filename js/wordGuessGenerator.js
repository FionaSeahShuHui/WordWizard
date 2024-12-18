const wordGuess = document.getElementById("wordGuess")
const hangmanImage = document.getElementById("hangmanImage");

let wrongGuessCount = 0;
const maxWrongGuessCount = 6;

let randomWord;
let word = "";
initializeGame();

function initializeGame() {
    initializeKeyboard();
    wordGuess.innerHTML = "";
    wrongGuessCount = 0;
    randomWord = getRandomGameWord();
    for (let i = 0; i < randomWord.length; i++) {
        const letterBox = document.createElement("div");
        letterBox.className = "wordGuessLetter";
        wordGuess.appendChild(letterBox);
    }
    
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
        wrongGuessCount += 1
        hangmanImage.src = `./assets/images/hangman/${wrongGuessCount}.png`;
    }

    console.log(wrongGuessCount)
    if (wrongGuessCount >= maxWrongGuessCount) {
        alert("Game Over. The word is "+randomWord)
        initializeGame()
    }
}