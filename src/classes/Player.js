class Player {
  constructor(id) {
    this.id = id;
    this.score = 0;
  }

  addScore(newScore) {
    this.score += newScore;
  }

  getScore() {
    return this.score;
  }
}

module.exports = Player;
