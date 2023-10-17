// set up a 20 sided dice with random number generator
var dice20 = {
    sides: 20,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

//Prints dice roll to the page

function printNumber(number) {
  var numDisplay = document.getElementById('numDisplay20die');
  numDisplay.innerHTML = number;
}

var button = document.getElementById('button20die');

button.onclick = function() {
  var result = dice20.roll();
  printNumber(result);
};

//test dice6
var result = dice20.roll();
  console.log(result);