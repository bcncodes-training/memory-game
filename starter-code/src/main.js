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

let memoryGame, container, pairs_clicked, pairs_guessed;

addEventListener('load', () => {
  pairs_clicked = document.getElementById('pairs_clicked');
  pairs_guessed = document.getElementById('pairs_guessed');
  memoryGame = new MemoryGame(cards);
  let suffledCards = memoryGame.shuffleCard();

  // Add all the div's to the HTML
  suffledCards.forEach(card => {
    container = document.getElementById('memory_board');
    // External DIV
    let image_path = `url('img/${card.img}')`;
    let div_ext = document.createElement('div');
    div_ext.className = 'card ';
    div_ext.setAttribute('data-name', card.name);
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
  let card = e.target;
  if (memoryGame.pickedCards.length < 2) {
    if (!e.target.classList.contains('turn')) {
      e.target.classList.add('turn');
      memoryGame.pickedCards.push(card);
      // If there are two cards selected
      if (memoryGame.pickedCards.length === 2) {
        setTimeout(() => {
          let card1 = memoryGame.pickedCards[0];
          let card1Name = card1.parentNode.dataset.name;
          let card2 = memoryGame.pickedCards[1];
          let card2Name = card2.parentNode.dataset.name;
          if (memoryGame.checkIfPair(card1Name, card2Name)) {
            blockCard(card1);
            blockCard(card2);
          } else {
            turnCardDown(card1);
            turnCardDown(card2);
          }
          memoryGame.pickedCards = [];
          updateScore();
          if(memoryGame.finished()){
            alert("Game finished !!")
          }
        }, 1000);
      }
    }
  }
}

function turnCardDown(card) {
  card.classList.remove('turn');
}

function blockCard(card) {
  card.classList.add('blocked');
}

function updateScore() {
  console.log('Ejecutándose updateScore...');
  pairs_clicked.innerHTML = '' + memoryGame.pairsClicked;
  pairs_guessed.innerHTML = '' + memoryGame.pairsGuessed;
}
