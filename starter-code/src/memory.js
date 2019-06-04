class MemoryGame { 
    constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked;
    this.pairsGuessed;
    };

    init() {
        let element;
        let HtmlFinal = "";
        let html = "";
        let url,styleTxt;
        let y = 0;

        this.pairsClicked = 0;
        this.pairsGuessed = 0;
        document.getElementById('pairs_clicked').innerHTML = this.pairsClicked;
        document.getElementById('pairs_guessed').innerHTML = this.pairsGuessed;
        
        this.cards = this.shuffleCard(this.cards);

        this.cards.forEach(function(carta){
          element = document.createElement('div');
          element.setAttribute('class', 'card');
          //element.setAttribute('id', 'casilla'+y);
          url = 'url(img/'+carta.img + ')';
          styleTxt = 'background-image:'+url+';';
          element.setAttribute('style', styleTxt);
          html = element.outerHTML;
          html = html.replace('</div>','');
          HtmlFinal+= html;
          //
          element = document.createElement('div');
          element.setAttribute('class', 'back');
          element.setAttribute('id', 'casilla'+y);
          html = element.outerHTML;
          HtmlFinal+= html + '</div>'
          y++;
        });

        document.getElementById("memory_board").innerHTML = HtmlFinal;
        [].slice.call(document.getElementsByClassName("back")).forEach(element => {
            element.addEventListener("click", () => {this.clickCard(element)});
          });
    }

    clickCard(e) {
        let contenedor = document.getElementById(e.id);
        let id = e.id;
        // Solo entramos si la casilla está boca abajo
        if(contenedor.outerHTML.indexOf('blocked')<0 && this.pickedCards.length<2) {
            id = parseInt(id.replace('casilla',''));
            contenedor.setAttribute('style', 'background-image:inherit;');
            contenedor.setAttribute('class','back blocked');
            this.pickedCards.push(id);
            if(this.pickedCards.length == 2) {
                // Entra la segunda Carta
                if(!this.checkIfPair(this.cards[this.pickedCards[0]],this.cards[this.pickedCards[1]])) {
                    // No son iguales
                    // Volvemos a poner las cartas boca abajo
                    setTimeout(() => {
                        contenedor.removeAttribute('style');
                        contenedor.setAttribute('class','back');
                        contenedor = document.getElementById('casilla'+this.pickedCards[0]);
                        contenedor.removeAttribute('style');
                        contenedor.setAttribute('class','back');
                        // Vaciamos el array pickedCards
                        this.pickedCards.length = [];               
                    }, 1000);    
                } else {
                    // Vaciamos el array pickedCards
                    this.pickedCards.length = [];               
                }
                // El juego termina si llegamos a 12 en pairsGuessed
                if(this.pairsGuessed==12)
                    this.finished();
            }
        }
      }

    shuffleCard(cardsArr) {
        let elements = cardsArr.length;
        let newCards = new Array;
        let numero;
        for(let i = 0; i<elements; i++) {
            numero = Math.floor(Math.random()*cardsArr.length);
            newCards.push(cardsArr[numero]);
            cardsArr.splice(numero, 1);
        }
        return newCards;
    }

    checkIfPair(firstCard, secondCard) {
        let iguales = (firstCard.name === secondCard.name);
        this.pairsClicked++;
        let contenedor = document.getElementById('pairs_clicked');
        contenedor.innerHTML = this.pairsClicked;
        if(iguales) {
            this.pairsGuessed++;
            contenedor = document.getElementById('pairs_guessed');
            contenedor.innerHTML = this.pairsGuessed;
        }
        return iguales;
    }

    finished() {
        alert("¡¡¡¡ LO CONSEGUISTE !!!!");
        // Relanzamos el juego
        this.init();
    };
}
