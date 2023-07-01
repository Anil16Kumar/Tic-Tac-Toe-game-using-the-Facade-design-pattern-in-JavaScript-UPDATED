const Board = require("./board");
const Player = require("./Player");

class Game {
    constructor(players, board){
        this.players = players;
        this.board = board;
        this.turn = 0;
        this.isGameActive = true;
    }

    static addGame(playerName1, symbol1, playerName2, symbol2){
        if(typeof playerName1 !== 'string' || typeof playerName1 !== 'string')
            throw new Error('player name should be a string')

        if(typeof symbol1 !== 'string' || typeof symbol1 !== 'string')
            throw new Error('player symbol should be a string')

        let players = [Player.addPlayer(playerName1, symbol1), Player.addPlayer(playerName2, symbol2)];
        let board = Board.newBoard();
        return new Game(players, board)
    }

    play(cellno) {
        if (cellno >= 9) {
          return "INVALID CELL NUMBER";
        }
        if (!this.isGameActive) {
          return "GAME OVER";
        }
        if (this.board.cells[cellno].isMarked()) {
          return `${this.players[this.turn].name} cell number ${cellno} already marked`;
        }
      
        const marked = this.board.cells[cellno].markCell(this.players[this.turn].symbol);
        if (!marked) {
          return `${this.players[this.turn].name} cell number ${cellno} already marked`;
        }
      
        this.turn ^= 1;
      
        const [gameStatus, winSymbol] = this.board.analyzeResult();
        if (gameStatus === "WIN") {
          this.isGameActive = false;
          this.board.showBoard();
          if (winSymbol === this.players[0].symbol)
            return `${this.players[0].name} with symbol ${this.players[0].symbol} WON`;
      
          return `${this.players[1].name} with symbol ${this.players[1].symbol} WON`;
        }
        if (gameStatus === "DRAW") {
          this.isGameActive = false;
          this.board.showBoard();
          return "DRAW";
        }
      }
      
    // play(cellno){
    //     if(cellno >= 9){
    //         return "INVALID CELL NUMBER"
    //     }
    //     if(!this.isGameActive){
    //         return "GAME OVER"
    //     }
    //     if(this.board.cells[cellno].isMarked()){
    //         return `${this.players[this.turn].name} cell number ${cellno} already marked`
    //     }

    //     this.board.cells[cellno].mark = this.players[this.turn].symbol;
    //     this.turn^=1;

    //     let [gameStatus, winSymbol] = this.board.analyzeResult();
    //     if(gameStatus === "WIN"){
    //         this.isGameActive = false;
    //         this.board.showBoard();
    //         if(winSymbol === this.players[0].symbol)
    //             return `${this.players[0].name} with symbol ${this.players[0].symbol} WON`;

    //         return `${this.players[1].name} with symbol ${this.players[0].symbol} WON`;
    //     }
    //     if(gameStatus === "DRAW"){
    //         this.isGameActive = false;
    //         this.board.showBoard();
    //         return "DRAW";
    //     } 
    // }
}
module.exports = Game