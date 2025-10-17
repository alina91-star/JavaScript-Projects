let activePlayer = 'X';
let gameOver = false;

// Place X or O on the board
function placeXorO(cellId) {
    let cell = document.getElementById(cellId);
    if (!cell.innerHTML && !gameOver) {
        // Add the correct image for the active player
        if (activePlayer === 'X') {
            cell.innerHTML = `<img src="images/X.png" alt="X">`;
            playSound('Place.mp3');
        } else {
            cell.innerHTML = `<img src="images/O.png" alt="O">`;
            playSound('Place.mp3');
        }

        // Check if someone won
        checkWinner();

        // Switch player if game not over
        if (!gameOver) {
            activePlayer = activePlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Play sound files from the media folder
function playSound(filename) {
    let audio = new Audio(`media/${filename}`);
    audio.volume = 1.0;
    audio.play().catch(error => {
        console.warn("Audio playback blocked or file missing:", error);
    });
}

// Check if there is a winner or tie
function checkWinner() {
    const combos = [
        ['A1', 'A2', 'A3'],
        ['B1', 'B2', 'B3'],
        ['C1', 'C2', 'C3'],
        ['A1', 'B1', 'C1'],
        ['A2', 'B2', 'C2'],
        ['A3', 'B3', 'C3'],
        ['A1', 'B2', 'C3'],
        ['A3', 'B2', 'C1']
    ];

    for (let combo of combos) {
        const [a, b, c] = combo.map(id => document.getElementById(id).innerHTML);
        if (a && a === b && a === c) {
            gameOver = true;
            setTimeout(() => {
                playSound('Win.mp3'); // plays after slight delay
                alert(`🎉 Player ${activePlayer} wins!`);
            }, 150);
            return;
        }
    }

    // Check for tie
    const allFilled = [...document.getElementsByTagName('td')].every(td => td.innerHTML !== '');
    if (allFilled && !gameOver) {
        gameOver = true;
        setTimeout(() => {
            playSound('Tie.mp3');
            alert("🤝 It's a tie!");
        }, 150);
    }
}

// Reset the game
function resetGame() {
    const cells = document.getElementsByTagName('td');
    for (let cell of cells) {
        cell.innerHTML = '';
    }
    activePlayer = 'X';
    gameOver = false;
}
