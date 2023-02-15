class Board {

  #_playerSymbolMap
  #_playingBoard
  #_lastPlayedId

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
    if (player.id === this.#_lastPlayedId) {
      console.log(`Player ${player.name} cannot play twice in a row`)
      return
    }

    if (this.#_playingBoard[row][column] !== '-') {
      console.log(`Space ${column}, ${row} is occupied`)
      return
    }

    const symbol = this.#_playerSymbolMap[player.id]
    this.#_playingBoard[row][column] = symbol
    this.#_lastPlayedId = player.id

    if (this.#_hasSomeoneWon(symbol)) {
      console.log(`Congratulation ${player.name}. You have won!`)
    }
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

  #_hasSomeoneWon(symbol) {
    // Horizontal check
    let won = false
    this.#_playingBoard.forEach((row) => {
      if (row.every((column) =>  column === symbol)) {
        won = true
        return
      }
    })

    if (won === true) {
      return won
    }

    // vertical check
    let colWon = true
    for (let i=0; i < this.#_playingBoard.length; i++) {
      colWon = true
      for (let x=0; x < this.#_playingBoard.length; x++) {
        colWon = colWon && symbol === this.#_playingBoard[x][i]
      }

      if (colWon === true) {
        won = colWon
        break
      }
    }

    if (won === true) {
      return won
    }

    // Diagnal down check
    let diagWinDown = true

    this.#_playingBoard.forEach((row, index) => {
      diagWinDown = diagWinDown && row[index] == symbol
    })
    won = diagWinDown

    if (won === true) {
      return won
    }

    // Diagnal up check
    let diagWinUp = true
    for (let x=this.#_playingBoard.length - 1; x >= 0; x--) {
      let i = (this.#_playingBoard.length - 1) - x
      diagWinUp = diagWinUp && this.#_playingBoard[x][i] == symbol
    }

    return diagWinUp
  }

}

module.exports = Board
