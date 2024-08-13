## AP's XO Game
Title: AP's XO Game

As a player, I want to:
Start a New Game
Description: I want to start a fresh game of XO (Tic-Tac-Toe) so that I can begin playing from scratch.
Acceptance Criteria:
- The game should initialize with a blank 3x3 grid.
- A "Start Game" button should be available to begin a new game.
- Take Turns with Another Player

Description: I want to play against another player, taking turns to place Xs and Os on the grid.
Acceptance Criteria:
- The game should alternate turns between Player X and Player O.
- Each player should be able to place their symbol (X or O) on an empty cell.
- The current player's turn should be clearly indicated.See Whose Turn It Is

Description: I want to know whose turn it is to play so that I can make the next move.
Acceptance Criteria:
- The UI should display a message or indicator showing whether it is Player X's or Player O's turn.
- Check for a Winner After Each Move

Description: I want the game to automatically check if there's a winner after every move.
Acceptance Criteria:
- The game should check for a winning condition (three of the same symbol in a row) after each move.
- If a player wins, the game should announce the winner.
- See the Game End with a Win or a Draw

Description: I want to be informed when the game ends, either with a win for one player or a draw if the grid is full.
Acceptance Criteria:
- The game should display a message announcing the winner if three symbols are aligned.
- The game should display a message indicating a draw if all cells are filled and no winner is declared.
- Reset the Game to Start Over

Description: I want to be able to reset the game to start a new round without refreshing the page.
Acceptance Criteria:
- A "Reset Game" button should be available.
- Clicking the button should clear the grid and reset the game state to allow for a new game.

### Dependencies:
- Node.js
- React

### Technical Details:
Frontend: Built with React to create the interactive grid and game controls.
Backend: Managed with Node.js to handle game logic, including checking for winners and handling game state.
Persistence: Maintain the game state during a session to ensure the current state is displayed correctly to the players.
