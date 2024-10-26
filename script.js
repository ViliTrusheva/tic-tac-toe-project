const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

const cellElements = document.querySelectorAll("[data-cell]");
let circleTurn;

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  swapTurns();
}

//function to place a mark on the board (x/o)
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

//function to swap turns between player 1 and 2
function swapTurns() {
  circleTurn = !circleTurn;
}
