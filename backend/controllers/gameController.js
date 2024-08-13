let gameState = {
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    draw: false
};

const checkWinner = (board) => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return board.every(cell => cell) ? 'Draw' : null;
};

exports.startGame = (req, res) => {
    gameState.board = Array(9).fill(null);
    gameState.currentPlayer = 'X';
    gameState.winner = null;
    gameState.draw = false;
    res.json(gameState);
};

exports.makeMove = (req, res) => {
    const { index } = req.body;
    if (!gameState.board[index] && !gameState.winner) {
        gameState.board[index] = gameState.currentPlayer;
        gameState.winner = checkWinner(gameState.board);
        gameState.draw = gameState.winner === 'Draw';
        gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
    }
    res.json(gameState);
};

exports.resetGame = (req, res) => {
    gameState.board = Array(9).fill(null);
    gameState.currentPlayer = 'X';
    gameState.winner = null;
    gameState.draw = false;
    res.json(gameState);
};

exports.getGameName = (req, res) => {
    res.json({ gameName: "AP's XO Game" });
};