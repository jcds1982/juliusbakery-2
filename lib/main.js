import { CreateGrid, ClearTable } from "./lib.js";

// Add ingredient
document.querySelector("#AddIngredient").addEventListener("click", () => {
    CreateGrid("ingredientsTable");
});

// Clear table of ingredients
document.querySelector("#ClearTable").addEventListener("click", () => {
    ClearTable("ingredientsTable");
});

//  TODO: I need to add the validation when adding the ingredient to the table.
//  TODO: Add method that calculate the percentages or the weight for the total recipe
