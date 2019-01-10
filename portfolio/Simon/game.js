const buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

// DOM
const h1 = $('h1');
const body = $('body');

// Initializer
const init = () => {
  userClickedPattern = [];
  gamePattern = [];
  level = 0;

  h1.text('Game Over, Press Any Key to Restart');
};

// General functions
const randomInt = (start = 0, length = 4) =>
  Math.floor(Math.random() * length) + start;

// UI
const flashColorButton = (color) => {
  const button = $(`#${color}`);

  button.fadeOut(100).fadeIn(100);
};

const pressColorButton = (color) => {
  const button = $(`#${color}`);

  button.addClass('pressed');
  setTimeout(() => {
    button.removeClass('pressed');
  }, 100);
};

const playColorSound = (color) => {
  const sound = new Audio(`sounds/${color}.mp3`);

  sound.play();
};

const gameOver = () => {
  playColorSound('wrong');
  init();
  body.addClass('game-over');
  setTimeout(() => {
    body.removeClass('game-over');
  }, 200);
};

const flashColorPattern = () => {
  gamePattern.forEach((el, index) => {
    setTimeout(() => {
      flashColorButton(el);
      playColorSound(el);
    }, index * 250);
  });
};

// Logic
const nextSequence = () => {
  const randomNumber = randomInt();
  const randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  flashColorPattern();

  userClickedPattern = [];
  level += 1;
  h1.text(`Level ${level}`);
};

const checkAnswer = (currentLevel) => {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (currentLevel === level - 1) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    gameOver();
  }
};

// Event handlers
const handleClick = (event) => {
  nextSequence();
  if (level > 0) {
    const userChosenColor = event.target.id;

    userClickedPattern.push(userChosenColor);

    playColorSound(userChosenColor);
    pressColorButton(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
  }
};

const handlePress = () => {
  if (level === 0) {
    nextSequence();
  }
};

// Event listeners
$('.btn').click(handleClick);
$(document).keypress(handlePress);
