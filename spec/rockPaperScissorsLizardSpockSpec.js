describe("Rock-Paper-Scissors-Lizard-Spock", function(){
  var player1, player2, game;

  beforeEach(function(){
    player1 = new Player;
    player2 = new Player;
    game = new Game(player1, player2)
  })

  describe('rules of the game', function(){
    describe('rock', function(){
      it('should beat scissors', function(){
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

    });

  });

});