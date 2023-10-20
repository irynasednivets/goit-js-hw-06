function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const numberInput = document.querySelector("#controls input");
const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

buttonCreateEl.addEventListener("click", createBoxes);
buttonDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = parseInt(numberInput.value);
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    const size = 30 + i * 10;
    boxEl.style.width = size + "px"; 
    boxEl.style.height = size + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
    boxes.push(boxEl);
  }
  boxesEl.append(...boxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
