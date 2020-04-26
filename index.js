var button = document.querySelector(".btn");
button.addEventListener("click", game);

function game() {

  var randomNumber1 = Math.random();
  randomNumber1 = randomNumber1 * 6;
  randomNumber1 = Math.floor(randomNumber1) + 1;

  if (randomNumber1 == 1) {
    document.querySelector(".name1 img").setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 == 2) {
    document.querySelector(".name1 img").setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 == 3) {
    document.querySelector(".name1 img").setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 == 4) {
    document.querySelector(".name1 img").setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 == 5) {
    document.querySelector(".name1 img").setAttribute("src", "images/dice5.png");
  } else {
    document.querySelector(".name1 img").setAttribute("src", "images/dice6.png");
  }

  var randomNumber2 = Math.random();
  randomNumber2 = randomNumber2 * 6;
  randomNumber2 = Math.floor(randomNumber2) + 1;

  if (randomNumber2 == 1) {
    document.querySelector(".name2 img").setAttribute("src", "images/dice1.png");
  } else if (randomNumber2 == 2) {
    document.querySelector(".name2 img").setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 == 3) {
    document.querySelector(".name2 img").setAttribute("src", "images/dice3.png");
  } else if (randomNumber2 == 4) {
    document.querySelector(".name2 img").setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 == 5) {
    document.querySelector(".name2 img").setAttribute("src", "images/dice5.png");
  } else {
    document.querySelector(".name2 img").setAttribute("src", "images/dice6.png");
  }

  var winner = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "Bachuu Wins";
    document.querySelector(".p1").style.visibility="hidden";
    document.querySelector(".p2").style.visibility="visible";
  } else if (randomNumber1 < randomNumber2) {
    winner.innerHTML = "Buddy Wins";
    document.querySelector(".p1").style.visibility="visible";
    document.querySelector(".p2").style.visibility="hidden";
  } else {
    winner.innerHTML = "Draw!";
    document.querySelector(".p1").style.visibility="visible";
    document.querySelector(".p2").style.visibility="visible";
  }
}
