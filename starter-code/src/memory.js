class MemoryGame {
  constructor(cards) {
    this.cards = cards;
  };

  shuffleCard(cardsArr) {// recibe un array de cartas y devuelve otro con las cartas barajadas
    let shuffled = []; // definimos el array de cartas barajadas
    /// 'forEach' mode
    cardsArr.forEach(e => {// Cada carta de 'cardsArr' la añadimos al nuevo array de cartas 'shuffled' en una posicion aleatoria
      shuffled.splice(Math.floor(Math.random() * (shuffled.length + 1)), 0, e);
    });
    /// 'for' mode
    /*for (let i = 0; i < cardsArr.length; i++) {// Cada carta de 'cardsArr' la añadimos al nuevo array de cartas 'shuffled' en una posicion aleatoria
      shuffled.splice(Math.floor(Math.random()*(shuffled.length+1)),0,cardsArr[i]);
    }*/
    return shuffled;
  };
  checkIfPair(firstCard, secondCard) { // comprueba si las dos cartas son iguales y devuelve true o false
    if (firstCard === secondCard) {
      return true;
    } else {
      return false;
    }
  }
  finished() {
    alert(`U'r the Fuking Master`);
    window.location.reload(false); // recarga la pagina del cache
  };
}