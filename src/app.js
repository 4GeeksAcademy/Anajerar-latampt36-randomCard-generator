/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateCard();
};

setInterval(generateCard, 3000);

let buttonNewCard = document.querySelector("button");
buttonNewCard.addEventListener("click", generateCard);

let widthInput = document.querySelector("#card-width");
let heightInput = document.querySelector("#card-height");

widthInput.addEventListener("change", e => {
  heightInput.value = parseInt(widthInput.valueAsNumber * 1.5);
  cardSize();
  return null;
});

heightInput.addEventListener("change", e => {
  widthInput.value = parseInt(heightInput.valueAsNumber / 1.5);
  cardSize();
  return null;
});

function cardSize() {
  let suitSize = parseInt(heightInput.valueAsNumber * 0.13333);
  let cardFontSize = parseInt(heightInput.valueAsNumber * 0.22);
  let cardFrame = document.querySelector(".full-card");
  let suitTopIcon = document.querySelector("#suit-top");
  let suitBottomIcon = document.querySelector("#suit-bottom");
  let cardNumber = document.querySelector("#card");

  cardFrame.style.width = widthInput.value + "px";
  cardFrame.style.height = heightInput.value + "px";
  suitTopIcon.style.fontSize = suitSize.toString(10) + "px";
  suitBottomIcon.style.fontSize = suitSize.toString(10) + "px";
  cardNumber.style.fontSize = cardFontSize.toString(10) + "px";
}

function generateCard() {
  const suitsArray = ["♦", "♥", "♠", "♣"];
  const colorArray = ["red", "red", "black", "black"];
  const cardArray = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];

  let suitTopIcon = document.querySelector("#suit-top");
  let suitBottomIcon = document.querySelector("#suit-bottom");
  let cardNumber = document.querySelector("#card");

  let suit = Math.floor(Math.random() * suitsArray.length);
  let card = Math.floor(Math.random() * cardArray.length);

  suitTopIcon.style.color = colorArray[suit];
  suitBottomIcon.style.color = colorArray[suit];

  suitTopIcon.innerText = suitsArray[suit];
  suitBottomIcon.innerText = suitsArray[suit];
  cardNumber.innerText = cardArray[card];
}
