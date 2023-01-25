class Player {
  #_id // private variable

  constructor(name) {
    Player.id = Player.id || 0 // Class variables
    Player.id += 1
    this.name = name
    this.#_id = Player.id
  }

  get id() {
    return this.#_id
  }
}

module.exports = Player
