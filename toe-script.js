
"use strict";
let mode = "";
let openSpaces = [
    [false, true, true],
    [true, true, true],
    [true, true, true]
];

let takenSpaces = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
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



//go onto game
//player goes first
//comp checks which slot player chose
//comp chooses random slot 
//comp goes next
//player turn

//variable to keep track of whose turn it is


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
    let player = "human";
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
    
    while(winner === "none")
    {
        if(player === "human")
        {
            playerTurn();
        }
        else if(player === "computer")
        {
            computerTurn();
        }

        checkWin();

    }
   
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
    let randR = 0;
    let randC = 0;
    while(!possibleSpaceChoice)
    {
        randR = Math.floor(Math.random() * 3);
        randC = Math.floor(Math.random() * 3);
        possibleSpaceChoice = selectBox(randR, randC, "computer");
    }

    takenSpaces[randR][randC] = "computer";
    addImage("cat", r, c);

}

function selectBox(r, c, player)
{
    if(openSpaces[r][c])
    {
        takenSpaces[r][c] = "human";
        addImage("duck", r, c);
    }
    else if(player === "computer" && !openSpaces[r][c])
    {
        return false;
    }
}

function addImage(icon, r, c)
{
    let id = "box-" + r + "-" + c;
    let fullBoxId = document.querySelector("#" + CSS.escape(id));
    if(icon === "cat")
    {
        fullBoxId.style.backgroundImage = "url('../images/transparent-cat.PNG')";
        fullBoxId.style.backgroundSize = "120px";
        
    }
    else 
    {
        fullBoxId.style.backgroundImage = "url('../images/transparent-duck.PNG')";
        fullBoxId.style.backgroundSize = "100px";
    }
    fullBoxId.style.backgroundPosition = "center";
    fullBoxId.style.backgroundRepeat = "no-repeat";
}

function checkWin()
{
    //check human win and check computer win
    
    let humanHorizontalWin = false;
    let humanVerticalWin = false;
    let humanLeftDiagonalWin = false;
    let humanRightDiagonalWin = false;
    //dunno what i was doing here ^
    //maybe reduce to just one variabel that checks win??

    let humanHorizontals = 0;
    
    let computerWin = false;
    
    //continue doing this for vertical and diagonal!
    for(let r = 0; r < 3; r++)
    {
        for(let c = 0; c < 3; c++)
        {
            if(takenSpaces[r][c] === "human")
            {
                humanHorizontals++;
            }
        }

        if(humanHorizontals === 3)
        {
            humanHorizontalWin = true;
        }
        humanHorizontals = 0;
    }
}