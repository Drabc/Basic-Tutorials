const Player = require('./player')
const Board = require('./board')


const p1 = new Player('player1')
const p2 = new Player('player2')
const players = [p1, p2]

const board = new Board(players)

// Horizontal Win
board.mark(p1, 0, 0)
board.mark(p2, 0, 1)
board.mark(p1, 1, 0)
board.mark(p2, 1, 1)
board.mark(p1, 2, 0)
board.mark(p2, 2, 1)

// // vertical win
// board.mark(p1, 0, 0)
// board.mark(p2, 1, 0)
// board.mark(p1, 0, 1)
// board.mark(p2, 1, 1)
// board.mark(p1, 0, 2)
// board.mark(p2, 1, 2)

// // Diagnal down
// board.mark(p2, 0, 0)
// board.mark(p1, 1, 0)
// board.mark(p2, 1, 1)
// board.mark(p1, 2, 1)
// board.mark(p2, 2, 2)
// board.mark(p1, 1, 2)

// // Diagnal down
// board.mark(p2, 0, 2)
// board.mark(p1, 1, 0)
// board.mark(p2, 1, 1)
// board.mark(p1, 0, 1)
// board.mark(p2, 2, 0)
// board.mark(p1, 1, 2)


board.display()
