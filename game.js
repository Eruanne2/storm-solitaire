const Board = require('./board.js');
const Display = require('./display');

class Game {
  constructor() {
    this.board = new Board;
    this.display = new Display(this.board);
    // set event handlers
  }
  
  dragFromWaste(e) {
    e.dataTransfer.setData('card', this.board.waste.pop());
    e.dataTransfer.setData('from', 'waste');
  }
  
  dragFromTableau(e) {
    let stack = e.currentTarget; // which stack is it dragged from
    e.dataTransfer.setData('card', this.board.tableau[stack].slice(-1)[0]);
    e.dataTransfer.setData('from', `${stack}tableau`);
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
    this.board.moveCardToTableau(card, from, stack);
  }

  won() {
    return this.board.foundations.every(stack => stack.length === 13);
  }

}