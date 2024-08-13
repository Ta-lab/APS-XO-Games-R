const express = require('express');
const { startGame, makeMove, resetGame, getGameName } = require('../controllers/gameController');
const router = express.Router();

router.get('/start', startGame);
router.post('/move', makeMove);
router.post('/reset', resetGame);
router.get('/name', getGameName);

module.exports = router;
