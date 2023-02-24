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

    // game
    while(!this.#_board.someoneWon) {
      
    }
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


//
// async function run() {
//     let v1 = await getInput(0);
//     let v2 = await getInput(1);
//     console.log(v1, v2);
// }
//
// run().catch((err) => {
//     console.log(err);
// });
