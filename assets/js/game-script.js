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

/* Game Times for each level of the game*/
let startTime;
if(difficulty === "PADAWAN") {
    startTime = 60;
} else if(difficulty === "KNIGHT") {
    startTime = 80;
} else if(difficulty === "MASTER") {
    startTime = 100;
}

/* Ready to Start New Game By Removing Overlay Text */
function startGame() { 
    overlay.classList.remove('visible');
    };


let timeRemaining = startTime;
let overlay = document.getElementById("game-text");
let timer = document.getElementById("time-remaining");
let moves = document.getElementById("card-moves");
let movesCounter = 0;
let countDown;
let finishTime;
let finishMoves;
let score;


/* Creates a countdown timer witht the amount of time taken from the id 'time-remaining' */
function beginCountDown() {
    countDown = setInterval(function() {
        timeRemaining--;
        timer.innerHTML = timeRemaining;
        if(timeRemaining == 0)
        gameOver();
    },1000);
}

function cardFlips() {
    movesCounter++;
    moves.innerHTML = movesCounter;
    if(movesCounter == 1) {
        beginCountDown();
    }
}

function flipCard() {
    if(disableCards) return;

    this.classList.add('flip');

    
    /* first card to be clicked on */
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    } cardFlips();
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
        winner();
    }

    resetCards();
}

function cardsDontMatch(){
    disableCards = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        disableCards = false;
        }, 1000);
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
            card.style.order = randomPos;
        });
    }
})();

function winner() {
    clearInterval(countDown);
    finishTime = timer.innerHTML;
    finishMoves = movesCounter;
    $("#win-modal").modal("toggle");
    document.getElementById("timeTaken").innerHTML = finishTime;
    document.getElementById("totalMoves").innerHTML = finishMoves;

}

function gameOver() {
    clearInterval(countDown);
    $("#game-over-modal").modal("toggle");
}

cards.forEach(card => card.addEventListener('click', flipCard)); /* Listens for a click on a card and flips the card to show the player the face of said card */
overlay.addEventListener("click", startGame); /* When clicked overlay text disappears*/