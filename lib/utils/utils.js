export function createPanel(inputs) {
    for (const item in inputs) {
        if (inputs[item].inputType === "text") {
            createInput(
                inputs[item].panel,
                inputs[item].id,
                inputs[item].label,
                inputs[item].inputType
            );
        } else if (inputs[item].inputType === "radio") {
            console.log("Create button here");
            createInput(
                inputs[item].panel,
                inputs[item].id,
                inputs[item].label
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

export function addEventListeners() {
    // Add ingredient
    document.querySelector("#AddIngredient").addEventListener("click", () => {
        CreateGrid("ingredientsTable");
    });

    // Clear table of ingredients
    document.querySelector("#ClearTable").addEventListener("click", () => {
        ClearTable("ingredientsTable");
    });
}

/**
 * Validate only numbers in input.
 * @param {*} fieldId
 * @returns
 */
export const validateNumber = (fieldId) => {
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

export const clearValues = (fields) => {
    fields.forEach((fieldId) => {
        document.getElementById(fieldId).value = "";
    });
};

const createCell = (cell) => {
    let div = document.createElement("div");
    div.classList.add("table__cell");
    div.innerHTML = cell;
    return div;
};

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

// Create input function
export function ClearTable(containerId) {
    let container = document.getElementById(containerId);
    container.innerHTML = "";
    ingredients = [];
}

// EXPORT FUNCTIONS
export const createTable = (containerId) => {
    // Create a new cell on the table
    for (const property in ingredientInformation) {
        if (Object.hasOwnProperty.call(ingredientInformation, property)) {
            container.appendChild(createCell(ingredientInformation[property]));
        }
    }
};
