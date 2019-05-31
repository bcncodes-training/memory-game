class MemoryGame {
  constructor(cards) {
    this.cards = cards;
  };

  shuffleCard(cardsArr) {
      let shuffled=[];
      cardsArr.forEach(e => {
        shuffled.splice(Math.floor(Math.random()*shuffled.length),0,e);
      });
      return shuffled;
  };

  checkIfPair(firstCard, secondCard) {
    if (firstCard === secondCard) {
      //console.log(firstCard)
      console.log("you win")
      return true;
    } else {
      console.log("you lose");
      return false;
    }
  }
  finished() {
    alert(`U'r the Fuking Master`);
    window.location.reload(false); 
  };
}