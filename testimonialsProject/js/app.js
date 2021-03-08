// Declaring a counter to loop throug the customers in a list
var counter = 0;

// Customer Data -> [imagePath, name, customerQuote] format
const customers = [
    [
        "customers/customer-0.jpg",
        "Berkay",
        "ET CETERA"
    ],

    [
        "customers/customer-1.jpg",
        "Busra",
        "I AM NOT FEMINIST AT ALL"
    ],

    [
        "customers/customer-2.jpg",
        "Vusal",
        "THE MYTH THE LEGEND THE BEAST THE LEGEND"
    ],

    [
        "customers/customer-3.jpg",
        "Buse",
        "Who am I?"
    ],

    [
        "customers/customer-4.jpg",
        "Muge",
        "Vusal is a legit handsome legend!"
    ],
];


// Customer text ID: "customer-text"
const customerQuote = document.getElementById("customer-text");

// Customer Name ID: "customer-name"
const customerName = document.getElementById("customer-name");

// Customer Profile Image ID: "customer-img"
const customerProfile = document.getElementById("customer-img");

// Left Button
const leftClickButton = document.getElementById("left-move");
leftClickButton.addEventListener("click", left());


// Right Button
const rightClickButton = document.getElementById("right-move");
rightClickButton.addEventListener("click", right());

// Right Button Function
function right() {
    counter++;

    if (counter >= 0) {
        positive();
    } else {
        negative();
    }
};

// Left Button Function
function left() {
    counter--;

    if (counter >= 0) {
        positive();
    } else {
        negative();
    }
}

// Adding Number
function positive() {

    if (counter >= customers.length) {
        counter = counter % customers.length;
    };

    const customer_image = customers[counter][0];
    const customer_name = customers[counter][1];
    const customer_feedback = customers[counter][2];

        // Change Customer Profile Picture
        customerProfile.src = customer_image;

        // Change Customer Quote/Feedback
        customerQuote.textContent = customer_feedback;
    
        // Change Customer Name
        customerName.textContent = customer_name;

    console.log(customer_image,
        customer_name,
        customer_feedback);
};

// Decreasing Number
function negative() {

    if (counter < -customers.length) {
        counter = counter % customers.length;
    };

    const customer_image = customers[customers.length + counter][0];
    const customer_name = customers[customers.length + counter][1];
    const customer_feedback = customers[customers.length + counter][2];
    
    // Change Customer Profile Picture
    customerProfile.src = customer_image;

    // Change Customer Quote/Feedback
    customerQuote.textContent = customer_feedback;
    
    // Change Customer Name
    customerName.textContent = customer_name;
    
    

    console.log(customer_image,
        customer_name,
        customer_feedback);
}
