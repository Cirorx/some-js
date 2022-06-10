const moves = ["rock", "paper", "scissors"];
const results = ["T", "W", "L"]; //from USER perspective
let winList = [];

//Define winner
function getStronger (move1, move2) {
    var index, result;    
    //rock possibility
    if (move1 == moves[0]) {
        if (move2 == moves[0]) {
            index = 0;
        }//tide
        else if (move2 == moves[1]) {
            index = 2;
        }//loss
        else {index = 1}//won        
    }
    //paper possibility
    if (move1 == moves[1]) {
        if (move2 == moves[0]) {
            index = 1;
        }
        else if (move2 == moves[1]) {
            index = 0;
        }
        else {index = 2}        
    }
    //scissors possibility
    if (move1 == moves[2]) {
        if (move2 == moves[0]) {
            index = 2;
        }
        else if (move2 == moves[1]) {
            index = 1;
        }
        else {index = 0}        
    }
    result = results[index];
    
    return result;    
}

//Make the computer play a random move
function computerPlay() {
    var move = "", random = null;

    //Gather info for Math random
    random = Math.floor(Math.random() * 3) + 1;
    move = moves[random];
    return move;
}

function playRound(playerSelection) {
    computerSelection = computerPlay();
    outcome = getStronger(playerSelection, computerSelection);

    console.log("Computer has chosen " + computerSelection);
    console.log("You chosed " + playerSelection);
    console.log("////////////////////////////");

    if (outcome == results[0]) {
        console.log("You have a tide with the computer, try again!")
    } else if (outcome == results[1]) {
        console.log("You have won  against the computer, good job! :)")
    }
    else {
        console.log("You have lost the round, better luck next time! :D")
    } 
}//end playRound

function game() {
    resultsList = [];
    console.log("                   /////////////////////");
    console.log("                         LETS PLAY");
    console.log("                   /////////////////////");
    
    userMove = prompt("Write \"rock\", \"paper\" or \"scissors\" to play!");
    /*} while (userMove !== "rock" /*|| userMove != "paper" || userMove != "scissors")*/
   
    playRound(userMove);
}//end game

number = prompt("How many round do you want to play?");

//let's play "number" rounds!
for (let i = 0; i < number; i++) {
    game()
};
