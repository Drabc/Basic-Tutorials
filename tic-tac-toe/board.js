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

  mark(player, x, y) {
    const symbol = this.#_playerSymbolMap[player.id]
    this.#_playingBoard[x][y] = symbol
  }

  display() {
    console.log(this.#_playingBoard)
  }

}

module.exports = Board
