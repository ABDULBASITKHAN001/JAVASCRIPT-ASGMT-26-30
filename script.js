console.log("HELLO-WORLD");
console.log("");
console.log("1");
// QUESTION NUMBER 01 : JavaScript program to take a positive decimal number from the user and display its properties (number, rounded value, floor value, and ceiling value)
console.log("A Program That Takes a Positive Integer from User")
// Prompt user for input
var userInput = prompt("Enter a positive number:");

// Convert the input to a number
var number = parseFloat(userInput);

if (number > 0) {
    // Display the number
    console.log("Number: " + number);
    
    // Round off value
    var roundedValue = Math.round(number);
    console.log("Round off value: " + roundedValue);
    
    // Floor value
    var floorValue = Math.floor(number);
    console.log("Floor value: " + floorValue);
    
    // Ceil value
    var ceilValue = Math.ceil(number);
    console.log("Ceil value: " + ceilValue);
} else {
    console.log("Please enter a valid positive number.");
}


console.log("");
console.log("2");
// QUESTION NUMBER 02 : GENERATING RANDOM NUMBER ///////////////////////////////////////////////////////////////
console.log("GENERATING RANDOM NUMBERS 'BETWEEEN 1 TO 100' :");
function rollDice() {
    // Generate a random number between 1 and 100
    var diceValue = Math.floor(Math.random() * 100) + 1;
    return diceValue;
}

console.log("Random dice value: " + rollDice());
console.log("Random dice value: " + rollDice());


console.log("");
console.log("3");
// QUESTION NUMBER 03 : GENERATING RANDOM TOSS: ///////////////////////////////////////////////////////////////////////////
console.log("GENERATING RANDOM TOSS COIN 'HEADS/TAILS' :");

function tossCoin() {
    var randomValue = Math.random();

    var result = randomValue < 0.5 ? "Heads" : "Tails";
    return result;
}

console.log("Random coin value: " + tossCoin());
console.log("Random coin value: " + tossCoin());


console.log("");
console.log("4");
// QUESTION NUMBER 04 : THE WEIGHT OF USER: ///////////////////////////////////////////////////////////////////////////
console.log("CALCULATING THE WEIGHT OF USER:");
// Prompt user to enter their weight
var userInput = prompt("Enter your weight in kilograms:");

// Extract numeric weight from the user input
var weight = parseFloat(userInput);

// Check if the parsed weight is a valid number
if (!isNaN(weight)) {
    console.log("The weight of the user is " + weight + " kilograms.");
} else {
    console.log("Invalid input. Please enter your weight in a valid format (e.g.  50kgs, 50.2kgs, or 50.2kilograms).");

}


console.log("");
console.log("5");
// QUESTION NUMBER 05 : GENERATING NUMBER GUESSING GAME : ///////////////////////////////////////////////////////////////////////////////
console.log("GENERATING NUMBER GUESSING GAME: ");
// Function to generate a random secret number between 1 and 10
function generateSecretNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

var secretNumber = generateSecretNumber();

var userInput = prompt("Guess the secret number (between 1 and 10):");
var userGuess = Number(userInput);

if (userGuess >= 1 && userGuess <= 10 && !isNaN(userGuess)) {
  
    if (userGuess === secretNumber) {
        console.log("Congratulations! You guessed the correct number: " + secretNumber);
    } else {
        console.log("Sorry, the correct number was " + secretNumber + ". Try again!");
    }
} else {
    console.log("Invalid input. Please enter a number between 1 and 10.");
}
