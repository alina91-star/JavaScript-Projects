// This function displays a value from a JavaScript object (dictionary)
function displayDictionary() {
    // Create a dictionary (JavaScript object) with key-value pairs
    var car = {
        Make: "Tesla",
        Model: "Model 3",
        Year: 2025,
        Color: "Red",
        Fuel: "Electric"
    };

    // Display one of the dictionary values (Color)
    document.getElementById("Dictionary").innerHTML = "Car color: " + car.Color;
}
