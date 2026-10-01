"use strict";

let name = "Rimma";
let statement = `Good morning ${name}!`;

const favFruits = ["grapes", "cherries", "bananas", "blueberries", "yellow dragonfruit"];

for(const fruit of favFruits)
{
    console.log(fruit);
}

function bFruit(fruit)
{
    return fruit.startsWith("b");
}

const filtered = favFruits.filter(bFruit);
console.log(filtered);

console.log(statement);

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