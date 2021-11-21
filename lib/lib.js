import { Ingredient } from "./ingredient.js";
import language from "./language/labels.js";
let ingredients = [];
let weighUnit = [];
let weightUnitIds = ["weightPerUnit", "units"];
let ingredientIds = ["ingredient", "percentage", "weightGr", "weightKg"];

// Table headers
const tempHeader = ["Acciones", "Ingredientes", "%", "gr.", "Kg."];

const CreateCell = (cell) => {
    let div = document.createElement("div");
    div.classList.add("table__cell");
    div.innerHTML = cell;
    return div;
};

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

const clearIngredientsValues = (fields) => {
    fields.forEach((fieldId) => {
        document.getElementById(fieldId).value = "";
    });
};

// WeightPerUnit
const validateNumber = (fieldId) => {
    let fieldToValidate = document.getElementById(fieldId);
    let regexDigit = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/g;
    let fieldValue = fieldToValidate.value.toString();

    if (fieldValue.match(regexDigit) && parseFloat(fieldValue) > 0) {
        fieldToValidate.classList.remove("input__error");
        return true;
    } else {
        fieldToValidate.classList.add("input__error");
        return false;
    }
};

// EXPORT FUNCTIONS
export const CreateGrid = (containerId) => {
    let weightUnitValidity = [];
    let ingredientInformation = GetIngredientValues();
    let container = document.getElementById(containerId);
    weighUnit = [];

    // Validate values on Panel A
    weightUnitIds.forEach((id) => {
        if (weightUnitValidity.push(validateNumber(id))) {
            weighUnit.push({
                field: id,
                value: parseFloat(document.getElementById(id).value),
            });
        }
    });

    // console.log(`weighUnit --> ${JSON.stringify(weighUnit)}`);

    if (!weightUnitValidity.includes(false)) {
        // Create table headers
        if (!container.innerHTML) {
            tempHeader.forEach((header) => {
                container.appendChild(CreateCell(header));
            });
        }

        // Create a new cell on the table
        for (const property in ingredientInformation) {
            if (Object.hasOwnProperty.call(ingredientInformation, property)) {
                container.appendChild(
                    CreateCell(ingredientInformation[property])
                );
            }
        }

        ingredients.push(ingredientInformation);
        clearIngredientsValues(ingredientIds);
        console.log(`Ingredient Information ${JSON.stringify(ingredients)}`);
    }
};

// Create input function
export function ClearTable(containerId) {
    let container = document.getElementById(containerId);
    container.innerHTML = "";
    ingredients = [];
}

// Create Button function
function createInput(panelId, input_id, label_text, input_type) {
    let location = document.getElementById(panelId);

    // Create input container
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("container-content");

    // Create input label
    let label = document.createElement("label");
    label.innerHTML = label_text;
    label.for = input_id;

    // Create input text
    let input = document.createElement("input");
    input.id = input_id;
    input.type = input_type;
    // Append to Panel A
    mainContainer.append(label);
    mainContainer.append(input);
    location.append(mainContainer);
}

function createButton(panelId, id, label_text) {
    let location = document.getElementById(panelId);

    // Create input container
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("container-content");

    // Create Button
    let button = document.createElement("button");
    button.id = id;
    button.innerHTML = label_text;
    mainContainer.append(button);
    location.append(mainContainer);
}

export function createPanel(inputs) {
    for (const item in inputs) {
        if (inputs[item].inputType === "text") {
            createInput(
                inputs[item].panel,
                inputs[item].id,
                inputs[item].label,
                inputs[item].inputType
            );
        } else if (inputs[item].inputType === "button") {
            console.log("Create button here");
            createButton(
                inputs[item].panel,
                inputs[item].id,
                inputs[item].label
            );
        }
    }
}
