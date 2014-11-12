describe("Rock-Paper-Scissors-Lizard-Spock", function(){
  var player1, player2, game;

  beforeEach(function(){
    player1 = new Player('Bob');
    player2 = new Player('Juan');
    game = new Game(player1, player2)
  })

  describe('rules of the game', function(){
    describe('rock', function(){

      it('should beat scissors', function(){

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);

      });

      it('should beat lizard', function(){

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1)
      })

       it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to Spock', function() {

        player1.picks('rock');
        player2.picks('Spock');
        expect(game.winner()).toBe(player2);

      });
    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat Spock', function() {

        player1.picks('paper');
        player2.picks('Spock');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to lizard', function() {

        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });
    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to Spock', function() {

        player1.picks('scissors');
        player2.picks('Spock');
        expect(game.winner()).toBe(player2);

      });
    });

    describe('lizard', function() {

      it('should beat Spock', function() {

        player1.picks('lizard');
        player2.picks('Spock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat paper', function() {

        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to scissors', function() {

        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });
    });

    describe('Spock', function(){

      it('shoud beat rock', function(){

        player1.picks('Spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

       it('should beat scissors', function() {

        player1.picks('Spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to lizard', function() {

        player1.picks('Spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to paper', function() {

        player1.picks('Spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });
    });
  });

  describe('draws', function() {

    describe('same picks', function() {

      it('No winners', function() {

        var drawResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawResults).toEqual([null, null, null]);

      });

    });

  });

  describe('victory notifications', function() {
      it('returns a notification when scissors beats paper', function(){
          player1.picks('scissors');
          player2.picks('paper');
          expect(game.victoryNotification()).toBe("Bob's scissors cuts Juan's paper")
      });



  });

});