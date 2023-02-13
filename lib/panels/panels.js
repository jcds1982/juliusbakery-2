export const panelA = [{
    panel: "panelA", id: "weightPerUnit", label: "Peso por Unidad", inputType: "text",
}, {
    panel: "panelA", id: "units", label: "Unidades", inputType: "text",
},];

export const panelB = [{
    panel: "panelB", id: "pnb_ingredient", label: "Ingrediente :", inputType: "text", calcuationType: "",
}, {
    panel: "panelB", id: "pnb_percentage", label: "Porcentaje % :", inputType: "text", calcuationType: "percentage",
}, ];

export const buttons = [{
    panel: "buttons", id: "AddIngredient", label: "Agregar", inputType: "button",
}, {
    panel: "buttons", id: "ClearTable", label: "Borrar", inputType: "button",
},];

export const weightUnitIds = ["weightPerUnit", "units"];

export const ingredientIds = ["ingredient", "percentage", "weightGr"];

export const tableHeaders = ["Acciones", "Ingredientes", "%", "gr.", "Kg."];
