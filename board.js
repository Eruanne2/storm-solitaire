const Card = require('./card.js');
const Display = require('./display.js');

const fullDeck = [
  'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH',
  'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD',
  'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS',
  'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC',
]

class Board {
  constructor() {
    this.display = new Display();
    this.hand = fullDeck.map(str => new Card(str))
    this.shuffle(this.hand);
    this.waste = []
    this.tableau = [
      this.hand.slice(this.hand.length - 1), 
      this.hand.slice(this.hand.length - 2), 
      this.hand.slice(this.hand.length - 3), 
      this.hand.slice(this.hand.length - 4), 
      this.hand.slice(this.hand.length - 5), 
      this.hand.slice(this.hand.length - 6), 
      this.hand.slice(this.hand.length - 7), 
    ]
    this.foundations = {'H': [], 'D': [], 'S': [], 'C': []}
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

  moveCardToTableau(card, from, stack) {
    if ((card.comesAfter(this.tableau[stack].slice(-1)[0])) && card.isOppositeColor(this.tableau[stack].slice(-1)[0])){
      this.tableau[stack].push(card);
      if (from === 'tableau') {
        this.tableau[parseInt(from[0])].pop(); // remove card from tableau
      }
      return true;
    } 
    else {
      if (from === 'waste') {
        this.hand.push(card); // return card to waste pile
      }
      return false;
    }
  }

  moveCardToFoundations(card, from) {
    if (card.comesAfter(this.foundations[card.suit].slice(-1)[0])){
      this.foundations[card.suit].push(card); // add card to foundations
      if (from === 'tableau') {
        this.tableau[parseInt(from[0])].pop(); // remove card from tableau
      }
      return true;
    } 
    else {
      if (from === 'waste') {
        this.hand.push(card); // return card to waste pile
      }
      return false;
    }

  }

  
  
}

module.exports = Board;