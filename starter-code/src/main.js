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
let pareja=[];
/*
addEventListener("load", () => {
  let memoryGame = new MemoryGame(cards);
  let html = "";

  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;
  // Bind the click event of each element to a function
  [].slice.call(document.getElementsByClassName("back")).forEach(element => {
    element.addEventListener("click", () => {});
  });

});*/

function crearCartas(){
  let board=document.getElementById('memory_board');
  cards.forEach(e => {//por cada elemento 'e' creamos una carta 'card' con un 'back en su interior'
    //creamos carta 
    let carta=document.createElement('div');//creamos elemento
    //carta.classList.add=(e.name);
    carta.setAttribute('style',`background-image:url("./img/${e.img}"); `);//añadimos los estilos de la carta en este caso 'bacground-image...'
    carta.setAttribute('class',`card ${e.name}`);//añadimos clase con el nombre de la carta y la clase 'card'
    //creamos la parte back que esta dentro de la carta
    let cartaback=document.createElement('div');//creamos elemento que ira dentro del anterior div
    cartaback.setAttribute('class',`back ${e.name}`)//añadimos clase con el nombre de la carta y la clase 'back'
    cartaback.setAttribute('style',`background-image:url("./img/${e.img}");background:none;background-color: #456783 ;`)//añadimos los estilos de la carta en este caso 'bacground-image...'  varias opciones mas
    cartaback.addEventListener('click',showTile);//añadimos el evento click asociado a este elemento
    carta.appendChild(cartaback); //añadimos el elemento 'back' a la carta
    
    
    
    board.appendChild(carta); //añadimos carta al board
  });
  /*for (let index = 0; index < card.length; index++) {
    let carta=document.createElement('div');
    carta.classList.add=(card[index].name);
    carta.setAttribute('style',`background-image:"./starter-code/img/${card[index].img}"`)
    carta.setAttribute('class',`card back`)
  
    board.appendChild(carta);  
  }*/
}

function showTile(e){
    e.target.setAttribute('style','background:inherit;');//el evento click coge su elemento ('target') i le añade atributos de estilo
    console.log(e.target.getAttribute('class'));
    e.target.classList.add('front', 'blocked');

    añadirCartaArray(e.target.getAttribute('class'));
}
function añadirCartaArray(nombre){
  pareja.push(`${nombre}`);  
  if(pareja.length === 2){
    compararCartas();
  }

}

function compararCartas(){
  if (pareja[1]===pareja[0]){
    console.log(pareja[1])
    console.log("you win")
  } else {console.log("you lose");
    pareja =[];
    let cartasEquivocadas1 = document.getElementsByClassName(pareja[1]);
    let cartasEquivocadas0 = document.getElementsByClassName(pareja[0]);
    for (let index = 0; index < cartasEquivocadas1.length; index++) {
       cartasEquivocadas1[i].setAttribute('style','background:none;background-color: #456783');
    
      
    }
      



}

}

crearCartas();

