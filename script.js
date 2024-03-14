'use strict';

let secretNumber = Math.trunc(Math.random() * 1000) + 1;
let message = document.querySelector('.message');
let score = 1000;
let highScore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess && message !== '🎉 Correct Number!') {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess !== secretNumber && message !== '🎉 Correct Number!') {
    if (score > 0) score -= 50;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    } else {
      if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 Too low!';
      } else {
        document.querySelector('.message').textContent = '📈 Too high!';
      }
      message = document.querySelector('.message');
    }
  } else {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    message = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 1000;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'start guessing ...';
  document.querySelector('.number').style.width = '14rem';
  secretNumber = Math.trunc(Math.random() * 1000) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
