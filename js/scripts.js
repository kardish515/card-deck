$(document).ready(function() {
  var suits = ["clubs", "hearts", "spades", "diamonds"];
  var cards = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
  var deck = [];
  suits.forEach(function(suit) {
    cards.forEach(function(card) {
      deck.push(card + " of " + suit);
    });
  });
  deck.forEach(function(card) {
      $("ul").append("<li>" + card + "</li>");
  });
});
