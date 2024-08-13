# AP's XO Game

AP's XO Game is a simple Tic-Tac-Toe game developed using Node.js for the backend and React for the frontend.

## Requirements

- Node.js
- React

## Installation
### Backend
1. Navigate to the backend directory:
    cd backend
2. Install dependencies:
    npm install
3. Start the server:
    node server.js

### Frontend
1. Navigate to the frontend directory:
    cd frontend
2. Install dependencies:
    npm install
3. Start the React app: 
    npm start
    
## Overall Flow
- The game starts with an empty 3x3 grid.
- Players alternate turns, starting with player X.
- The game announces a winner when three of the same symbols are aligned horizontally, vertically, or diagonally.
- The game announces a draw if all spaces are filled without a winner.
- The game provides a reset button to start a new game.

## Dependencies
### Backend
- express: A minimal and flexible Node.js web application framework.
- cors: A package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Frontend
- react: A JavaScript library for building user interfaces.
- axios: A promise-based HTTP client for the browser and Node.js.
