class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCard() {
    let m = cards.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = cards[m];
      cards[m] = cards[i];
      cards[i] = t;
    }

    return cards;
  }

  incrementChecked() {
    this.pairsClicked++;
  }
  incrementGuessed() {
    this.pairsGuessed++;
  }

  checkIfPair(firstCard, secondCard) {}

  finished() {}
}
