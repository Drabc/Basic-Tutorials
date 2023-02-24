# Tic Tac Toe

## Entities

- Player
  - name
  - id
- Board
  - 3x3 matrix
  - mark
  - Rules
    - How to win
      - three in a row, column or diagonal
    - Players take turn
    - How to mark
      - Previous player cannot mark again
      - Cannot mark an occupied spot
    - How the game ends
      - If someone wins
      - Game is locked
  - Visualize
- Game Manager
  - Have a way to receive input
    - Welcome message
    - First create players. Give player names
  - Start game
    - Pick a random player to start
    - Ask for move
      - Display Board
  - If winner end game and declare winner
