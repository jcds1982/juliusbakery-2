import { Ingredient } from "./ingredient.js";
import language from "./language/labels.js";
// Ingredients
let ingredients = [];

// Table headers
const tempHeader = ["Acciones", "Ingredientes", "%", "gr.", "Kg."];

export const CreateGrid = (containerId) => {
    // containerId = "ingredientsTable";
    console.log(language);
    let row = [];
    let ingredientInformation = GetIngredientValues();
    let container = document.getElementById(containerId);

    // Create table headers
    if (!container.innerHTML) {
        tempHeader.forEach((header) => {
            container.appendChild(CreateCell(header));
        });
    }

    console.log("ingredientInformation ", ingredientInformation);
    ingredientInformation.forEach((cell) => {
        container.appendChild(CreateCell(cell.value));
    });
    ingredients.push(row);

    let tempIngredient = new Ingredient(1, 2, 3, 4, 5);
    console.log(tempIngredient);
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
    let actions = "Edit / Remove";
    let index = Number((Date.now() + Math.random()) * 10000).toString(16);
    let ingredient = document.getElementById("ingredient").value;
    let percentage = document.getElementById("percentage").value;
    let weightGr = document.getElementById("weightGr").value;
    let weightKg = document.getElementById("weightKg").value;

    return [
        { title: "index", value: index },
        { title: "ingredient", value: ingredient },
        { title: "percentage", value: percentage },
        { title: "weightGr", value: weightGr },
        { title: "weightKg", value: weightKg },
    ];
};

export function ClearTable(containerId) {
    let container = document.getElementById(containerId);
    container.innerHTML = "";
}
