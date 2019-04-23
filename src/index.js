const Game = require('./classes/Game');

const numOfDice = 5;
const numPlayers = 4;
const numOfGames = 4;
const game = new Game(numOfDice, numPlayers, numOfGames);
const winningPlayer = game.playGame();

console.log(winningPlayer.id, winningPlayer.score);
