/* Game variables */

const cards = document.querySelectorAll('.game-cards');

let hasFlippedCard = false;
let disableCards = false;
let firstCard, secondCard;
let cardsArray = cards;
let cardsMatchArray = [];


let levels; /* Identify's levels at start of game and applies appropriate level */
if(window.location.pathname.indexOf("padawan") != -1) {
    difficulty = "PADAWAN";
} else if(window.location.pathname.indexOf("knight") != -1) {
    difficulty = "KNIGHT";
} else if(window.location.pathname.indexOf("master") != -1) {
    difficulty = "MASTER";
}

let startTime;
if(difficulty === "PADAWAN") {
    startTime = 60;
} else if(difficulty === "KNIGHT") {
    startTime = 70;
} else if(difficulty === "MASTER") {
    startTime = 90;
}

/* Ready to Start New Game */
function startGame() { /* Removes Overlay Text */
    overlay.classList.remove('visible');
    };

let overlay = document.getElementById("game-text");
let timer = document.querySelector(".time-remaining");
let moves = document.getElementById("card-moves");


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
    /* Adds cards to an array*/
    cardsMatchArray.push(firstCard);
    cardsMatchArray.push(secondCard);
    /* When the amount of cards in the cardsMatched array equal to the same amount in the cards array game will stop and open the win funtion */
    if(cardsMatchArray.length === cardsArray.length) {
        win();
    }

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


/* Shuffles cards at start of each game */
(function shuffleCards() {
    if(difficulty === "PADAWAN") {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    } else if(difficulty === "KNIGHT") {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 16);
            card.style.order = randomPos;
        });
    } else {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 20);
        });
    }
})();





cards.forEach(card => card.addEventListener('click', flipCard));
overlay.addEventListener("click", startGame); /* when clicked overlay text disappears*/