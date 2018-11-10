var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "Diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "Diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardInPlay = [];

var createboard = function(){
  cardInPlay = [];
  for (var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
  }
}

var increaseScore = function(){
  var currentScore = document.getElementById('score').textContent;
  var newScore = parseInt(currentScore) + 1;
  document.getElementById('score').textContent = newScore;
}

var checkForMatch = function(){
    if (cardInPlay[0] === cardInPlay[1]){
      alert("You found a match!");
      increaseScore();
      resetBoard();
      createboard();
    }else{
      alert("Sorry, try again.");
      resetBoard();
      createboard();
    }
}

var flipCard = function(){
  var cardId = this.getAttribute('data-id')
  cardInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage)
  if (cardInPlay.length === 2) {
    checkForMatch();
  }
}

var resetBoard = function(){
  for (var i = 0; i < 4; i++){
    cardsToRemove = document.getElementById('game-board');
    cardsToRemove.removeChild(cardsToRemove.firstChild);
  }
}

var resetCounter = function(){
  document.getElementById('score').textContent = 0;
  resetBoard();
  createboard();
}

createboard();
document.getElementById('reset').addEventListener('click', resetCounter);
