const recipeList = document.getElementById("recipeList");
const addRecipeBtn = document.getElementById("addRecipeBtn");
const addRecipeModal = document.getElementById("addRecipeModal");
const addRecipeForm = document.getElementById("addRecipeForm");
addRecipeBtn.addEventListener("click", () => {
  addRecipeModal.style.display = "block";
});
addRecipeModal.querySelector(".close").addEventListener("click", () => {
  addRecipeModal.style.display = "none";
});
addRecipeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const recipeName = document.getElementById("recipeName").value;
  const ingredients = document.getElementById("ingredients").value;
  const instructions = document.getElementById("instructions").value;
  displayRecipe(recipeName, ingredients, instructions);
  addRecipeModal.style.display = "none";
  addRecipeForm.reset();
});
function displayRecipe(name, ingredients, instructions) {
  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add("recipe");
  const nameElement = document.createElement("h3");
  nameElement.textContent = name;
  const ingredientsElement = document.createElement("p");
  ingredientsElement.textContent = "Ingredients: " + ingredients;
  const instructionsElement = document.createElement("p");
  instructionsElement.textContent = "Instructions: " + instructions;
  recipeList.style.backgroundColor = "#ffd1d1";
  recipeDiv.style.border = "1px solid rgb(255, 201, 201)";
  recipeDiv.appendChild(nameElement);
  recipeDiv.appendChild(ingredientsElement);
  recipeDiv.appendChild(instructionsElement);
  recipeList.appendChild(recipeDiv);
}
