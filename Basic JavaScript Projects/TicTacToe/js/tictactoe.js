let activePlayer = 'X';
let selectedSquares = [];
let gameOver = false;

function placeXOrO(squareNumber) {
  if (gameOver) return;
  let select = document.getElementById(squareNumber);

  if (!select.style.backgroundImage) {
    select.style.backgroundImage = `url('images/${activePlayer.toLowerCase()}.png')`;
    selectedSquares.push(squareNumber + activePlayer);
    audio('media/place.mp3');
    checkWinConditions();

    if (!gameOver) {
      activePlayer = activePlayer === 'X' ? 'O' : 'X';
      if (activePlayer === 'O') setTimeout(computersTurn, 600);
    }
  }
}

function computersTurn() {
  disableClick();
  let success = false;
  while (!success && !gameOver) {
    let pickASquare = String(Math.floor(Math.random() * 9));
    let select = document.getElementById(pickASquare);
    if (!select.style.backgroundImage) {
      select.style.backgroundImage = "url('images/o.png')";
      selectedSquares.push(pickASquare + 'O');
      audio('media/place.mp3');
      checkWinConditions();
      activePlayer = 'X';
      success = true;
    }
  }
  enableClick();
}

function checkWinConditions() {
  const combos = [
    ['0','1','2'], ['3','4','5'], ['6','7','8'],
    ['0','3','6'], ['1','4','7'], ['2','5','8'],
    ['0','4','8'], ['2','4','6']
  ];

  for (let combo of combos) {
    const [a, b, c] = combo;
    if (selectedSquares.includes(a+'X') && selectedSquares.includes(b+'X') && selectedSquares.includes(c+'X')) {
      drawWinLine(a,b,c);
      audio('media/win.mp3');
      gameOver = true;
      return;
    }
    if (selectedSquares.includes(a+'O') && selectedSquares.includes(b+'O') && selectedSquares.includes(c+'O')) {
      drawWinLine(a,b,c);
      audio('media/win.mp3');
      gameOver = true;
      return;
    }
  }

  if (selectedSquares.length >= 9 && !gameOver) {
    audio('media/tie.mp3');
    gameOver = true;
  }
}

const coords = {
  '0': [100, 100], '1': [304, 100], '2': [508, 100],
  '3': [100, 304], '4': [304, 304], '5': [508, 304],
  '6': [100, 508], '7': [304, 508], '8': [508, 508]
};

// versiune sigură: linia se desenează clar peste canvas
function drawWinLine(a, b, c) {
  const [x1, y1] = coords[a];
  const [x2, y2] = coords[c];
  const canvas = document.getElementById('win-lines');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'red';
  ctx.shadowBlur = 15;
  ctx.shadowColor = 'red';
  ctx.stroke();
  ctx.closePath();
}

function disableClick() {
  document.body.style.pointerEvents = 'none';
}

function enableClick() {
  document.body.style.pointerEvents = 'auto';
}

function audio(file) {
  let sound = new Audio(file);
  sound.play();
}

function resetGame() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(String(i)).style.backgroundImage = '';
  }
  selectedSquares = [];
  activePlayer = 'X';
  gameOver = false;
  const canvas = document.getElementById('win-lines');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
