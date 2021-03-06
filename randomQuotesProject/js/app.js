//Choose a random color

const quotes = [
    [
        "Just because something is traditional is no reason to do it, of course.",
        "Lemony Snicket"
    ],

    [
        "What if custom is wrong? demanded the part of her that believed in the code of chivalry. A knight must set things right.",
        "Tamora Pierce"
    ],

    [
        "The believer is not a slave to fashion.",
        "Abu Ameenah Bilal Philips"
    ],

    [
        "Nice customs curtsy to great kings.",
        "William Shakespeare"
    ],

    [
        "The customs and practices of life in society sweep us along.",
        "Michel de Montaigne"
    ]

];


const generateButton = document.getElementById("generate-btn");
const body = document.querySelector('body');

generateButton.addEventListener('click', changeQuote);

function changeQuote() {
    const customQuoteNumber = Math.round(Math.random(1) * quotes.length);

    // Get Quote:
    const theQuote = quotes[customQuoteNumber][0];

    // Get Quote Author:
    const quoteAuthor = quotes[customQuoteNumber][1];

    // Replace According Values:
    document.getElementById("quote").textContent = theQuote;
    document.getElementById("author").textContent = quoteAuthor;
}
