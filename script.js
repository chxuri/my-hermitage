"use strict";

const banner = `<div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>

        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>
        <div class="shape">
            <div class="rect dark"></div>
            <div class="triangle dark"></div>
        </div>
        <div class="shape">
            <div class="rect"></div>
            <div class="triangle"></div>
        </div>`;

document.querySelector("header").innerHTML = banner;

const nameInput = document.querySelector("#nameInput");
const nameBtn = document.querySelector("#nameButton");
const messageSpace = document.querySelector("#funStatement");
nameBtn.onclick = gameQuestion;

function gameQuestion() {
    messageSpace.textContent = `Hey ${nameInput.value}! Do you want to play a game?`;
    document.querySelector("#gameAnswer").style.display = "block";
}
nameBtn.addEventListener("click", function (e) {
  e.target.style.background = "rgb(187, 245, 169)";

});

const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

noBtn.onclick = noStatementOn;

function noStatementOn() {
    document.querySelector("#noContainer").style.display = "block";
    document.querySelector("#gameInputContainer").style.display = "none";
}

yesBtn.onclick = gameRedirect;

function gameRedirect() {
    window.location.href="./tictactoe.html";
}

//troubleshoot this
document.querySelector("#easy").addEventListener("click", function(e) {
    e.target.style.background = "black";
    console.log("clicked");
});


//container.appendChild(div);


//can use || (truthy/falsy) or ?? (only for undefined/null)
//make default parameter call a function that does smt funny?
function showMessage(name = "no name given")
{

}

//make asynchronous func so it can show spinny wheel while getting data

//let answer = parseInt(prompt("Enter your fav number!"));


//try catch(e) console.log(e.message);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    if(humanChoice.toLowerCase() === computerChoice)
    {
        return "you tied!"
    }
    if(humanChoice.toLowerCase() == "rock")
    {
        if(computerChoice == "paper")
        {
            computerScore++;
            return "you lost! paper beats rock"
        }
        if(computerChoice == "scissors")
        {
            humanScore++;
            return "you won! rock beats scissors"
        }
    }
    if(humanChoice.toLowerCase() == "paper")
    {
        if(computerChoice == "rock")
        {
            humanScore++;
            return "you won! paper beats rock"
        }
        if(computerChoice == "scissors")
        {
            computerScore++;
            return "you lost! scissors beat paper"
        }
    }
    if(humanChoice.toLowerCase() == "scissors")
    {
        if(computerChoice == "paper")
        {
            humanScore++;
            return "you won! scissors beat paper"
        }
        if(computerChoice == "rock")
        {
            computerScore++;
            return "you lost! rock beats scissors"
        }
    }
}

function getComputerChoice()
{
    let randomVar = Math.floor(Math.random() * 3);
    if(randomVar == 0)
    {
        return "rock";
    }
    else if(randomVar == 1)
    {
        return "paper";
    }
    else if(randomVar == 2)
    {
        return "scissors";
    }
}


function getHumanChoice()
{
    return prompt("Enter rock, paper, or scissors: ");
}

function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        console.log(playRound(getHumanChoice(), getComputerChoice()))
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    if(humanScore > computerScore)
    {
        console.log("You won!!!");
    }
    else if(humanScore === computerScore)
    {
        console.log("You tied!!!");
    }
    else 
    {
        console.log("You lost!!!")
    }
}

//playGame();