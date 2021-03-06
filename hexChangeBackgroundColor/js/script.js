//Choose a random color
const button = document.getElementById("change-color-btn")
const body = document.querySelector('body')

body.style.backgroundColor = 'gray'
button.addEventListener('click', changeBackground)

function changeBackground() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const colorHex = "#" + randomColor;
    body.style.backgroundColor = colorHex;
    document.getElementById("hex-color-text").textContent = `HEX COLOR: ${colorHex}`;
}
