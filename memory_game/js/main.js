console.log("Up and Runing");

var cards = ["queen", "queen", "king", "king"];
var cardInPlay = [];

var cardOne = cards[0];
cardInPlay.push(cardOne);
console.log("User flipped " + cardOne);


var cardTwo = cards[1];
cardInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardInPlay.length === 2) {
  if (cardOne === cardTwo){
    alert("You found a match!")
  }else{
    alert("Sorry, try again.")
  }
}
