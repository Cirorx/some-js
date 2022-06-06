const moves = ["rock", "paper", "scissors"];
const results = ["T", "W", "L"]; //from USER perspective
const r = "rock", p = "paper", s = "scissors";

const moveButtons = document.querySelectorAll("[data-moves]");
const result = document.querySelector("[data-result]");




//Define winner
function getStronger (move1, move2) {
    var index;
    if (move1 == r) {
        if (move2 ==r) {
            index = 0;
        }//tide
        else if (move2 == p) {
            index = 2;
        }//loss
        else {index = 1}//won        
    }//rock possibility

    if (move1 == p) {
        if (move2 ==r) {
            index = 1;
        }
        else if (move2 == p) {
            index = 0;
        }
        else {index = 2}        
    }//paper possibility

    if (move1 == s) {
        if (move2 ==r) {
            index = 2;
        }
        else if (move2 == p) {
            index = 1;
        }
        else {index = 0}        
    }//scissors possibility

    return results[index];
}

//Make the computer play a random move
function computerPlay() {
    var move = "", random = null;

    //Gather info for Math random
    min = Math.ceil(0);
    max = Math.floor(moves.length);
    random = Math.floor(Math.random() * (max - min + 1) + min);
    return moves[random];
}


function playRound(playerSelection) {
    computerSelection = computerPlay();
    winner = getStronger(playerSelection, computerSelection);
    return results[winner];
}//end playRound

function game(userMove) {
    resultsList = [];
    console.log("Here1")
    if (moves.some(userMove)) {
        
        outcome = playRound(userMove);
        switch (outcome) {
            case "T" : console.log("You tide! :/")
            case "W" : console.log("You won! :) ") 
            case "L" : console.log("You lost! :( ")
        }
        resultsList.concat(results(outcome));
        console.log("This is your current history:");
        console.log(results);

        console.log("Here2");
     }
}//end game


moveButtons.forEach(moveButton => {
    moveButton.addEventListener("click", e => {
        console.log("Here")
        const playerMove = moveButton.dataset.moves
        game(playerMove)
    })
})



