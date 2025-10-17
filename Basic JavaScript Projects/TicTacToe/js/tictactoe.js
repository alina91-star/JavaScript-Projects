let activePlayer = 'X';
let selectedSquares = [];

function placeXorO(squareNumber) {
    const select = document.getElementById(squareNumber);

    if (!select.textContent) {
        select.textContent = activePlayer;
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        activePlayer = (activePlayer === 'X') ? 'O' : 'X';
    }
}

function checkWinConditions() {
    const winCombos = [
        ['0X', '1X', '2X'], ['3X', '4X', '5X'], ['6X', '7X', '8X'],
        ['0O', '1O', '2O'], ['3O', '4O', '5O'], ['6O', '7O', '8O'],
        ['0X', '3X', '6X'], ['1X', '4X', '7X'], ['2X', '5X', '8X'],
        ['0O', '3O', '6O'], ['1O', '4O', '7O'], ['2O', '5O', '8O'],
        ['0X', '4X', '8X'], ['2X', '4X', '6X'],
        ['0O', '4O', '8O'], ['2O', '4O', '6O']
    ];

    for (let combo of winCombos) {
        if (combo.every(item => selectedSquares.includes(item))) {
            drawWinLine(combo);
            return;
        }
    }

    if (selectedSquares.length >= 9) {
        setTimeout(() => alert("It's a tie! 🤝"), 300);
    }
}

function drawWinLine(combo) {
    const canvas = document.getElementById("win-lines");
    const ctx = canvas.getContext("2d");

    const positions = {
        '0': [100, 100], '1': [304, 100], '2': [508, 100],
        '3': [100, 304], '4': [304, 304], '5': [508, 304],
        '6': [100, 508], '7': [304, 508], '8': [508, 508]
    };

    const start = positions[combo[0][0]];
    const end = positions[combo[2][0]];

    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.stroke();

    setTimeout(() => alert(`${activePlayer} wins! 🎉`), 300);
}

function resetGame() {
    const squares = document.querySelectorAll('td');
    squares.forEach(cell => cell.textContent = '');
    selectedSquares = [];
    const canvas = document.getElementById("win-lines");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    activePlayer = 'X';
}
