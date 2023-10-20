let counterValue = 0;
const decrementButtonEl = document.querySelector(
  "button[data-action='decrement']"
);
const incrementButtonEl = document.querySelector(
  "button[data-action='increment']"
);
const valueEl = document.querySelector("#value");

decrementButtonEl.addEventListener("click", () => {
  counterValue -= 1;
  return (valueEl.textContent = counterValue);
});

incrementButtonEl.addEventListener("click", () => {
  counterValue += 1;
  return (valueEl.textContent = counterValue);
});