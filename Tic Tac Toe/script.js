console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let turnVoice = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".Info").innerText =
        boxtexts[e[0]].innerText + "won";
      isgameover = true;
      document.querySelector(".imgBox").style.display = "block";
    }
  });
};

// Game Logic

let boxes = document.getElementsByClassName("box");
console.log(boxes);
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      turnVoice.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("Info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((e) => {
    e.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgBox").style.display = "none";
});
