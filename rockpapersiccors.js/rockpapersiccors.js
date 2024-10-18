// Choices //
let choice = ['rock', 'paper', 'scissors'];
// Randomly Generate a computer choice //
function getComputerChoice(choice){

    return choice[Math.floor(Math.random() * choice.length)];
}

console.log(getComputerChoice(choice));

// Playing the round ; determining winners //

function round (playerSelection,computerSelection){
if (playerSelection===computerSelection){
console.log("it's a tie");
}
else if (playerSelection==="rock" && computerSelection === "scissors"){
console.log ( " You win beats scissors" ) ;
}
else if (playerSelection === "paper" && computerSelection === "rock"){
   console.log  ( "You win beats rock " );
}

else if (playerSelection === "scissors" && computerSelection === "paper"){
    console.log ( "You win beats paper" ) ;
}

else {
    console.log (" You Lose");
}

}

const playerSelection = prompt("Please enter value").toLowerCase;
const computerSelection = getComputerChoice(choice)
console.log(round(playerSelection,computerSelection))


