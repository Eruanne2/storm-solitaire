const order = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

class Card {
  constructor(str){
    this.val = str[0];
    this.suit = str[1];
  }

}

let c = new Card('1H')
console.log(c.suit())