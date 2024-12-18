const wordGuess = document.getElementById("wordGuess")

let wrongGuessCount = 0;
const maxWrongGuessCount = 6;

const randomWord = getRandomGameWord();
console.log(randomWord)
let word = "";
for (let i = 0; i < randomWord.length; i++) {
    const letterBox = document.createElement("div");
    letterBox.className = "wordGuessLetter";
    wordGuess.appendChild(letterBox);
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
    }

    if (wrongGuessCount >= maxWrongGuessCount) {
        console.log("Game Over")
    }
}