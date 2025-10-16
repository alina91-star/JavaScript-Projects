// A function that uses the += operator
function myFunction() {
    // Create a variable with an initial value
    var sentence = "Hello";
    
    // Use the += operator to add to the variable
    sentence += ", World!";
    
    // Display the final sentence in the paragraph element with id 'Concatenate'
    document.getElementById("Concatenate").innerHTML = sentence;
}
