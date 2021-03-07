var x = 0;

const imagePath = [
    "../img/contBcg-0.jpeg",
    "../img/contBcg-1.jpeg",
    "../img/contBcg-2.jpeg",
    "../img/contBcg-3.jpeg",
    "../img/contBcg-4.jpeg"
];

function right() {
    x++;

    if (x >= 0) {
        positive();
    } else {
        negative();
    }
};

function left() {
    x--;

    if (x >= 0) {
        positive();
    } else {
        negative();
    }
}

function positive() {

    if (x >= imagePath.length) {
        x = x % imagePath.length;
    };

    console.log(imagePath[x]);
};


function negative() {

    if (x < -imagePath.length) {
        x = x % imagePath.length;
    };

    console.log(imagePath[imagePath.length + x]);

}