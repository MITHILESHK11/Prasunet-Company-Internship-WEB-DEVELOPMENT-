let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let scoreX = 0;
let scoreO = 0;

const cells = document.querySelectorAll('.cell');
const scoreXDisplay = document.getElementById('scoreX');
const scoreODisplay = document.getElementById('scoreO');

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
    const cellIndex = Array.from(cells).indexOf(event.target);
    if (board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWin()) {
            updateScore();
            resetBoard();
        } else if (checkDraw()) {
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    return winConditions.some(combination => {
        return combination.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function updateScore() {
    if (currentPlayer === 'X') {
        scoreX++;
        scoreXDisplay.textContent = scoreX;
    } else {
        scoreO++;
        scoreODisplay.textContent = scoreO;
    }
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
    });
}
