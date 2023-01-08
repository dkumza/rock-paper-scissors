let computerScore = 0;
let playerScore = 0;
let computerChoice;
let round = 0;
let playValues = ['rock', 'paper', 'scissors'];
const btn = document.querySelectorAll('.btn-1');
const r_Score = document.querySelector('.round-no');
const p_Score = document.querySelector('#player-score');
const c_Score = document.querySelector('#pc-score');
const p_chose = document.querySelector('#player-choose');
const pc_chose = document.querySelector('#pc-choose');
const toogle_cont = document.querySelector('#btn-play');
const rr_game = document.querySelector('#restart');
const toogle_game_info = document.querySelector('#game-info');

function createPlayerWins() {
  const para = document.createElement('p');
  para.innerText = 'Player WINS!';
  para.style.cssText = `font-size: 48px`;
  document.getElementById('winner').appendChild(para);
}

function createPcWins() {
  const para = document.createElement('p');
  para.innerText = 'Computer WINS...';
  para.style.cssText = `font-size: 48px`;
  document.getElementById('winner').appendChild(para);
}

function draw_game() {
  const n_list = document.createElement('li');
  const n_list_txt = document.createTextNode('Draw');
  n_list.appendChild(n_list_txt);
  const list = document.getElementById('history-list');
  list.insertBefore(n_list, list.children[0]);
  document.querySelector('#game-cont').style.cssText = `
  background-color: rgba(235, 203, 139, 0.3);`;
}

function player_round(playerChoice, computerChoice) {
  const n_list = document.createElement('li');
  const n_list_txt = document.createTextNode(
    `Yours: ${playerChoice} wins vs Computer: ${computerChoice}`
  );
  n_list.appendChild(n_list_txt);
  const list = document.getElementById('history-list');
  list.insertBefore(n_list, list.children[0]);
  playerScore += 1;
  p_Score.innerHTML = playerScore;
  document.querySelector('#game-cont').style.cssText = `
  background-color: rgba(163, 190, 140, 0.3);`;
}

function pc_round(playerChoice, computerChoice) {
  const n_list = document.createElement('li');
  const n_list_txt = document.createTextNode(
    `Computer with: ${computerChoice} wins vs yours: ${playerChoice}`
  );
  n_list.appendChild(n_list_txt);
  const list = document.getElementById('history-list');
  list.insertBefore(n_list, list.children[0]);
  computerScore += 1;
  c_Score.innerHTML = computerScore;
  document.querySelector('#game-cont').style.cssText = `
  background-color: rgba(208, 135, 112, 0.3);`;
}

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
    p_chose.innerHTML = playerChoice.toUpperCase();
    pc_chose.innerHTML = computerChoice.toUpperCase();
  });
});

function playRound(playerChoice, computerChoice) {
  round++;
  r_Score.innerHTML = round;
  if (playerChoice == computerChoice) {
    draw_game();
  } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
    player_round(playerChoice, computerChoice);
  } else if (playerChoice == 'paper' && computerChoice == 'rock') {
    player_round(playerChoice, computerChoice);
  } else {
    pc_round(playerChoice, computerChoice);
  }

  function player_wins() {
    toogle_cont.style.display = 'none';
    toogle_game_info.style.display = 'none';
    const n_list = document.createElement('li');
    const n_list_txt = document.createTextNode(`YOU WIN!`);
    n_list.appendChild(n_list_txt);
    const list = document.getElementById('history-list');
    list.insertBefore(n_list, list.children[0]);
  }

  function pc_wins() {
    toogle_cont.style.display = 'none';
    toogle_game_info.style.display = 'none';
    const n_list = document.createElement('li');
    const n_list_txt = document.createTextNode(`COMPUTER WINS...`);
    n_list.appendChild(n_list_txt);
    const list = document.getElementById('history-list');
    list.insertBefore(n_list, list.children[0]);
  }

  if (playerScore == 5) {
    player_wins();
    createPlayerWins();
    // r_content.appendChild(para1);
  } else if (computerScore == 5) {
    pc_wins();
    createPcWins();
  }
}

rr_game.addEventListener('click', () => {
  window.location.reload();
});
