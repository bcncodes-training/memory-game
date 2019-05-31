let cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];
let memoryGame; //inicializamos el objeto donde almacenaremos la clase MemoryGame
let coupleCards = []; //inicializamos el array de 2 cartas para comparar
let counterPairs = document.getElementById('pairs_guessed'); //inicializamos el contador de parejas acertadas
let counterPairsClicked = document.getElementById('pairs_clicked'); //inicializamos el contador de parejas

addEventListener("load", () => {
  memoryGame = new MemoryGame(cards); //creamos un nuevo objeto de la clase MemoryGame 
  let html = ""; //definimos el nuevo contenido del board
  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;//borramos el contenido del board
  createCards(memoryGame.cards); //invocamos la funcion pata crear las cartas. Pasamos las 'cards' del objeto creado 'memoryGame' como parametro
  // Bind the click event of each element to a function
  /*[].slice.call(document.getElementsByClassName("back")).forEach(element => {
    element.addEventListener("click", () => {});
  });*/

});

function createCards(cardDeck) {//funcion con parametro 'cardDeck' que sera el valor asignado en la invocacion de la funcion (en este caso 'memoryGame.cards')
  let board = document.getElementById('memory_board');
  cardDeck.forEach(e => { //por cada elemento 'e' del array 'cardDeck' creamos una carta (padre) con su back (hijo)
    //creamos carta 
    let carta = document.createElement('div');//creamos elemento
    carta.setAttribute('style', `background-image:url("./img/${e.img}"); `);//añadimos los estilos de la carta en este caso 'bacground-image...'
    carta.setAttribute('class', `card ${e.name.replace(" ", "")}`);//añadimos clase con el nombre de la carta y la clase 'card'
    //creamos la parte back que esta dentro de la carta
    let cartaback = document.createElement('div');//creamos elemento que ira dentro del anterior div
    cartaback.setAttribute('class', `back ${e.name.replace(" ", "")}`)//añadimos clase con el nombre de la carta y la clase 'back'
    cartaback.addEventListener('click', showTile);//añadimos el evento click asociado a este elemento
    carta.appendChild(cartaback); //añadimos el elemento 'back' a la carta 'card'
    board.appendChild(carta); //añadimos carta al board    
  });
}
//funcion que nos muestra la imagen de la carta seleccionada
function showTile(e) {
  e.target.setAttribute('style', 'background:inherit;');//el evento click coge su elemento ('target') y le añade atributos de estilo 'inherit' para heredar los estilos del padre 'card' y coger en herencia el 'background-image' del padre
  //console.log(e.target.getAttribute('class'));
  e.target.classList.add('front', 'blocked');//añadimos las clases al elemento

  addCardCoupleArray(e.target.classList);//añadimos la carta al array de 2 para comparar la pareja
}
//funcion para ocultar las cartas
function hideTile(className) {
  let cardsBack = document.getElementsByClassName(className); //hacemos un array de objetos con la clase del personaje
  for (let index = 0; index < cardsBack.length; index++) { //por cada uno de ellos
    if (cardsBack[index].getAttribute('class').indexOf('back') > -1) { //si en sus clases contiene la clase back, correpondiente al objeto que oculta la imagen
      cardsBack[index].setAttribute('style', ``); //suprimimos el estilo asignado previamente 'background:inherit'
      cardsBack[index].classList.remove('blocked'); //desbloqueamos la carta
    }
  }
}

//funcion que añade carta al array de 2 para comparar
function addCardCoupleArray(card) {
  coupleCards.push(`${card}`); //añadimos carta al array de 2
  if (coupleCards.length === 2) {//si el array ya tiene 2 cartas compara
    if (memoryGame.checkIfPair(coupleCards[0], coupleCards[1])) {//el metodo checkIfPair devuelve true si son pareja y false si no. El if se da si el metodo devuelve true
      console.log(`U'r awesome!!`);
      counterPairs.innerText = parseInt(counterPairs.innerText) + 1;//añadimos un punto al marcador de parejas acertadas
      if (counterPairs.innerText === '12') alert(`U'r the Fuking Master`);//Si completamos las 12 parejas
    }
    else {// si no hemos acertado la pareja
      let card1 = (coupleCards[0].split(' ')); //de la carta 1 hacemos un array de sus clases para elegir la correspondiente a su personaje
      let card2 = (coupleCards[1].split(' ')); //lo mismo que con la 1 carta
      setTimeout(() => { //dejamos un tiempo para ocultar las cartas de nuevo
        hideTile(card1[1]); //llamamos a la funcion para ocultar la 1ª carta
        hideTile(card2[1]); //llamamos a la funcion para ocultar la 2ª carta

      }, 1000);

      console.log('Loooooser')
    }
    counterPairsClicked.innerText = parseInt(counterPairsClicked.innerText) + 1;//añadimos un punto al marcador de parejas
    coupleCards = []//vaciamos el array de 2
  }
}


