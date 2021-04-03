const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
  "black",
  "#FF0000",
  "green",
  "#E0BOFF",
  "#FF7F00",
  "#EC3B83",
  "#007FFF",
];

button.addEventListener("click", changeBackground);

var sıra = 0;

function changeBackground() {
 

  if (sıra == 7) sıra = 0;
  const secilenRenk = colors[sıra];
  sıra++;
  body.style.backgroundColor = secilenRenk;
}