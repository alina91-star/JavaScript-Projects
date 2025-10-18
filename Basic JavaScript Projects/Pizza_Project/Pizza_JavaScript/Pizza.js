/* =========================================================
   AMB Pizza House - JavaScript Logic
   With English comments
   ========================================================= */

/**
 * getReceipt()
 * Collects all selections, calculates total, and displays summary.
 * All prices are in Pounds (£)
 */
function getReceipt() {
  let text = "<h3>Your Pizza Order:</h3>";
  let runningTotal = 0;

  // SIZE
  let sizeArray = document.getElementsByClassName("size");
  let selectedSize = "";
  let sizePrice = 0;
  for (let i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) selectedSize = sizeArray[i].value;
  }
  switch (selectedSize) {
    case "Personal Pizza": sizePrice = 6; break;
    case "Medium Pizza": sizePrice = 10; break;
    case "Large Pizza": sizePrice = 14; break;
    case "Extra Large Pizza": sizePrice = 16; break;
  }
  text += `<strong>Size:</strong> ${selectedSize} (£${sizePrice})<br>`;
  runningTotal += sizePrice;

  // CRUST
  let crustArray = document.getElementsByName("Crust");
  let selectedCrust = "";
  let crustPrice = 0;
  for (let i = 0; i < crustArray.length; i++) {
    if (crustArray[i].checked) selectedCrust = crustArray[i].value;
  }
  if (selectedCrust.includes("Protein")) crustPrice = 2;
  if (selectedCrust.includes("Cheesy")) crustPrice = 3;
  text += `<strong>Crust:</strong> ${selectedCrust} (£${crustPrice})<br>`;
  runningTotal += crustPrice;

  // CHEESE
  let cheeseArray = document.getElementsByName("Cheese");
  let selectedCheese = "";
  let cheesePrice = 0;
  for (let i = 0; i < cheeseArray.length; i++) {
    if (cheeseArray[i].checked) selectedCheese = cheeseArray[i].value;
  }
  if (selectedCheese.includes("Extra")) cheesePrice = 2;
  text += `<strong>Cheese:</strong> ${selectedCheese} (£${cheesePrice})<br>`;
  runningTotal += cheesePrice;

  // VEGGIES
  let veggiesArray = document.getElementsByName("Veggies");
  let selectedVeggies = [];
  for (let i = 0; i < veggiesArray.length; i++) {
    if (veggiesArray[i].checked) selectedVeggies.push(veggiesArray[i].value);
  }
  let veggiesPrice = selectedVeggies.length > 1 ? selectedVeggies.length - 1 : 0;
  text += `<strong>Veggies:</strong> ${selectedVeggies.join(", ") || "None"} (£${veggiesPrice})<br>`;
  runningTotal += veggiesPrice;

  // PROTEIN
  let proteinArray = document.getElementsByName("Protein");
  let selectedProtein = [];
  for (let i = 0; i < proteinArray.length; i++) {
    if (proteinArray[i].checked) selectedProtein.push(proteinArray[i].value);
  }
  let proteinPrice = selectedProtein.length > 1 ? selectedProtein.length - 1 : 0;
  text += `<strong>Protein:</strong> ${selectedProtein.join(", ") || "None"} (£${proteinPrice})<br>`;
  runningTotal += proteinPrice;

  // FINAL TOTAL
  text += `<br><strong>Total Price: £${runningTotal.toFixed(2)}</strong>`;

  // Display order summary
  document.getElementById("showText").innerHTML = text;
  document.getElementById("totalPrice").innerHTML = "";
}
