//Choose a random color
const button = document.getElementsByClassName("btn btn-outline-secondary")
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'red'
button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex]
}
