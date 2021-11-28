import { Ingredient } from "./ingredient.js";
import language from "./language/labels.js";
import { panelA, panelB } from "./panels/panels.js";
import * as utils from "./utils/utils.js";

let ingredients = [];
let weighUnit = [];
let weightUnitIds = ["weightPerUnit", "units"];
let ingredientIds = ["ingredient", "percentage", "weightGr", "weightKg"];

// Table headers
const tempHeader = ["Acciones", "Ingredientes", "%", "gr.", "Kg."];

// Get values
function getIngredientValues() {
    let temporaryIngredient = new Ingredient();

    temporaryIngredient.id = Number(
        (Date.now() + Math.random()) * 10000
    ).toString(16);

    // Get Elements with pnb prefix
    let panelBInputs = document.querySelectorAll("[id*=pnb]");
    let calculationMethod = document.querySelector(
        '[name="calculationMethod"]:checked'
    );

    temporaryIngredient.name = document.getElementById("pnb_ingredient").value;
    temporaryIngredient.percentage =
        document.getElementById("pnb_percentage").value;
    temporaryIngredient.weightGr =
        document.getElementById("pnb_weightGr").value;

    return temporaryIngredient;
}

// EXPORT FUNCTIONS
export function addIngredient(containerId) {
    let weightUnitValidity = [];
    let ingredientInformation = getIngredientValues();
    let container = document.getElementById(containerId);
    weighUnit = [];

    // Validate values on Panel A
    weightUnitIds.forEach((id) => {
        if (weightUnitValidity.push(utils.validateNumber(id))) {
            weighUnit.push({
                field: id,
                value: parseFloat(document.getElementById(id).value),
            });
        }
    });

    // Validate Panel B
    if (!weightUnitValidity.includes(false)) {
        // Create table headers
        if (!container.innerHTML) {
            tempHeader.forEach((header) => {
                container.appendChild(utils.createCell(header));
            });
        }

        // create table
        utils.addIngredientToTable(container, ingredientInformation);

        ingredients.push(ingredientInformation);
        utils.clearValues(ingredientIds);
    }
}

export function createPanels() {
    utils.createPanel(panelA);
    utils.createPanel(panelB);
    addEventListeners();
}

function addEventListeners() {
    // Add ingredient
    document.querySelector("#AddIngredient").addEventListener("click", () => {
        addIngredient("ingredientsTable");
    });

    // Clear table of ingredients
    document.querySelector("#ClearTable").addEventListener("click", () => {
        utils.ClearTable("ingredientsTable");
    });
}
