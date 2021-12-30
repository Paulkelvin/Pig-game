'use strict';

// selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// let scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};

init();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.ceil(Math.random() * 6);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 150) {
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', init);

// modal settings
const showHowToPlayModal = document.querySelector('.show--howtoplaymodal');
const howToPlayModal = document.querySelector('.howtoplaymodal');
const closeHowToPlayModal = document.querySelector('.close-howtoplaymodal');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.documentbody');

const closeAndOpenModalCode = function () {
  howToPlayModal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

showHowToPlayModal.addEventListener('click', function () {
  closeAndOpenModalCode();
});

closeHowToPlayModal.addEventListener('click', function () {
  closeAndOpenModalCode();
});

document.addEventListener('keydown', function (E) {
  if (E.key === 'Escape') {
    closeAndOpenModalCode();
  }
});

overlay.addEventListener('click', function () {
  closeAndOpenModalCode();
});
