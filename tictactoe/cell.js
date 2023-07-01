class Cell {
    constructor(mark) {
      this.mark = mark;
    }
  
    static newCell(mark) {
      return new Cell(mark);
    }
  
    isMarked() {
      return this.mark !== "?";
    }
  
    markCell(symbol) {
      if (!this.isMarked()) {
        this.mark = symbol;
        return true;
      }
      return false;
    }
  }
  
  module.exports = Cell;
// class Cell {
//     constructor(mark){
//         this.mark = mark;
//     }

//     static newCell(mark){
//         return new Cell(mark)
//     }

//     isMarked(){
//         return this.mark !=="?"
//     }

// }

// module.exports = Cell