let choice = "";
let a = document.querySelector("#display");
a.value = choice;

let computerChoice = "";
let b = document.querySelector("#computer_display");
b.value = computerChoice;

let winner = "";
let c = document.querySelector("#final_result");
c.value = winner;

function send(value) {
  choice = value;
  a.value = choice;

  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    b.value = "Rock";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    b.value = "Paper";
  } else {
    b.value = "Scissor";
  }

  if (a.value == b.value) {
    c.value = "Draw";
  } else if (a.value == "Paper" && b.value == "Rock") {
    c.value = "you won";
  } else if (a.value == "Scissor" && b.value == "Paper") {
    c.value = "you won";
  } else if (a.value == "Rock" && b.value == "Scissor") {
    c.value = "you won";
  } else {
    c.value = "you loose";
  }
}
