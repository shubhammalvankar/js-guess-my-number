'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayText = (className, message) => {
  document.querySelector(className).textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // No input
    displayText('.message', '⛔️ No Number!');
  } else if (guess === secretNumber) {
    // Player wins
    displayText('.message', '🎉 Correct Number!');
    displayText('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayText('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    // Guess is wrong
    if (score > 1) {
      guess > secretNumber
        ? displayText('.message', '📈 Too High!')
        : displayText('.message', '📉 Too Low!');
      score--;
      displayText('.score', score);
    } else {
      displayText('.message', '💥 You lost the game!');
      score = 0;
      displayText('.score', score);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayText('.message', 'Start guessing...');
  displayText('.number', '?');
  displayText('.score', score);
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
