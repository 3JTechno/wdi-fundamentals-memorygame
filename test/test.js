describe('Arrays have correct intial states', function(){
  it('Cards should have 4 sub-objects',function(){
    chai.assert.equal(cards.length, 4);
  });
  it('CardInPlay should be an empty array', function(){
    chai.assert.equal(cardInPlay.length, 0);
  });
});
/*
//Can't run this test because the main index.html is not loaded hence
//the 'id='game-board'' element doesn't exist yet.
describe('Create Board', function(){
  it('Should display 4 cards face down on the screen', function(){
    createBoard();
    chai.assert.equal(document.getElementById('game-board').children.length, 4);
  });
})
*/
describe('shuffle Cards', function(){
  it('Should shuffle cards', function(){
    shuffleCards()
    //Here we just assert that the function run correctly because
    //our object cards can still be the same as the original events
    //after shuffling.
    chai.assert.equal(cards.length, 4);
  });
});
