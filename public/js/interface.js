var player1 = new Player("Computer");
var player2 = new Player("Player");
var game = new Game(player1, player2);
var choices = ["rock", "paper", "scissors", "lizard", "Spock"];

$(document).ready(function(){
      $('img').on('click', function(){
           game.player1.picks(choices[Math.floor(Math.random()*choices.length)]);
           game.player2.picks($(this).data('pick'));
           $("<li>" + game.victoryNotification() + "</li>").prependTo('#victory-messages').slideDown();
           $("#victory-messages li:gt(2)").fadeOut(1000, function(){
                  $(this).remove();
          });
      });



});