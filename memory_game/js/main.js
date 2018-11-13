var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardInPlay = [];

var createboard = function(){
  cardInPlay = [];
  shuffleCards();
  for (var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
  }
}

var shuffleCards = function(){
  //Move every cards one by one to a new position
  for (var i = 0; i < cards.length; i += 1){
    var cardToSwitch = cards[i];
    var newPosition = Math.floor((Math.random()*4)+0);
    //Switch current card => new position and new position cards => current position
    cards[i] = cards[newPosition]
    cards[newPosition] = cardToSwitch;
  }
}

var flipCard = function(){
  console.log(cards)
  var cardId = this.getAttribute('data-id')
  cardInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage)
  if (cardInPlay.length === 2) {
    //Here we delay the call to this function to allow
    //the second card to be displayed before the alert pop-up
    setTimeout(function(){checkForMatch();},500);
  }
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

var increaseScore = function(){
  var currentScore = document.getElementById('score').textContent;
  var newScore = parseInt(currentScore) + 1;
  document.getElementById('score').textContent = newScore;
}

var resetBoard = function(){
  //Remove all cards elements from the board
  for (var i = 0; i < 4; i++){
    let cardsToRemove = document.getElementById('game-board');
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
