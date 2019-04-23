class Dice {
  constructor(numOfDice, numOfRolls) {
    this.numOfDice = numOfDice;
    this.numOfRolls = numOfRolls;
  }

  rollOnce() {
    let rollValue = Math.floor(Math.random()*10 % 6 + 1);
    rollValue = rollValue === 4 ? 0 : rollValue;

    return rollValue;
  }

/*
rollsLeft=5
rolls: 2 1 3 5 6
runningSum: 2+1+3=6
reroll=2
rollsLeft=5-2=3
reroll=0

rollsLeft=3
rolls: 1 2 5
runningSum=6+1+2=9
reroll=1
rollsLeft=3-1=2
reroll=0

rollsLeft=3
rolls: 3 1 6
runningSum=9+3+1
reroll=1
rollsLeft=2

rollsLeft=1
rolls: 6
runn
*/

  rollDice() {
    let runningSum = 0;
    let rollsLeft = this.numOfRolls;

    while (rollsLeft > 0) {
      let reroll = 0;
      for (let diceLeft = rollsLeft; diceLeft > 0; diceLeft--) {
        const rollValue = this.rollOnce();
        if (rollValue >= 5 && rollsLeft > 1) {
          reroll += 1;
        } else {
          runningSum += rollValue;
        }
      }
      rollsLeft = rollsLeft - reroll;
      reroll = 0;
    }

    return runningSum;
  }
}

module.exports = Dice;