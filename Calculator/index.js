let currentdisplay = "";
a = document.querySelector("#display");
a.value = currentdisplay;

function send(value) {
  currentdisplay = currentdisplay + `${value}`;
  a.value = currentdisplay;
}
function result() {
  currentdisplay = eval(currentdisplay);
  a.value = currentdisplay;
}
function cancel() {
  currentdisplay = "";
  a.value = currentdisplay;
}

function deleteone() {
  const arr = currentdisplay.split("");
  arr.pop();
  currentdisplay = arr.join("");
  a.value = currentdisplay;
}
