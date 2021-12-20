export const panelA = [
    {
        panel: "panelA",
        id: "weightPerUnit",
        label: "Peso por Unidad",
        inputType: "text",
    },
    {
        panel: "panelA",
        id: "units",
        label: "Unidades",
        inputType: "text",
    },
];

export const panelB = [
    {
        panel: "panelB",
        id: "pnb_flour",
        label: "Es Harina?:",
        inputType: "checkbox",
        calcuationType: "",
    },
    {
        panel: "panelB",
        id: "pnb_ingredient",
        label: "Ingrediente :",
        inputType: "text",
        calcuationType: "",
    },
    {
        panel: "panelB",
        id: "pnb_percentage",
        label: "% :",
        inputType: "text",
        calcuationType: "percentage",
    },
    {
        panel: "panelB",
        id: "AddIngredient",
        label: "Agregar",
        inputType: "button",
    },
    {
        panel: "panelB",
        id: "ClearTable",
        label: "Borrar",
        inputType: "button",
    },
];

export const weightUnitIds = ["weightPerUnit", "units"];

export const ingredientIds = ["ingredient", "percentage", "weightGr"];

export const tableHeaders = [
    "Acciones",
    "Es Harina",
    "Ingredientes",
    "%",
    "gr.",
    "Kg.",
];
