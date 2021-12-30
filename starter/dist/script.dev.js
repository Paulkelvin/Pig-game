'use strict'; // selecting elements

var player0 = document.querySelector('.player--0');
var player1 = document.querySelector('.player--1');
var score0El = document.querySelector('#score--0');
var score1El = document.getElementById('score--1');
var diceEl = document.querySelector('.dice');
var btnNew = document.querySelector('.btn--new');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');
var newGame = document.querySelector('.btn--new');
var currentScore1 = document.querySelector('#current--0');
var currentScore2 = document.querySelector('#current--1'); // score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
// let scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

var scores = [0, 0];
var currentScore = 0;
var activePlayer = 0;
var playing = true;

var init = function init() {
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

var switchPlayer = function switchPlayer() {
  document.querySelector("#current--".concat(activePlayer)).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    var dice = Math.ceil(Math.random() * 6);
    diceEl.classList.remove('hidden');
    diceEl.src = "dice-".concat(dice, ".png");

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector("#current--".concat(activePlayer)).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById("score--".concat(activePlayer)).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 150) {
      diceEl.classList.add('hidden');
      playing = false;
      document.querySelector(".player--".concat(activePlayer)).classList.toggle('player--winner');
      document.querySelector(".player--".concat(activePlayer)).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
newGame.addEventListener('click', init); // modal settings

var showHowToPlayModal = document.querySelector('.show--howtoplaymodal');
var howToPlayModal = document.querySelector('.howtoplaymodal');
var closeHowToPlayModal = document.querySelector('.close-howtoplaymodal');
var overlay = document.querySelector('.overlay');
var body = document.querySelector('.documentbody');

var closeAndOpenModalCode = function closeAndOpenModalCode() {
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