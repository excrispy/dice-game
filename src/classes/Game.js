const Dice = require('./Dice');
const Player = require('./Player');

class Game {
  constructor(numOfDice, numPlayers, numOfGames) {
    this.numOfDice = numOfDice;
    this.numPlayers = numPlayers;
    this.numOfGames = numOfGames;
    this.currentPlayerIndex = 0;
    this.players = [];
    this.dice = new Dice(5, 5);

    this.createPlayers(this.numPlayers);
  }

  createPlayers(numPlayers) {
    for (let i = 0; i < numPlayers; i++) {
      this.players.push(new Player(i));
    }
  }

  playGame() {
    for (let i = 0; i < this.numOfGames; i++) {
      this.playRounds();
    }
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.numPlayers;
    return getPlayerWithMinScore();
  }

  playRounds() {
    for (let i = 0; i < this.numPlayers; i++) {
      this.playOneTurn();
      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.numPlayers;
    }
  }

  playOneTurn() {
    const player = this.players[this.currentPlayerIndex];
    player.addScore(this.dice.rollDice());
  }

  getPlayerWithMinScore() {
    let minScorePlayer;
    for (let i = 0; i < this.players; i++) {
      const currentPlayer = this.players[i];
      if (!minScorePlayer || currentPlayer.getScore() < minScorePlayer.getScore()) {
        minScorePlayer = currentPlayer;
      }
    }

    return minScorePlayer;
  }
}

module.exports = Game;
