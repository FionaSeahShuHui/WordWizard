const wordGuess = document.getElementById("wordGuess")

const randomWord = getRandomGameWord();
console.log(randomWord)
let word = "";
for (let i = 0; i < randomWord.length; i++) {
    const letterBox = document.createElement("div");
    letterBox.className = "wordGuessLetter";
    wordGuess.appendChild(letterBox);
}