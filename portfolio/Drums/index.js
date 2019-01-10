const elements = {
  w: document.querySelector('.w'),
  a: document.querySelector('.a'),
  s: document.querySelector('.s'),
  d: document.querySelector('.d'),
  j: document.querySelector('.j'),
  k: document.querySelector('.k'),
  l: document.querySelector('.l'),
  allDrums: document.querySelectorAll('.drum'),
};

const sounds = {
  crash: 'sounds/crash.mp3',
  kickBass: 'sounds/kick-bass.mp3',
  snare: 'sounds/snare.mp3',
  tom1: 'sounds/tom-1.mp3',
  tom2: 'sounds/tom-2.mp3',
  tom3: 'sounds/tom-3.mp3',
  tom4: 'sounds/tom-4.mp3',
};

const keySound = {
  w: sounds.crash,
  a: sounds.kickBass,
  s: sounds.snare,
  d: sounds.tom1,
  j: sounds.tom2,
  k: sounds.tom3,
  l: sounds.tom4,
};

const playSound = (key) => {
  const sound = new Audio(keySound[key]);
  sound.play();
};

const pressBtn = (key) => {
  const activeBtn = elements[key];

  activeBtn.classList.add('pressed');

  setTimeout(() => {
    activeBtn.classList.remove('pressed');
  }, 150);
};

const handleClick = (evt) => {
  const keyClick = evt.target.innerHTML;
  playSound(keyClick);
  pressBtn(keyClick);
};

const handlePress = (evt) => {
  const keyPress = evt.key.toLowerCase();
  playSound(keyPress);
  pressBtn(keyPress);
};

elements.allDrums.forEach((drum) => {
  drum.addEventListener('click', handleClick);
});

document.addEventListener('keypress', handlePress);
