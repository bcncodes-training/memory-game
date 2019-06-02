let cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

let memoryGame;
let pickedPair = [];

addEventListener('load', () => {
  memoryGame = new MemoryGame(cards);
  let suffledCards = memoryGame.shuffleCard();

  let container = document.getElementById('memory_board');

  // Add all the div's to the HTML
  suffledCards.forEach(card => {
    // External DIV
    let image_path = `url('img/${card.img}')`;
    let div_ext = document.createElement('div');
    div_ext.className = 'card ' + card.name;
    div_ext.style.backgroundImage = image_path;
    // Internal DIV
    let div_int = document.createElement('div');
    div_int.className = 'back';
    div_ext.appendChild(div_int);
    container.appendChild(div_ext);
  });

  // Bind the click event of each element to a function
  [].slice.call(document.getElementsByClassName('back')).forEach(element => {
    element.addEventListener('click', e => {
      turnCardUp(e);
    });
  });
});

function turnCardUp(e) {
  if (pickedPair.length < 2) {
    if (!e.target.classList.contains('turn')) {
      e.target.classList.add('turn');
      pickedPair.push(e.target);
      // If there are two cards selected
      if (pickedPair.length === 2) {
        setTimeout(function() {
          memoryGame.incrementChecked;
          let firstCard = pickedPair[0].classList.remove('card');
          let SecondCard = pickedPair[1].classList.remove('card');
          if (firstCard === SecondCard) {
            memoryGame.incrementGuessed;
            //pickedPair[0].parentNode.classList.add('blocked');
            //pickedPair[1].parentNode.classList.add('blocked');
          } else {
            turnCardDown(pickedPair[0]);
            turnCardDown(pickedPair[1]);
          }
          pickedPair = [];
        }, 2000);
      }
    }
  }
}

function turnCardDown(card) {
  if (card.classList.contains('turn')) card.classList.remove('turn');
}
