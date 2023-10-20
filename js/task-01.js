const categoriesEl = document.querySelector("#categories");
const listCategoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${listCategoriesEl.length}`);

listCategoriesEl.forEach((category) => {
  const nameCategoryEl = category.firstElementChild.textContent;
  const numberCategoryItemEl = category.lastElementChild.children.length;
  console.log("\n");
  console.log(`Category: ${nameCategoryEl}`);
  console.log(`Elements: ${numberCategoryItemEl}`);
});