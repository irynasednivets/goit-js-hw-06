const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log("Number of categories:", categoryItems.length);
categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("li");
  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements.length);
});
