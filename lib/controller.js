import { Ingredient } from "./ingredient.js";
import language from "./language/labels.js";
import {
    panelA,
    panelB,
    weightUnitIds,
    ingredientIds,
    tableHeaders,
} from "./panels/panels.js";
import * as utils from "./utils/utils.js";

let ingredients = [];
let totals = {
    totalThough: 0,
    totalWeightGr: 0,
    totalWeightKg: 0,
    totalPercentage: 0,
};

// Get values
function getIngredientValues() {
    let temporaryIngredient = new Ingredient();

    temporaryIngredient.id = Number(
        (Date.now() + Math.random()) * 10000
    ).toString(16);

    temporaryIngredient.name = document.getElementById("pnb_ingredient").value;
    temporaryIngredient.percentage =
        document.getElementById("pnb_percentage").value;

    return temporaryIngredient;
}

function addIngredient(containerId) {
    let weightUnitValidity = [];
    let allInputsValid = [];
    let ingredientInformation = getIngredientValues();
    let container = document.getElementById(containerId);
    let weightUnit = {};
    let percentages = [];

    //validate ingredient information before adding it to the table`
    allInputsValid.push(utils.validateBlank("pnb_ingredient"));
    allInputsValid.push(utils.validateNumber("pnb_percentage"));
    allInputsValid.push(utils.validateNumber("weightPerUnit"));
    allInputsValid.push(utils.validateNumber("units"));

    console.log(`allInputsValid --> ${allInputsValid}`);
    if (allInputsValid.includes(false)) {
        return;
    }

    weightUnit.weightPerUnit = parseFloat(
        document.getElementById("weightPerUnit").value
    );
    weightUnit.units = parseFloat(document.getElementById("units").value);
    weightUnit.totalThough = parseFloat(
        weightUnit.units * weightUnit.weightPerUnit
    );

    // TODO: Check whether the ingredient is flour. I need to check whether is Flour field is true.

    // Validate Panel B
    if (!weightUnitValidity.includes(false)) {
        // Create table headers

        if (ingredients.length) {
            percentages = ingredients.map((ingredient) => {
                return parseFloat(ingredient.percentage);
            });
            weightUnit.totalPercentage =
                percentages.reduce((prev, current) => {
                    return parseFloat(prev) + parseFloat(current);
                }) + parseFloat(ingredientInformation.percentage);
        } else {
            weightUnit.totalPercentage = parseFloat(
                ingredientInformation.percentage
            );
        }

        ingredients.push(ingredientInformation);
        calculateWeight(ingredients, weightUnit);
        // Prepare footer
        let footer = [
            " ",
            " ",
            totals.totalPercentage,
            totals.totalWeightGr,
            totals.totalWeightKg,
        ];

        let table = {
            containerId: containerId,
            header: tableHeaders,
            footer: footer,
        };
        utils.drawTable(container, ingredients, table);
        clearIngredientValues();
        utils.clearValues(ingredientIds);
        document.getElementById("pnb_ingredient").focus();
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
}

function calculateWeight(ingredients, weightUnit) {
    totals.totalWeightGr = 0;
    totals.totalWeightKg = 0;
    totals.totalPercentage = 0;
    ingredients.forEach((ingredient) => {
        ingredient.weightGr = parseInt(
            ((ingredient.percentage * 100) / weightUnit.totalPercentage / 100) *
                weightUnit.totalThough
        );
        ingredient.weightKg = parseFloat(ingredient.weightGr / 1000).toFixed(2);

        totals.totalWeightGr += parseFloat(ingredient.weightGr);
        totals.totalWeightKg += parseFloat(ingredient.weightKg);
        totals.totalPercentage += parseFloat(ingredient.percentage);
    });
}
