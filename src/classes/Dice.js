class Dice {
  constructor(numOfDice) {
    this.numOfDice = numOfDice;
  }

  rollOnce() {
    let rollValue = Math.floor(Math.random()*10 % 6 + 1);
    rollValue = rollValue === 4 ? 0 : rollValue;

    return rollValue;
  }

  rollDice() {
    let runningSum = 0;
    let rollsLeft = this.numOfDice;

    while (rollsLeft > 0) {
      let numTimesToReroll = 0;
      let minHighRollValue = 6;
      for (let diceLeft = rollsLeft; diceLeft > 0; diceLeft--) {
        const rollValue = this.rollOnce();
        const isLastDiToRoll = rollsLeft === 1;
        const rolledOverFour = rollValue > 4;
        if (isLastDiToRoll) {
          runningSum += rollValue;
          return runningSum;
        }

        if (rolledOverFour) {
          numTimesToReroll += 1;
          minHighRollValue = Math.min(minHighRollValue, rollValue);
        } else {
          runningSum += rollValue;
        }

        const cannotRerollCurrent = numTimesToReroll === rollsLeft;
        if (cannotRerollCurrent) {
          runningSum += minHighRollValue;
          numTimesToReroll -= 1;
        }
      }

      rollsLeft = rollsLeft - numTimesToReroll;
      numTimesToReroll = 0;
      minHighRollValue = 6;
    }
  }
}

module.exports = Dice;
