let rps = ['rock','paper','scissors']

//let computerSelection = getComputerChoice();
//let playerSelection = getPlayerChoice();

game();

function playRound(computerSelection,playerSelection) {
    console.log('player choice:' + playerSelection);
    console.log('computer choice:' + computerSelection);

    if(computerSelection == playerSelection){
        console.log('Tie');
        return 'tie';
    } else if(
    (computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (computerSelection == 'scissors' && playerSelection == 'paper')
    ){
        console.log('Computer wins!');
        return 'computer';
    } else {
        console.log('Player wins!');
        return 'player';
    }

}
function getComputerChoice() {
    return rps[Math.floor(Math.random()*3)];
}

function getPlayerChoice() {
    return prompt('Please make your choice', 'rock,scissors,paper');
}

function game() {
    console.log('------------------------------------');
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        let result = playRound(computerSelection,playerSelection);
        if (result == 'player') {
            playerScore++;
        } else if (result == 'tie'){
        }
         else {
            computerScore++;
        }
        console.log('Player: ' + playerScore);
        console.log('Computer: ' + computerScore);
        console.log('------------------------------------');
    }

    if (playerScore == computerScore) {
        console.log('Tied! No Winner');
    } else if (playerScore > computerScore) {
        console.log ('Congratulations! You Have Won!');
    } else {
        console.log('Try Again! Nice Try!');
    }
}

