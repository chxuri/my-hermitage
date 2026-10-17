
let mode = "";
let openSpaces = [
    [false, true, true],
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

document.querySelector("#startButton").onclick = ticTacToe;


//boolean for computer win vs human win? 
//how to detect win? make conditionals for each direction
//vertical, horizontal, diagonal
//while game isn't won yet
//take turns with machine

function ticTacToe()
{
    if(!mode)
    {
        noModeSelected();
    }
    else if(mode === "easy")
    {
        easyMode();
    }
}

function noModeSelected()
{
    const statement = document.createElement("p");
    statement.id = "difficultyAlert";
    statement.textContent = "Please select a difficulty first!";
    document.querySelector("#toeNotification").appendChild(statement);
}

function easyMode()
{
    let winner = "none";
    document.querySelector("#startButton").style.display = "none";
    let alert = document.querySelector("#difficultyAlert");
    if(alert)
    {
        alert.style.display = "none";
    }
    const statement = document.createElement("p");
    statement.textContent = "Your turn!";
    document.querySelector("#toeNotification").appendChild(statement);
    
    //while(winner === "none")
    computerTurn();
    playerTurn();
}

function playerTurn()
{
    for(let r = 0; r < 3; r++)
    {
        for(let c = 0; c < 3; c++)
        {
            let id = "box-" + r + "-" + c;
            document.querySelector("#" + CSS.escape(id)).onclick = () => selectBox(r, c, "human");
        }
    }
}


function computerTurn()
{
    let possibleSpaceChoice = false;

    while(!possibleSpaceChoice)
    {
        let randR = Math.floor(Math.random() * 3);
        let randC = Math.floor(Math.random() * 3);
        possibleSpaceChoice = selectBox(randR, randC, "computer");
    }
}

function selectBox(r, c, player)
{
    if(openSpaces[r][c])
    {
        //box selectable
        //draw custom tomato for the image
        console.log("box selectable!");
    }
    else if(player === "computer" && !openSpaces[r][c])
    {
        console.log("box not selectable");
        return false;
    }
}