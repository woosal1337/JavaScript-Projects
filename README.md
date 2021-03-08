# 😎 Self-taught JavaScript Notes

Formatting String -> fstring
```
const myName = 'Vusal';
`My name is ${myName}!`;


Output:
My Name is Vusal!
```

Hex Color Generator
```
var randomColor = Math.floor(Math.random()*16777215).toString(16);  
const colorHex = "#" + randomColor;
console.log(colorHex);

Output:
(Random Hex Color Value)
```

Change The HTML Text Value
```
document.getElementById("hex-color-text").textContent = "Hello, World!s";

Output:
Changes 'hex-color-text' value in HTML file to "Hello, World!"
```

Custom Range Number Generator
```
const customRange = 10;
console.log(Math.round(Math.random(1) * customRange));

Output:
An integer output of the given range -> (customRange)
```

Prevent `form` to refresh the page
```
function onSubmit() {  
  
    const form = document.getElementById("message-form")  
  
    form.addEventListener("submit", function (e) {  
        e.preventDefault();  
  
		 const message = document.getElementById("message").value;  
		 const messageBox = document.getElementById("message-box")  

		 messageBox.textContent = message;  
  
 	})  
}

Output:
JavaScript function listens to the form submit without letting the page to refresh and reset all the values.
```

Change `HTML` embedded text color
```
const counter = document.getElementById("counter");
counter.style.color \= "red";

Output:
ID "counter" text is now red colored.
```

JavaScript Slider Function
```
// Right Click Button Redirect
function right() {

	x++;

  	if (x >= 0) {

		positive();

	} else {

		negative();
	}
};

  

// Left Click Button Redirect

function left() {

	x--;

	if (x >= 0) {

		positive();

	} else {

		negative();
	}
};

  

// Adding Number

function positive() {

	if (x >= imagePath.length) {

		x = x % imagePath.length;

	};

	console.log(imagePath[x]);

};

  

// Decreasing Number

function negative() {

  	if (x < \-imagePath.length) {

		x \= x % imagePath.length;

	};

	console.log(imagePath[imagePath.length + x]);

}
```
