const Board = require('./board.js');

class Game {
  constructor() {
    this.board = new Board;

    // set event handlers
  }
  
  dragFromWaste(e) {
    e.dataTransfer.setData('card', this.board.waste[this.board.waste.length-1])
  }
  
  dragFromTableau(e) {
    let stack = e.currentTarget; // which stack is it dragged from
    e.dataTransfer.setData('card', this.board.tableau[stack][this.board.tableau[stack].length-1])
  }
  
  dropOnFoundations(e) {
    e.preventDefault();
    let card = e.dataTransfer.getData('card');
  }
  
  dropOnTableau(e) {
    e.preventDefault();
    let card = e.dataTransfer.getData('card');
    let stack = e.currentTarget; // which stack is it being dropped on
  }

}