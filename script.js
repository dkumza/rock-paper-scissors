let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;
let playValues = ["rock", "paper", "scissors"];

// "PLAYER" ENTERS RANDOM(rock, paper or scissors) VALUE TO START GAME
function getPlayerChoice() {
    playerChoice = prompt("Enter value: Rock, Paper or Scissors to sart game: ");
    return playerChoice = (playerChoice.toLowerCase());
    console.log(playerChoice);
};

// RANDOM VALUE OF "COMPUTER" TO START GAME
function getComputerChoice() {
    return computerChoice = (playValues[Math.floor(Math.random() * playValues.length)]);
};

function game() {
    for (let i = 0; i < 5; i++) {
        getPlayerChoice();
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        // console.log(playerChoice);
        // console.log(computerChoice);
    }
}

game();

// PLAY ROUND

// player == pc = draw;
// rock vs paper = paper;
// rock vs scissors = rock;
// paper vs scissors = scissors;

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log('draw');
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log('rock beats scissors!')
        playerScore += 1;
        console.log("player score: ", playerScore);
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log('paper beats rock!');
        playerScore += 1;
        console.log("player score:", playerScore);
    } else {
        console.log(`${computerChoice} beats ${playerChoice}`);
        computerScore += 1;
        console.log('computer score: ', computerScore);
    }

}

if (playerScore == computerScore) {
    console.log('draw game!');
} else if (playerScore > computerScore) {
    console.log(`player wins with ${playerScore} point/points!`);
} else (`computer wins with ${computerScore} point/points!`)
