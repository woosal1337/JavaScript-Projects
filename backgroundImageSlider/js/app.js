var x = 0;

const imagePath = [
    "img/contBcg-0.jpeg",
    "img/contBcg-1.jpeg",
    "img/contBcg-2.jpeg",
    "img/contBcg-3.jpeg",
    "img/contBcg-4.jpeg"
];

// Left click listener
const leftClickBtn = document.getElementById("btn-left");
leftClickBtn.addEventListener("click", left());

// Right click listener
const rightClickBtn = document.getElementById("btn-right");
rightClickBtn.addEventListener("click", right());

// Right Button Function
function right() {
    x++;

    if (x >= 0) {
        positive();
    } else {
        negative();
    }
};

// Left Button Function
function left() {
    x--;

    if (x >= 0) {
        positive();
    } else {
        negative();
    }
}

// Adding Number
function positive() {

    if (x >= imagePath.length) {
        x = x % imagePath.length;
    };

    document.getElementById('image-path').src = imagePath[x];
    console.log(imagePath[x]);
};

// Decreasing Number
function negative() {

    if (x < -imagePath.length) {
        x = x % imagePath.length;
    };

    document.getElementById('image-path').src = imagePath[x];
    console.log(imagePath[imagePath.length + x]);
}