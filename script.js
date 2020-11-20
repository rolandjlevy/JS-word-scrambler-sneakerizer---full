const $ = (selector) => document.querySelector(selector)

const special = '#*~%&@£$,.":;!?()-+=____';
const keyCodeA = 97;
const abcArr = String.fromCharCode(...[...Array(26)].map((_) => i++, i=keyCodeA));
const abc = [...abcArr, abcArr.toUpperCase(), special].join('');
const SPEED = 75;

const convertedMax = parseInt('ffffff', 16);
const randomNum = (n) => Math.floor(Math.random() * Math.floor(n));
const randomHex = () => randomNum(convertedMax).toString(16).toUpperCase();
const randomChar = n => Math.random().toString(n);

const generate = (message) => {
  thumbsUpToggle('remove');
  const display = [...message].fill('');
  const timer = setInterval(() => {
    message.forEach((_, i) => {
      if (message[i] !== display[i]) display[i] = getRandomChar();
    });
    $('.sneakerizer').innerHTML = display.map(letter => {
      return `<span style="color:#${randomHex()}">${letter}</span>`;
    }).join('');
    if (display.join('') === message.join('')) {
      clearInterval(timer);
      thumbsUpToggle('add');
    };
  }, SPEED);
}

const getRandomChar = () => {
  const abcLength = abc.length - 1;
  const randomNum = Math.floor(Math.random() * abcLength);
  return abc[randomNum];
}

const thumbsUpToggle = (event) => {
  $('.thumbs-up').classList[event]('completed');
}

$('.btn.start').addEventListener('click', () => {
  const inputString = $('.user-input').value.replace(/ /g, "_");
  const message = Array.from(inputString);
  generate(message);
});