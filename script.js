// set up a 6 sided dice with random number generator
var dice6 = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  //test dice6
var result = dice6.roll();
  console.log(result);

//Prints dice roll to the page

function printNumber(number) {
  var numDisplay = document.getElementById('numDisplay');
  numDisplay.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};