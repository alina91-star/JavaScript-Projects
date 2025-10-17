let activePlayer = 'X'; // Start with player X
let gameOver = false;

// Function to place X or O on the board
function placeXorO(cellId) {
    let cell = document.getElementById(cellId);
    if (!cell.innerHTML && !gameOver) {
        cell.innerHTML = activePlayer;
        checkWinner();
        activePlayer = activePlayer === 'X' ? 'O' : 'X'; // Switch player
    }
}

// Function to check if someone won
function checkWinner() {
    const winningCombos = [
        ['A1', 'A2', 'A3'],
        ['B1', 'B2', 'B3'],
        ['C1', 'C2', 'C3'],
        ['A1', 'B1', 'C1'],
        ['A2', 'B2', 'C2'],
        ['A3', 'B3', 'C3'],
        ['A1', 'B2', 'C3'],
        ['A3', 'B2', 'C1']
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo.map(id => document.getElementById(id).innerHTML);
        if (a && a === b && a === c) {
            alert(`Player ${a} wins!`);
            gameOver = true;
            return;
        }
    }
}

// Reset function
function resetGame() {
    const cells = document.getElementsByTagName('td');
    for (let cell of cells) {
        cell.innerHTML = '';
    }
    activePlayer = 'X';
    gameOver = false;
}
