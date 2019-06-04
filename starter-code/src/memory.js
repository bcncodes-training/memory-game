class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCard() {
    let newCards = this.cards.slice();

    let m = newCards.length,
      t,
      i;

    // Mientras haya cartas que barajar…
    while (m) {
      // Elige un elemento restante…
      i = Math.floor(Math.random() * m--);

      // y lo intercambia con el elemento actual.
      t = newCards[m];
      newCards[m] = newCards[i];
      newCards[i] = t;
    }

    return newCards;
  }

  checkIfPair(firstCard, secondCard) {
    let arePair = false;
    if (firstCard === secondCard) {
      this.pairsGuessed += 1;
      arePair = true;
    }
    this.pairsClicked += 1;
    return arePair;
  }

  finished() {
    if(this.pairsGuessed === 0) return false;
    return (this.cards.length / 2) == this.pairsGuessed;
  }
}
