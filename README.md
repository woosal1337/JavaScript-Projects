# 🎓 Self-taught JavaScript Notes

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

```
