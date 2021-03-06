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
    label.textContent = label_text;
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
    button.textContent = label_text;
    mainContainer.append(button);
    location.append(mainContainer);
}

/**
 * Enable or disable radio buttons
 * @param {String} action
 */
export function enableDisableRadioButtons(action) {
    let radios = document.querySelectorAll("[id^='radio_']");
    if (action) {
        switch (action) {
            case "enable":
                radios.forEach((radio) => {
                    radio.disabled = false;
                });
                break;

            case "disable":
                radios.forEach((radio) => {
                    radio.disabled = true;
                });
                break;

            default:
                console.error("Action not provided");
                break;
        }
    }
}

export function createPanel(inputs) {
    for (const item in inputs) {
        if (
            inputs[item].inputType === "text" ||
            inputs[item].inputType === "checkbox"
        ) {
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

export function clearTable(containerId) {
    let container = document.getElementById(containerId);
    container.textContent = "";
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

export function validateBlank(fieldId) {
    let fieldToValidate = document.getElementById(fieldId);

    if (fieldToValidate.value) {
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
    div.innerText = cell;
    return div;
}

export function addRow(container, ingredientInformation, ingredients, table) {
    // Create a new cell on the table
    for (const property in ingredientInformation) {
        if (Object.hasOwnProperty.call(ingredientInformation, property)) {
            if (property === "id") {
                console.log("Entered Id");
                let ingredientIdElement = document.createElement("button");
                ingredientIdElement.innerText = "-";
                ingredientIdElement.addEventListener("click", function () {
                    removeRow(
                        ingredientInformation[property],
                        ingredients,
                        container,
                        table
                    );
                });

                let cell = createCell("");
                cell.appendChild(ingredientIdElement);
                console.log(cell);
                container.appendChild(cell);
            } else {
                container.appendChild(
                    createCell(ingredientInformation[property])
                );
            }
        }
    }
}

export function drawTable(container, ingredients, table) {
    clearTable(table.containerId);

    table.header.forEach((header) => {
        container.appendChild(createCell(header));
    });

    ingredients.forEach((ingredient) => {
        addRow(container, ingredient, ingredients, table);
    });

    addRow(container, table.footer);
}

function removeRow(ingredientId, ingredients, container, table) {
    for (let index in ingredients) {
        if (ingredients[index]?.id === ingredientId) {
            console.log(table.footer);
            table.footer[2] =
                parseFloat(table.footer[2]) -
                parseFloat(ingredients[index].percentage);
            table.footer[3] =
                parseInt(table.footer[3]) -
                parseInt(ingredients[index].weightGr);
            table.footer[4] =
                parseFloat(table.footer[4]) -
                parseFloat(ingredients[index].weightKg);
            ingredients.splice(index, 1);
        }
    }
    clearTable(table.containerId);
    if (ingredients.length) {
        drawTable(container, ingredients, table);
    }
}
