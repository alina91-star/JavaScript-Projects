// Setăm jucătorul activ și array-ul pentru mișcări
let activePlayer = 'X';
let selectedSquares = [];

// Funcție care plasează X sau O într-un pătrat
function placeXorO(squareNumber) {
    let select = document.getElementById(squareNumber);

    // Dacă pătratul nu e ocupat deja
    if (!select.textContent) {
        select.textContent = activePlayer; // adaugă X sau O
        selectedSquares.push(squareNumber + activePlayer); // salvează mișcarea

        // verifică dacă cineva a câștigat
        checkWinConditions();

        // schimbă jucătorul activ
        activePlayer = (activePlayer === 'X') ? 'O' : 'X';
    }
}

// Funcție care verifică toate combinațiile de câștig
function checkWinConditions() {
    const winCombos = [
        ['0X', '1X', '2X'], ['3X', '4X', '5X'], ['6X', '7X', '8X'],
        ['0O', '1O', '2O'], ['3O', '4O', '5O'], ['6O', '7O', '8O'],
        ['0X', '3X', '6X'], ['1X', '4X', '7X'], ['2X', '5X', '8X'],
        ['0O', '3O', '6O'], ['1O', '4O', '7O'], ['2O', '5O', '8O'],
        ['0X', '4X', '8X'], ['2X', '4X', '6X'],
        ['0O', '4O', '8O'], ['2O', '4O', '6O']
    ];

    // verifică fiecare combinație posibilă
    for (let combo of winCombos) {
        if (combo.every(item => selectedSquares.includes(item))) {
            drawWinLine(combo);
            return;
        }
    }

    // dacă toate pătratele sunt completate fără câștigător → egalitate
    if (selectedSquares.length >= 9) {
        setTimeout(() => alert("It's a tie! 🤝"), 300);
    }
}

// Funcție care desenează linia de câștig pe canvas
function drawWinLine(combo) {
    const canvas = document.getElementById("win-lines");
    const ctx = canvas.getContext("2d");

    // coordonate pentru fiecare pătrat (ajustate pentru canvas 608x608)
    const positions = {
        '0': [100, 100], '1': [304, 100], '2': [508, 100],
        '3': [100, 304], '4': [304, 304], '5': [508, 304],
        '6': [100, 508], '7': [304, 508], '8': [508, 508]
    };

    // prima și ultima poziție din combinație
    const start = positions[combo[0][0]];
    const end = positions[combo[2][0]];

    // desenare linie roșie între start și end
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.stroke();

    // mesaj de câștig
    setTimeout(() => alert(`${activePlayer} wins! 🎉`), 300);
}

// Poți adăuga opțional o funcție de resetare (buton ulterior)
function resetGame() {
    const squares = document.querySelectorAll('td');
    squares.forEach(cell => cell.textContent = '');
    selectedSquares = [];
    const canvas = document.getElementById("win-lines");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    activePlayer = 'X';
}
