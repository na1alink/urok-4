const board = document.querySelector("#board");
const colors = [
  "#FFE4C4",
  "#FFFF00",
  "#FF7F500",
  "#CD5C5C0",
  "#9400D3",
  "#6A5ACD",
  "#00FFFF",
  "#2E8B57",
  "#808080",
  "#2F4F4F",
];

const SQUARES_NUMBER = 750;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mousemove", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}
function setColor(element) {
  const color = getRendomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#89aaed";
  element.style.boxShadow = `0 0 2px #89aaed`;
}
function getRendomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
