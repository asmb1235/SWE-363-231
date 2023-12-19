let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let message = document.getElementById('message');
let gameActive = true;
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = () => {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      gameActive = false;
      message.innerText = `${currentPlayer} wins!`;
      return;
    }
  }
  if (!gameBoard.includes('')) {
    gameActive = false;
    message.innerText = `It's a draw!`;
  }
};

const handleClick = (cell) => {
  const index = parseInt(cell.id);
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    cell.innerText = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
};

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    handleClick(cell);
  });
});
