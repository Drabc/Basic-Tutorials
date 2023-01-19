class Player {
  #_id

  constructor(name) {
    Player.id = Player.id || 0
    Player.id += 1
    this.name = name
    this.#_id = Player.id
  }

  get id() {
    return this.#_id
  }
}

module.exports = Player
