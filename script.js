let rps = ['rock','paper','scissors']

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
//console.log(computerSelection);
playRound(computerSelection,playerSelection);

function playRound(computerSelection,playerSelection) {
    console.log('player choice:' + playerSelection);
    console.log('computer choice:' + computerSelection);

    if(computerSelection == playerSelection){
        console.log('Tie');
    } else if(
    (computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (computerSelection == 'scissors' && playerSelection == 'paper')
    ){
        console.log('Computer wins!');
    } else {
        console.log('Player wins!');
    }

}
function getComputerChoice() {
    return rps[Math.floor(Math.random()*3)];
}

function getPlayerChoice() {
    return prompt('Please make your choice', 'rock,scissors,paper');
}

