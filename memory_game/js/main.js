console.log("Up and Runing");

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

var checkForMatch = function(){
  if (cardInPlay.length === 2) {
    if (cardInPlay[0] === cardInPlay[1]){
      alert("You found a match!");
    }else{
      alert("Sorry, try again.");
    }
  }
}
var flipCard = function(cardId){

  console.log("User flipped " + cards[cardId].rank);
  console.log("User flipped " + cards[cardId].suit);
  console.log("User flipped " + cards[cardId].cardImage);
  cardInPlay.push(cards[cardId].rank);
  checkForMatch();
}

flipCard(0);
flipCard(2);
