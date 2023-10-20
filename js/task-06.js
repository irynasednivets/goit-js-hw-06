const textInputEl = document.querySelector("#validation-input");
const validLength = parseInt(textInputEl.getAttribute("data-length"));

textInputEl.addEventListener("blur", () => {
  if (textInputEl.value.length === validLength) {
    textInputEl.classList.remove("invalid");
    textInputEl.classList.add("valid");
  } else {
    textInputEl.classList.remove("valid");
    textInputEl.classList.add("invalid");
  }
});