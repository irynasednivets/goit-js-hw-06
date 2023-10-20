const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredientsEl = document.querySelector("#ingredients");
const ingredientItemsListEl = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.textContent = ingredient;
  ingredientItemEl.classList.add("item");
  return ingredientItemEl;
});
listIngredientsEl.append(...ingredientItemsListEl);
