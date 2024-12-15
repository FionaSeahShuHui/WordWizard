const keyboardDisplay = document.getElementById("keyboard");

for (let i = 97; i <123; i++) {
    const keyboardButton = document.createElement("button");
    keyboardButton.classList.add("keyboardButton");
    keyboardButton.innerText = String.fromCharCode(i);
    keyboardDisplay.appendChild(keyboardButton);
}