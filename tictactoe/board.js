const Cell = require("./cell");

class Board {
    constructor(cells){
        this.cells = cells
    }

    static newBoard(){
        let cells = [];
        for(let i=0; i<9; ++i){
            cells.push(Cell.newCell("?"));
        }
        return new Board(cells)
    }

    showBoard(){
        console.log("-------------")
        console.log(`| ${this.cells[0].mark} | ${this.cells[1].mark} | ${this.cells[2].mark} |`);
        console.log("-------------")
        console.log(`| ${this.cells[3].mark} | ${this.cells[4].mark} | ${this.cells[5].mark} |`); 
        console.log("-------------")
        console.log(`| ${this.cells[6].mark} | ${this.cells[7].mark} | ${this.cells[8].mark} |`);
        console.log("-------------")
    }

    analyzeResult(){
        //row check
            if(this.cells[0].mark !=="?"
            && this.cells[0].mark === this.cells[1].mark 
            && this.cells[1].mark === this.cells[2].mark )
            return ["WIN", this.cells[0].mark];

            if(this.cells[3].mark !=="?"
            && this.cells[3].mark === this.cells[4].mark 
            && this.cells[4].mark === this.cells[5].mark)
            return ["WIN", this.cells[3].mark];

            if(this.cells[6].mark !=="?"
            && this.cells[6].mark === this.cells[7].mark 
            && this.cells[7].mark === this.cells[8].mark)
            return ["WIN", this.cells[6].mark];

        //col check
            if(this.cells[0].mark !=="?"
            && this.cells[0].mark === this.cells[3].mark 
            && this.cells[3].mark === this.cells[6].mark )
            return ["WIN", this.cells[0].mark];

            if(this.cells[1].mark !=="?"
            && this.cells[1].mark === this.cells[4].mark 
            && this.cells[4].mark === this.cells[7].mark)
            return ["WIN", this.cells[1].mark];

            if(this.cells[2].mark !=="?"
            && this.cells[2].mark === this.cells[5].mark 
            && this.cells[5].mark === this.cells[8].mark)
            return ["WIN", this.cells[2].mark];

        //diagonal check
            if(this.cells[0].mark !=="?"
            && this.cells[0].mark === this.cells[4].mark 
            && this.cells[4].mark === this.cells[8].mark )
            return ["WIN", this.cells[0].mark];

            if(this.cells[2].mark !=="?"
            && this.cells[2].mark === this.cells[4].mark 
            && this.cells[4].mark === this.cells[6].mark)
            return ["WIN", this.cells[2].mark];
        
        //all cell filled check
        for(let i=0; i<9; ++i){
            if(this.cells[i].mark ==="?") 
                return ["gameOn", "-1"];
        }

        return ["DRAW", "-1"];

    }
}

module.exports = Board