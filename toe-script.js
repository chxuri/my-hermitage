
"use strict";
let mode = "";
let currentPlayer = "human";
let waitNextTurn = false;

let openSpaces = [
    [true, true, true],
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
    
    

    playerTurn();
    console.log("player: " + currentPlayer)
    winner = checkWin();
   
}

function getPlayerTurn()
{
    return new Promise(function(resolve) {
        resolve(playerTurn());
    });
}

async function awaitPlayerTurn()
{
    console.log("fetching!");
    let playerTurn = await getPlayerTurn();
    currentPlayer = "computer";
}

function playerTurn()
{
    let numClicks = 0;
    console.log("player turn!");
    for(let r = 0; r < 3; r++)
    {
        for(let c = 0; c < 3; c++)
        {
            let id = "box-" + r + "-" + c;
            
            document.querySelector("#" + CSS.escape(id)).addEventListener("click", function(e)
            {
                if(numClicks === 0)
                {
                    console.log("numClicks" + numClicks)
                    selectBox(r, c, "human");
                    //waitNextTurn = false;
                    let winner = checkWin();
                    if(winner === "human")
                    {
                        console.log("human won!");
                        return;
                    }
                    setTimeout(computerTurn, 1000);
                }
                numClicks++;
            });
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
        console.log("checking possibleSpacechoice")
        console.log("RandR: " + randR);
        console.log("RandC: " + randC);
        possibleSpaceChoice = selectBox(randR, randC, "computer");
    }

    openSpaces[randR][randC] = false;
    takenSpaces[randR][randC] = "computer";
    addImage("cat", randR, randC);
    currentPlayer = "human";
    let winner = checkWin();

    if(winner === "computer")
    {
        console.log("computer won!");
        return;
    }
    setTimeout(playerTurn, 1000);

}

function selectBox(r, c, player)
{
    if(openSpaces[r][c] && player === "human")
    {
        takenSpaces[r][c] = "human";
        openSpaces[r][c] = false;
        addImage("duck", r, c);
    }
    else if(player === "computer" && !openSpaces[r][c])
    {
        console.log("comp and closed");
        return false;
    }
    else if(player === "computer")
    {
        console.log("comp and open");
        return true;
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
    let humanWin = false;

    let humanHorizontals = 0;
    let humanVerticals = 0;
    let humanLeftDiagonals = 0;
    let humanRightDiagonals = 0;
    
    let computerWin = false;

    let computerHorizontals = 0;
    let computerVerticals = 0;
    let computerLeftDiagonals = 0;
    let computerRightDiagonals = 0;
    
    //continue doing this for vertical and diagonal!
    for(let r = 0; r < 3; r++)
    {
        for(let c = 0; c < 3; c++)
        {
            if(takenSpaces[r][c] === "human")
            {
                humanHorizontals++;
            }
            else if(takenSpaces[r][c] === "computer")
            {
                computerHorizontals++;
            }
        }

        if(humanHorizontals === 3)
        {
            humanWin = true;
        }
        if(computerHorizontals === 3)
        {
            computerWin = true;
        }
        humanHorizontals = 0;
        computerHorizontals = 0;
    }

    for(let c = 0; c < 3; c++)
    {
        for(let r = 0; r < 3; r++)
        {
            if(takenSpaces[r][c] === "human")
            {
                humanVerticals++;
            }
            else if(takenSpaces[r][c] === "computer")
            {
                computerVerticals++;
            }
        }

        if(humanVerticals === 3)
        {
            humanWin = true;
        }
        if(computerVerticals === 3)
        {
            computerWin = true;
        }
        humanVerticals = 0;
        computerVerticals = 0;
    }

    let leftI = 0;
    
    let rightR = 0;
    let rightC = 2;

    while (leftI < 3)
    {
        if(takenSpaces[leftI][leftI] === "human")
        {
            humanLeftDiagonals++;
        }
        else if(takenSpaces[leftI][leftI] === "computer")
        {
            computerLeftDiagonals++;
        }
        leftI++;
    }

    while(rightC >= 0)
    {
        if(takenSpaces[rightR][rightC] === "human")
        {
            humanRightDiagonals++;
        }
        else if(takenSpaces[rightR][rightC] === "computer")
        {
            computerRightDiagonals++;
        }
        rightR++;
        rightC--;
    }

    if(humanRightDiagonals === 3 || humanLeftDiagonals === 3)
    {
        humanWin = true;
    }

    if(computerRightDiagonals === 3 || computerLeftDiagonals === 3)
    {
        computerWin = true;
    }

    console.log("checking wins");
    if(humanWin)
    {
        setTimeout(displayWin, 500);
        return "human";
    }
    else if(computerWin)
    {
        setTimeout(displayLoss, 500);
        return "computer";
    }
    else 
    {
        return "none";
    }


}

function displayWin()
{
    let message = document.createElement("p");
    message.textContent = "Congrats!! You won!!";
    document.querySelector("#winScreen").prepend(message);
    document.querySelector("#winScreen").style.display = "flex";
    document.querySelector("#exitWin").onclick = () => document.querySelector("#winScreen").style.display = "none";
}

function displayLoss()
{
    let message = document.createElement("p");
    message.textContent = "HAHA YOU LOST!";
    document.querySelector("#winScreen").prepend(message);
    document.querySelector("#winScreen").style.display = "flex";
    document.querySelector("#exitWin").onclick = () => document.querySelector("#winScreen").style.display = "none";
}