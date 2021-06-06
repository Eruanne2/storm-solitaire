const Card = require('./card.js');

const fullDeck = [
  'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH',
  'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD',
  'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS',
  'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC',
]

class Game {
  constructor() {
    this.hand = fullDeck.map(str => new Card(str))
    this.shuffle(this.hand);
    this.waste = []
    this.tableau = [[], [], [], [], [], [], []]
    this.foundations = [[], [], [], []]
  }

  shuffle(arr) {
    var currentIdx = arr.length;
    var temp, randomIdx;
    while (currentIdx !== 0) {
      randomIdx = Math.floor(Math.random() * currentIdx);
      currentIdx -= 1;
      temp = arr[currentIdx];
      arr[currentIdx] = arr[randomIdx];
      arr[randomIdx] = temp;
    }
    return arr
  }

  flipHand() {
    this.waste.push(this.hand.pop())
  }

  restartHand() {
    while (this.waste.length > 0) {
      this.hand.unshift(this.waste.shift())
    }
  }

  
  
}

