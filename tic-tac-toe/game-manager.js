const Player = require('./player')
const Board = require('./board')
const readline = require('readline')

class GameManager {
  #_inputInterface
  #_players = []
  #_board

  constructor() {
    this.#_inputInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    })
  }

  async startGame() {
    // setup
    this.#_printMessage('Welcome to Tic Tac Toe\n')
    const player1Name = await this.#_createPrompt('Who is the first player?')
    const player2Name = await this.#_createPrompt('Who is the second player?')
    this.#_players = [player1Name, player2Name].map((name) => new Player(name))
    this.#_board = new Board(this.#_players)

    // game loop
    while(!this.#_board.winner && !this.#_board.isGameLocked()) {
      const nextPlayer = this.#_board.whosNext()
      const coordinatesString = await this.#_createPrompt(`${nextPlayer.name}, what's your move?`)

      // Validate that input is numeric and does within range

      if (!this.#_validateCoordinate(coordinatesString)) {
        console.log('Coordinates must include a ",". ie 1,2')
        continue
      }

      const [column, row] = coordinatesString.split(',').map((n) => n.trim())

      if (!this.#validateCoordinateEntry([column, row])) {
        console.log('Coordinates must be a number between 0 and 2')
        continue
      }

      this.#_board.mark(nextPlayer, column, row)
      this.#_board.display()
    }

    if (this.#_board.winner) {
      console.log(`Congratulations ${this.#_board.winner.name}! You've won!`)
    } else {
      console.log('The game is locked. No winners.')
    }
    process.exit()
  }

  #_validateCoordinate(coordinates) {
    return coordinates.includes(',')
  }

  #validateCoordinateEntry(coordinates) {
    return coordinates.every((coordinate) => coordinate.match(/\d/) && coordinate <= 2 && coordinate >= 0)
  }

  #_printMessage(message) {
    process.stdout.write(`${message}`)
  }

  #_createPrompt(prompt) {
    return new Promise(resolve => {
      this.#_inputInterface.question(`${prompt} `, (input) => {
        resolve(input)
      })
    })
  }
}

module.exports = GameManager
