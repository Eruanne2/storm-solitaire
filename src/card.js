const ORDER = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

class Card {
  constructor(str){
    this.val = str[0];
    this.suit = str[1];
  }
  
  comesAfter(card){
    return ORDER.indexOf(this.val) - ORDER.indexOf(card.val) === 1;
  }

  isOppositeColor(card){
    switch(card.suit){
      case 'H':
      case 'D':
        return (this.suit === 'S' || this.suit === 'C');
        case 'S':
        case 'C':
          return (this.suit === 'H' || this.suit === 'D');
      default: return false;
    }
  }
}

// let c = new Card('1H')
// console.log(c.suit)

module.exports = Card;

