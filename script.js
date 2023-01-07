let computerScore = 0;
let playerScore = 0;
let computerChoice;
let round = 0;
let playValues = ['rock', 'paper', 'scissors'];
const btn = document.querySelectorAll('button');
const r_Score = document.querySelector('#round-no');
const p_Score = document.querySelector('#player-sc2');
const c_Score = document.querySelector('#computer-sc2');
const r_content = document.querySelector('#win');
const toogle_cont = document.querySelector('#toogle-cont');
const rr_game = document.querySelector('#rr-game');
const para1 = document.createElement('p1');
const rr_btn = document.createElement('button');

// RANDOM VALUE OF "COMPUTER" TO START GAME
function getComputerChoice() {
  return (computerChoice =
    playValues[Math.floor(Math.random() * playValues.length)]);
}

btn.forEach((button) => {
  button.addEventListener('click', () => {
    let playerChoice = button.id;
    getComputerChoice();
    playRound(playerChoice, computerChoice);
  });
});

function playRound(playerChoice, computerChoice) {
  round++;
  r_Score.innerHTML = round;
  if (playerChoice == computerChoice) {
    alert('DRAW: Computer tooked same "tool" as you did');
  } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
    alert(`Yours: ${playerChoice} wins vs Computer: ${computerChoice}`);
    playerScore += 1;
    p_Score.innerHTML = playerScore;
  } else if (playerChoice == 'paper' && computerChoice == 'rock') {
    alert(`Yours: ${playerChoice} wins vs Computer: ${computerChoice}`);
    playerScore += 1;
    p_Score.innerHTML = playerScore;
  } else {
    alert(`Computer with: ${computerChoice} wins vs yours: ${playerChoice}`);
    computerScore += 1;
    c_Score.innerHTML = computerScore;
  }

  if (playerScore == 5) {
    toogle_cont.style.display = 'none';
    // creates <p> with message with greatings
    para1.textContent = 'YOU WIN!';
    r_content.appendChild(para1);
    rr_button();
  } else if (computerScore == 5) {
    toogle_cont.style.display = 'none';
    // creates <p> with message with greatings
    para1.textContent = 'COMPUTER WINS!';
    r_content.appendChild(para1);
    rr_button();
  }
}
rr_button = () => {
  rr_btn.innerText = 'RESTART';
  rr_game.appendChild(rr_btn);
  rr_btn.addEventListener('click', () => {
    window.location.reload();
  });
};
