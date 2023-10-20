const loginFormEl = document.querySelector(".login-form");
loginFormEl.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert("All fields must be filled!");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  form.reset();
}
