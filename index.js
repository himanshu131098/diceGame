var button = document.querySelector(".btn");
button.addEventListener("click", game);

function game() {

  // Player One Play
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage1 = "dice" + randomNumber1 + ".png";
  var randomImageSource1 = "images/" + randomDiceImage1;
  var image1 = document.querySelector(".dice1");
  image1.setAttribute("src", randomImageSource1);

  // Player Two Play
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSource2 = "images/" + randomDiceImage2;
  var image2 = document.querySelector(".dice2");
  image2.setAttribute("src", randomImageSource2);

  var winner = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "Bachuu Wins";
    document.querySelector(".p1").style.visibility = "hidden";
    document.querySelector(".p2").style.visibility = "visible";
  } else if (randomNumber1 < randomNumber2) {
    winner.innerHTML = "Buddy Wins";
    document.querySelector(".p1").style.visibility = "visible";
    document.querySelector(".p2").style.visibility = "hidden";
  } else {
    winner.innerHTML = "Draw!";
    document.querySelector(".p1").style.visibility = "visible";
    document.querySelector(".p2").style.visibility = "visible";
  }
}
