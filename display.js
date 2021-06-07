class Display {
  constructor(board){
    // create variables for stacks
    this.hand = document.getElementById('hand');
    this.waste = document.getElementById('waste');
    this.foundations = {
      'S': document.getElementById('foundations-1'),
      'H': document.getElementById('foundations-2'),
      'C': document.getElementById('foundations-3'),
      'D': document.getElementById('foundations-4')
    }
    this.tableau = [
      document.getElementById('stack-1'),
      document.getElementById('stack-2'),
      document.getElementById('stack-3'),
      document.getElementById('stack-4'),
      document.getElementById('stack-5'),
      document.getElementById('stack-6'),
      document.getElementById('stack-7')
    ]

  }

  render(){
    // hand
    this.hand.classList.forEach(className => {
      if (className !== 'card') this.hand.classList.remove(className);
    })

    this.board.hand.length === 0
    ? this.hand.classList.add('card-back-jet')
    : this.hand.classList('empty-stack');

    // waste
    this.waste.classList.forEach(className => {
      if (className !== 'card') this.waste.classList.remove(className);
    })

    this.board.waste.length === 0
    ? this.waste.classList.add(`c${this.board.waste.slice(-1)[0].val}${this.board.waste.slice(-1)[0].suit}`)
    : this.waste.classList('empty-stack');

    // foundations

    
    // tableau
  }
}

module.exports = Display;