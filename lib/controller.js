import { Ingredient } from "./ingredient.js";
import language from "./language/labels.js";
import { panelA, panelB } from "./panels/panels.js";
import * as utils from "./utils/utils.js";

let ingredients = [];
let weightUnit = [];
let weightUnitIds = ["weightPerUnit", "units"];
let ingredientIds = ["ingredient", "percentage", "weightGr"];

// Table headers
const tempHeader = ["Acciones", "Es Harina", "Ingredientes", "%", "gr.", "Kg."];

// Get values
function getIngredientValues() {
    let temporaryIngredient = new Ingredient();

    temporaryIngredient.id = Number(
        (Date.now() + Math.random()) * 10000
    ).toString(16);

    temporaryIngredient.name = document.getElementById("pnb_ingredient").value;
    temporaryIngredient.percentage =
        document.getElementById("pnb_percentage").value;
    temporaryIngredient.isFlour = document.getElementById("pnb_flour").checked;

    return temporaryIngredient;
}

function addIngredient(containerId) {
    let weightUnitValidity = [];
    let allInputsValid = [];
    let ingredientInformation = getIngredientValues();
    let container = document.getElementById(containerId);
    weightUnit = [];

    // Validate values on Panel A
    weightUnitIds.forEach((id) => {
        if (weightUnitValidity.push(utils.validateNumber(id))) {
            weightUnit.push({
                field: id,
                value: parseFloat(document.getElementById(id).value),
            });
        }
    });

    //validate ingredient information before adding it to the table`
    allInputsValid.push(utils.validateBlank("pnb_ingredient"));
    allInputsValid.push(utils.validateNumber("pnb_percentage"));

    if (allInputsValid.includes(false)) {
        return;
    }

    // Add Total though information
    weightUnit.push({
        field: "totalThought",
        value: weightUnit[0].value * weightUnit[1].value,
    });

    // TODO: Check whether the ingredient is flour. I need to check whether is Flour field is true.

    // Validate Panel B
    if (!weightUnitValidity.includes(false)) {
        // Create table headers
        if (!container.innerHTML) {
            tempHeader.forEach((header) => {
                container.appendChild(utils.createCell(header));
            });
        }

        ingredientInformation.weightGr =
            weightUnit[2].value * ingredientInformation.percentage;

        ingredientInformation.weightKg = ingredientInformation.weightGr / 1000;

        utils.addRow(container, ingredientInformation);
        ingredients.push(ingredientInformation);
        utils.clearValues(ingredientIds);

        console.log("ingredientInformation ", ingredientInformation);
        console.log("weightUnit ", weightUnit);

        if (ingredients.length) {
            utils.enableDisableRadioButtons("disable");
        }

        clearIngredientValues();
    }
}

function addEventListeners() {
    // Add ingredient
    document.querySelector("#AddIngredient").addEventListener("click", () => {
        addIngredient("ingredientsTable");
    });

    // Clear table of ingredients
    document.querySelector("#ClearTable").addEventListener("click", () => {
        clearTableAndResetValues("ingredientsTable");
    });
}

export function createPanels() {
    utils.createPanel(panelA);
    utils.createPanel(panelB);
    addEventListeners();
}

function clearTableAndResetValues(containerId) {
    ingredients = [];
    utils.clearTable(containerId);
}

function clearIngredientValues() {
    document.getElementById("pnb_ingredient").value = "";
    document.getElementById("pnb_percentage").value = "";
    document.getElementById("pnb_flour").checked = false;
}
