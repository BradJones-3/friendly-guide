/* Toggles text indide modal on how to play the game */
$(document).ready(function(){
    $("#rules-btn").click(function(){
      $(".game-content").toggle(550);
    });
  });
  /* Game variables */

const cards = document.querySelectorAll('.game-cards');

let hasFlippedCard = false;
let disableCards = false;
let firstCard, secondCard

function flipCard() {
    if(disableCards) return;

    this.classList.add('flip');
    /* first card to be clicked on */
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
        /* second card to be clicked on */
        hasFlippedCard = false;
        secondCard = this;
    
    doCardsMatch();
}

function doCardsMatch() {
    /* check if the cards make a pair*/
    let doMatch = firstCard.dataset.card === 
        secondCard.dataset.card;

        doMatch ? cardsMatch() : cardsDontMatch();
}

function cardsMatch(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetCards();
}

function cardsDontMatch(){
    disableCards = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        disableCards = false;
        }, 1500);
}

function resetCards() {
    [hasFlippedCard, disableCards] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() *12)
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));