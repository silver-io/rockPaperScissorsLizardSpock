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

Game.prototype.samePick = function() {
  this.player1.pick === this.player2.pick
};
