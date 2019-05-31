class MemoryGame {
  constructor(cards) {
    this.cards = cards;
  };

  shuffleCard(cardsArr) {

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




  /*finished() {
 
  };*/
}