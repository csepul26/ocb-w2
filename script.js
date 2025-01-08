// scripts.js

function startMathGame() {
    alert("Welcome to the Math Quiz!");
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let answer = prompt(`What is ${num1} + ${num2}?`);
    if (parseInt(answer) === num1 + num2) {
        alert("Correct! Well done.");
    } else {
        alert(`Oops! The correct answer was ${num1 + num2}.`);
    }
}

function startWordGame() {
    alert("Welcome to the Word Puzzle Game!");
    let word = "JAVASCRIPT";
    let scrambled = word.split("").sort(() => Math.random() - 0.5).join("");
    let guess = prompt(`Unscramble this word: ${scrambled}`);
    if (guess.toUpperCase() === word) {
        alert("Correct! You're awesome.");
    } else {
        alert(`Try again! The word was ${word}.`);
    }
}
