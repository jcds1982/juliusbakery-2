import { Ingredient } from "./ingredient.js";
import language from "./language/labels.js";
let ingredients = [];

// Table headers
const tempHeader = ["Acciones", "Ingredientes", "%", "gr.", "Kg."];

export const CreateGrid = (containerId) => {
    let ingredientInformation = GetIngredientValues();
    let container = document.getElementById(containerId);

    // Create table headers
    if (!container.innerHTML) {
        tempHeader.forEach((header) => {
            container.appendChild(CreateCell(header));
        });
    }
    // Create a new cell on the table
    for (const property in ingredientInformation) {
        if (Object.hasOwnProperty.call(ingredientInformation, property)) {
            container.appendChild(CreateCell(ingredientInformation[property]));
        }
    }

    ingredients.push(ingredientInformation);
    clearIngredientsValues();
    console.log(`Ingredient Information ${JSON.stringify(ingredients)}`);
};

const CreateCell = (cell) => {
    let div = document.createElement("div");
    div.classList.add("table__cell");
    div.innerHTML = cell;
    return div;
};

// Validate whether user will use percentages or weight

// Get values
const GetIngredientValues = () => {
    let temporaryIngredient = new Ingredient();

    temporaryIngredient.id = Number(
        (Date.now() + Math.random()) * 10000
    ).toString(16);

    temporaryIngredient.name = document.getElementById("ingredient").value;
    temporaryIngredient.percentage =
        document.getElementById("percentage").value;
    temporaryIngredient.weightGr = document.getElementById("weightGr").value;
    temporaryIngredient.weightKg = document.getElementById("weightKg").value;

    return temporaryIngredient;
};

export function ClearTable(containerId) {
    let container = document.getElementById(containerId);
    container.innerHTML = "";
    ingredients = [];
}

function clearIngredientsValues() {
    console.log("Clear Values");
    document.getElementById("ingredient").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("weightGr").value = "";
    document.getElementById("weightKg").value = "";
}
