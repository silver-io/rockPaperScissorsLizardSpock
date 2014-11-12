function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.beatenBy = {
      rock: { scissors: "crushes", lizard: "crushes" },
      paper: { rock: "covers", Spock: "disproves" },
      scissors: { paper: "cuts", lizard: "decapitates" },
      lizard: { Spock: "poisons", paper: "eats" },
      Spock: { rock: "vapourises" , scissors: "smashes" },
};

Game.prototype.winner = function() {
      if(this.beatenBy[this.player1.pick][this.player2.pick] != undefined) return this.player1;
      if(this.beatenBy[this.player2.pick][this.player1.pick] != undefined) return this.player2;
      if(this.samePick) return null;
};

Game.prototype.loser = function(firstArgument) {
      if(this.winner() === null) return null;
      return this.winner() === this.player1 ? this.player2 : this.player;
};

Game.prototype.samePick = function() {
      this.player1.pick === this.player2.pick
};

Game.prototype.victoryVerb = function(winningPick, losingPick) {
      return this.beatenBy[winningPick][losingPick]
};

Game.prototype.victoryNotification = function(firstArgumen) {
      if(this.winner() === null) return "It was a draw"
      if(this.winner() !== null) return this.winner().name + "'s " + this.winner().pick + " " + this.victoryVerb(this.winner().pick,this.loser().pick) +" " + this.loser().name + "'s " + this.loser().pick
};

