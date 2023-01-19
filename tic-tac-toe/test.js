const Player = require('./player')
const p1 = new Player('player1')
const p2 = new Player('player2')

const players = [p1, p2]

console.log(players.find((p) => p.id == 2))
