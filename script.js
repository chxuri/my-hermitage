"use strict";

let name = "Rimma";
let statement = `Good morning ${name}!`;

console.log(statement);

//can use || (truthy/falsy) or ?? (only for undefined/null)
//make default parameter call a function that does smt funny?
function showMessage(name = "no name given")
{

}

//make asynchronous func so it can show spinny wheel while getting data

//let answer = parseInt(prompt("Enter your fav number!"));


//try catch(e) console.log(e.message);


//rock paper scissors logic:

//create function that randomizes number 1 through 3
//make variable for the random num

//when function is called, store into computer choice variable
//ask user for their choice in number
//compare the choice against the computer
//print win lose or tie message
//ask if want to play again

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

console.log(playRound(getHumanChoice(), getComputerChoice()))