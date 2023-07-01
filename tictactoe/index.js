const Game = require("./game");
 
try { 
    let g1 = Game.addGame("Anil", "X", "Atul", "O");
    console.log(g1.play(1));
    console.log(g1.play(8));
    console.log(g1.play(7));
    console.log(g1.play(4));
    console.log(g1.play(0));
    console.log(g1.play(3));
    console.log(g1.play(2)); 
 
    let g2 = Game.addGame("raju", "O", "shyam", "X");
    console.log(g2.play(9));
    console.log(g2.play(0));
    console.log(g2.play(1));
    console.log(g2.play(2));
    console.log(g2.play(3));
    console.log(g2.play(4));
    console.log(g2.play(5));
    console.log(g2.play(6));
    console.log(g2.play(7));  
    console.log(g2.play(8));
    console.log(g2.play(9));


    let g3 = Game.addGame("Abhay", "O", "Anil", "X");
    console.log(g3.play(9));
    console.log(g3.play(0));
    console.log(g3.play(1));
    console.log(g3.play(2));
    console.log(g3.play(3));
    console.log(g3.play(4));
    console.log(g3.play(5));
    console.log(g3.play(6));
    console.log(g3.play(7));  
    console.log(g3.play(8));
    console.log(g3.play(9));

} catch (error) {
    console.log(error.message);
}