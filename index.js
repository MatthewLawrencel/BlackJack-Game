let firstcard = getRandomCard();
let secondcard = getRandomCard();
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

let Player = {
  name: "Nick",
  chips: 30,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = Player.name + ": " + "$ " + Player.chips;
//randomcard() function
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
function startGame() {
  isAlive = true;
  let firstcard = getRandomCard();
  let secondcard = getRandomCard();
  cards = [firstcard, secondcard];
  sum = firstcard + secondcard;
  renderGame();
}

function renderGame() {
  //render first and second card
  cardsEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  //render sum of all cards
  sumEl.textContent = "Sum :" + " " + sum;
  if (sum <= 20) {
    message = "Do you want to Draw a new card?";
  } else if (sum === 21) {
    message = "Whooo! You got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the Game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
//cash out!
console.log(hasBlackJack);
console.log(isAlive);
