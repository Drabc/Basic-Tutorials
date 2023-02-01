class Board {

  #_playerSymbolMap
  #_playingBoard

  constructor(players) {
    this.#_playerSymbolMap = {}
    this.#_playerSymbolMap[players[0].id] = 'x'
    this.#_playerSymbolMap[players[1].id] = 'o'

    this.#_playingBoard = [
      new Array('-', '-', '-'),
      new Array('-', '-', '-'),
      new Array('-', '-', '-')
    ]
  }

  mark(player, column, row) {
    const symbol = this.#_playerSymbolMap[player.id]
    this.#_playingBoard[row][column] = symbol
  }

  display() {
    this.#_playingBoard.forEach((row) => {
      const rowOutput = []
      row.forEach((cell) => {
        rowOutput.push(cell)
      })
      console.log(rowOutput.join(' | '))
    })
  }

}

module.exports = Board
