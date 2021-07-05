const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// The button listener, we need this. :)
btn.addEventListener('click', function(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// Multiply the random number by the length of the "hex" which is 16.
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}