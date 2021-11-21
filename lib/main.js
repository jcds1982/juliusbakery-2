import { CreateGrid, ClearTable, createInput } from "./lib.js";

// Add ingredient
document.querySelector("#AddIngredient").addEventListener("click", () => {
    CreateGrid("ingredientsTable");
});

// Clear table of ingredients
document.querySelector("#ClearTable").addEventListener("click", () => {
    ClearTable("ingredientsTable");
});

// Set constants
const panelA = [
    {
        panel: "panelA",
        id: "weightPerUnit",
        label: "Peso por Unidad",
        inputType: "text",
    },
    {
        panel: "panelA",
        id: "units",
        label: "Unidades",
        inputType: "text",
    },
];

// //  TODO: I need to add the validation when adding the ingredient to the table.
// //  TODO: Add method that calculate the percentages or the weight for the total recipe

function createPanel(inputs) {
    for (const item in inputs) {
        createInput(
            inputs[item].panel,
            inputs[item].id,
            inputs[item].label,
            inputs[item].inputType
        );
    }
}

function main() {
    createPanel(panelA);
}

main();
