const keyboardDisplay = document.getElementById("keyboard");

for (let i = 65; i <91; i++) {
    const keyboardButton = document.createElement("button");
    keyboardButton.classList.add("keyboardButton");
    keyboardButton.innerText = String.fromCharCode(i);
    keyboardDisplay.appendChild(keyboardButton);

    keyboardButton.addEventListener("click", function () {
        const letterGuess = keyboardButton.innerText.toLowerCase()
        handleGuess(letterGuess);

        keyboardButton.disabled = true;
        keyboardButton.classList.add("disabled");

        console.log(letterGuess);
    });
}

function initializeKeyboard() {
    const allButtons = document.querySelectorAll(".keyboardButton");
    
    allButtons.forEach(button => {
        button.disabled = false;  // Enable the button
        button.classList.remove("disabled");  // Remove the disabled styling
    });
}