let choice = "";
let a = document.querySelector("#display");
a.value = choice;

let computerChoice = "";
let b = document.querySelector("#computer_display");
b.value = computerChoice;

let winner = "";
let c = document.querySelector("#final_result");
c.value = winner;

let score;
let scorestr = localStorage.getItem("Score");
if (scorestr != undefined) {
  score = JSON.parse(scorestr);
} else {
  score = {
    win: 0,
    loss: 0,
    draw: 0,
  };
}

score.displayscore = function () {
  return `Win : ${score.win}   loss : ${score.loss}  Draw : ${score.draw}`;
};

function send(value) {
  choice = value;
  a.value = choice;
  computer();
  final_Result();
  Scored();
}

function computer() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    b.value = "Rock";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    b.value = "Paper";
  } else {
    b.value = "Scissor";
  }
  // return b.value;
}

function final_Result() {
  if (a.value == b.value) {
    c.value = "Draw";
    score.draw++;
  } else if (a.value == "Paper" && b.value == "Rock") {
    c.value = "you won";
    score.win++;
  } else if (a.value == "Scissor" && b.value == "Paper") {
    c.value = "you won";
    score.win++;
  } else if (a.value == "Rock" && b.value == "Scissor") {
    c.value = "you won";
    score.win++;
  } else {
    c.value = "you loose";
    score.loss++;
  }
}

function Scored() {
  localStorage.setItem("Score", JSON.stringify(score));
  let d = document.querySelector("#score");
  d.innerText = `${score.displayscore()}`;
}

function reset() {
  localStorage.clear();
  score = {
    win: 0,
    loss: 0,
    draw: 0,
    displayscore: function () {
      return `Win : ${score.win}   loss : ${score.loss}  Draw : ${score.draw}`;
    },
  };
  Scored();
}
