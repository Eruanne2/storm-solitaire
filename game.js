const Board = require('./board.js');

class Game {
  constructor() {
    this.board = new Board;

    // set event handlers
  }
  
  dragFromWaste(e) {
    e.dataTransfer.setData('card', this.board.waste.pop());
    e.dataTransfer.setData('from', 'waste');
  }
  
  dragFromTableau(e) {
    let stack = e.currentTarget; // which stack is it dragged from
    e.dataTransfer.setData('card', this.board.tableau[stack].pop());
    e.dataTransfer.setData('from', 'tableau');
  }
  
  dropOnFoundations(e) {
    e.preventDefault();
    let card = e.dataTransfer.getData('card');
    let from = e.dataTransfer.getData('from');
    this.board.moveCardToFoundations(card, from);
  }
  
  dropOnTableau(e) {
    e.preventDefault();
    let card = e.dataTransfer.getData('card');
    let from = e.dataTransfer.getData('from');
    let stack = e.currentTarget; // which stack is it being dropped on
  }

}