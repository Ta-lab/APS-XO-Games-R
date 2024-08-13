## User Story 
### AP's XO Game

1. Title: AP's XO Game User Story

2. As a player,I want to:
- Start a new game
So that I can begin a fresh round of XO (Tic-Tac-Toe) without any prior game data.

- Take turns with another player to place Xs and Os on a 3x3 grid
So that both players have the opportunity to play and the game progresses turn by turn.

- See whose turn it is to play
So that I know when it’s my turn and when to make a move.

- Check for a winner after each move
So that I can immediately see if there’s a winner or if the game is still ongoing.

- See the game end with a win or a draw
So that I am informed of the game’s outcome, whether it’s a win for one player or a draw if the grid is full.

- Reset the game to start over
So that I can quickly start a new game without having to refresh the page.

3. Acceptance Criteria:
- The game starts with an empty 3x3 grid.
- Players alternate turns, starting with Player X.
- The game announces a winner when three of the same symbols are aligned horizontally, vertically, or diagonally.
- The game announces a draw if all spaces are filled without a winner.
- The game provides a reset button to start a new game.

4. Dependencies:
- Node.js: For backend management of game state and logic.
- React: For building the interactive frontend interface.

5. Technical Details:
- Frontend: Utilize React to create the game interface, handle user interactions, and display game status.
- Backend: Use Node.js to manage game logic, validate moves, and determine game outcomes.
- Persistence: Ensure that game state is maintained during the session for accurate gameplay and status updates.