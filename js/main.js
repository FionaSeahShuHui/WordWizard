
document.addEventListener("DOMContentLoaded", () => {
    const wordButton = document.getElementById("generate-word-button");
    const wordGuess = document.getElementById("guess-word");
    wordButton.addEventListener("click", () => {
        const randomWord = getRandomGameWord();
        console.log(randomWord)
        let word = "";
        for (let i = 0; i < randomWord.length; i++) {
            word += "_ ";
        }
        wordGuess.textContent = word;
    });
});