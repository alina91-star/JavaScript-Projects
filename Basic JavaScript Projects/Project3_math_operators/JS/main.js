// Function for addition (+)
function addition() {
    var result = 10 + 5; // Adds 10 and 5
    document.getElementById("Addition").innerHTML = "10 + 5 = " + result;
}

// Function for subtraction (-)
function subtraction() {
    var result = 10 - 3; // Subtracts 3 from 10
    document.getElementById("Subtraction").innerHTML = "10 - 3 = " + result;
}

// Function for multiplication (*)
function multiplication() {
    var result = 4 * 6; // Multiplies 4 by 6
    document.getElementById("Multiplication").innerHTML = "4 × 6 = " + result;
}

// Function for division (/)
function division() {
    var result = 20 / 4; // Divides 20 by 4
    document.getElementById("Division").innerHTML = "20 ÷ 4 = " + result;
}

// Function for modulus (%) — remainder of a division
function modulus() {
    var result = 19 % 4; // Finds the remainder of 19 ÷ 4
    document.getElementById("Modulus").innerHTML = "The remainder of 19 ÷ 4 is " + result;
}

// Function for increment (++)
function increment() {
    var number = 7; // Start with 7
    number++; // Increments by 1
    document.getElementById("Increment").innerHTML = "7 incremented is " + number;
}

// Function for decrement (--)
function decrement() {
    var number = 10; // Start with 10
    number--; // Decrements by 1
    document.getElementById("Decrement").innerHTML = "10 decremented is " + number;
}

// Function that uses Math.random() to generate a random number
function randomNumber() {
    var randomValue = Math.random() * 100; // Random number between 0 and 100
    document.getElementById("Random").innerHTML = "Random number (0-100): " + randomValue.toFixed(2);
}
