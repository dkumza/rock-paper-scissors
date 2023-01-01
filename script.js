let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;
let playValues = ["rock", "paper", "scissors"];


getPlayerChoice();
console.log(playerChoice);
computerChoice = getComputerChoice();
console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));

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

// PLAY ROUND
function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log('Draw');
    }

}






// getComputerChoice();
// playRound();