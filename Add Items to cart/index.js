let quantity = 0;
a = document.querySelector("#para");
a.innerText = `Your bag has ${quantity} items`;

let b = document.querySelector(".bag");
b.onclick = function () {
  quantity++;
  a.innerText = `Your bag has ${quantity} items`;
};

let c = document.querySelector(".wishlist");
c.onclick = function () {
  quantity--;
  a.innerText = `Your bag has ${quantity} items`;
};

let d = document.querySelector(".add");
d.onclick = function () {
  quantity = quantity + 2;
  a.innerText = `Your bag has ${quantity} items`;
};
