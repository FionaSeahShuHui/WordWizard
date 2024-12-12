
document.addEventListener("DOMContentLoaded", () => {
    const wordButton = document.getElementById("generate-word-button");
    const wordDisplay = document.getElementById("random-word");

    wordButton.addEventListener("click", () => {
        const randomWord = getRandomGameWord();
        wordDisplay.textContent = randomWord;
    });
});