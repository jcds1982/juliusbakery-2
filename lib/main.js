import { CreateGrid, ClearTable, createPanel } from "./lib.js";
import { panelA, panelB } from "./panels/panels.js";

// //  TODO: I need to add the validation when adding the ingredient to the table.
// //  TODO: Add method that calculate the percentages or the weight for the total recipe

function main() {
    createPanel(panelA);
    createPanel(panelB);
    addEventListeners();
}

function addEventListeners() {
    // Add ingredient
    document.querySelector("#AddIngredient").addEventListener("click", () => {
        CreateGrid("ingredientsTable");
    });

    // Clear table of ingredients
    document.querySelector("#ClearTable").addEventListener("click", () => {
        ClearTable("ingredientsTable");
    });
}

main();
