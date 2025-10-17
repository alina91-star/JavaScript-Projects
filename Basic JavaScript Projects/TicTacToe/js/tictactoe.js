let activePlayer = 'X';
let gameOver = false;

// Place X or O on the board
function placeXorO(cellId) {
    let cell = document.getElementById(cellId);
    if (!cell.innerHTML && !gameOver) {
        // Add the image for the current player
        if (activePlayer === 'X') {
            cell.innerHTML = `<img src="images/X.png" alt="X">`;
        } else {
            cell.innerHTML = `<img src="images/O.png" alt="O">`;
        }

        playSound('Place.mp3'); // play placement sound

        checkWinner();

        if (!gameOver) {
            activePlayer = activePlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Play audio safely
function playSound(filename) {
    const audio = new Audio(`media/${filename}`);
    audio.volume = 1.0;
    // Catch playback errors silently (browser restrictions)
    audio.play().catch(() => {});
}

// Check if there is a winner or a tie
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

            // Highlight winning cells
            combo.forEach(id => {
                document.getElementById(id).style.backgroundColor = "#aaffaa";
            });

            // Wait until alert closes, then play Win sound
            setTimeout(() => {
                alert(`🎉 Player ${activePlayer} wins!`);
                // Delay ensures Chrome allows playback
                setTimeout(() => {
                    const winAudio = new Audio("media/Win.mp3");
                    winAudio.play().catch(() => {});
                }, 150);
            }, 200);

            return;
        }
    }

    // Check for tie
    const allFilled = [...document.getElementsByTagName('td')].every(td => td.innerHTML !== '');
    if (allFilled && !gameOver) {
        gameOver = true;
        setTimeout(() => {
            alert("🤝 It's a tie!");
            setTimeout(() => {
                const tieAudio = new Audio("media/Tie.mp3");
                tieAudio.play().catch(() => {});
            }, 150);
        }, 200);
    }
}

// Reset the game
function resetGame() {
    const cells = document.getElementsByTagName('td');
    for (let cell of cells) {
        cell.innerHTML = '';
        cell.style.backgroundColor = 'white';
    }
    activePlayer = 'X';
    gameOver = false;
}
