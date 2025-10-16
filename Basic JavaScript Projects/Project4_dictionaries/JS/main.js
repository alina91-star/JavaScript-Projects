function animal_Dictionary() {
    // Create a dictionary (object) with key-value pairs
    var animal = {
        Species: "Dog",
        Breed: "Golden Retriever",
        Color: "Golden",
        Age: 5,
        Sound: "Woof"
    };

    // Delete one key-value pair before displaying
    delete animal.Sound; // This removes the Sound key from the dictionary before it is displayed

    // Try to display the deleted key (it will be undefined)
    document.getElementById("Dictionary").innerHTML = animal.Sound;

    // Comment:
    // Since 'Sound' was deleted, the output will show 'undefined'.
}
