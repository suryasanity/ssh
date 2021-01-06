const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const title = document.querySelector("#title");

const colors = ["red", "blue", "crimson", "orange", "aqua", "black"];
const names = ["surya", "sfhdsjk", "sdfkjalk", "dfsjalksdj"];
body.style.backgroundColor = "brown";
btn.addEventListener("click", changeBg);
function changeBg() {
  let colorIndex = parseInt(Math.random() * colors.length);
  let nameIndex = parseInt(Math.random() * names.length);
  body.style.backgroundColor = colors[colorIndex];
  title.textContent = names[nameIndex];
}
