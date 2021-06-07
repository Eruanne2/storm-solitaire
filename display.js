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

    // set values (image of card, height of stack, etc.)
    
  }


}

module.exports = Display;