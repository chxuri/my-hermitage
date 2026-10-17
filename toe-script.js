
let mode = "";
let openSpaces = [
    [true, true, true],
    [true, true, true],
    [true, true, true]
];

document.querySelector("#easy").addEventListener("click", function(e) {
    e.target.style.outline = "2px solid";
    document.querySelector("#medium").style.outline = "none";
    document.querySelector("#hard").style.outline = "none";
    mode = "easy";
});

document.querySelector("#medium").addEventListener("click", function(e) {
    e.target.style.outline = "2px solid";
    document.querySelector("#easy").style.outline = "none"
    document.querySelector("#hard").style.outline = "none"
    mode = "medium";
});

document.querySelector("#hard").addEventListener("click", function(e) {
    e.target.style.outline = "2px solid";
    document.querySelector("#medium").style.outline = "none"
    document.querySelector("#easy").style.outline = "none"
    mode = "hard";
});

//make a game function that loops 
//player gets to go first in easy mode
//says your turn if player goes first
//player gets to click on square
//on top of square, theres image
//array of potential open spaces gets marked with boolean false

function ticTacToe()
{
    if(mode === "easy")
    {
        
    }
}