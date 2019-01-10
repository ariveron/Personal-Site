const dice1 = document.querySelector('.img1');
const dice2 = document.querySelector('.img2');
const heading = document.querySelector('h1');

const randomNumber16 = () => {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  return randomNumber;
};

const randomNumber1 = randomNumber16();
const randomNumber2 = randomNumber16();

dice1.setAttribute('src', `images/dice${randomNumber1}.png`);
dice2.setAttribute('src', `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  heading.innerText = 'Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
  heading.innerText = 'Player 2 Wins!';
} else {
  heading.innerText = 'Draw';
}
