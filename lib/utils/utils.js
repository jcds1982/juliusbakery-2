function createInput(
    panelId,
    input_id,
    label_text,
    input_type,
    additionalConfiguration,
    data
) {
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

    if (additionalConfiguration) {
        for (let key in additionalConfiguration) {
            input[key] = additionalConfiguration[key];
        }
    }

    if (data) {
        for (let key in data) {
            input.dataset[key] = data[key];
        }
    }

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
        } else if (inputs[item].inputType === "radio") {
            createInput(
                inputs[item].panel,
                inputs[item].id,
                inputs[item].label,
                (inputs[item].type = inputs[item].inputType),
                inputs[item].additionalConfiguration,
                inputs[item].data
            );
        } else if (inputs[item].inputType === "button") {
            createButton(
                inputs[item].panel,
                inputs[item].id,
                inputs[item].label
            );
        }
    }
}

export function clearTable(containerId, ingredients) {
    let container = document.getElementById(containerId);
    container.innerHTML = "";
    ingredients = [];
}

/**
 * Validate only numbers in input.
 * @param {*} fieldId
 * @returns
 */
export function validateNumber(fieldId) {
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
}

export function clearValues(fields) {
    fields.forEach((fieldId) => {
        if (document.getElementById(fieldId)) {
            document.getElementById(fieldId).value = "";
        }
    });
}

export function createCell(cell) {
    let div = document.createElement("div");
    div.classList.add("table__cell");
    div.innerHTML = cell;
    return div;
}

export function addRow(container, ingredientInformation) {
    // Create a new cell on the table
    for (const property in ingredientInformation) {
        if (Object.hasOwnProperty.call(ingredientInformation, property)) {
            console.log(ingredientInformation[property]);
            if (ingredientInformation[property]) {
                container.appendChild(
                    createCell(ingredientInformation[property])
                );
            }
        }
    }
}
