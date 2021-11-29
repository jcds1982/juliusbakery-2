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
        id: "radio_percentage",
        label: "%",
        inputType: "radio",
        calcuationType: "percentage",
        additionalConfiguration: {
            checked: true,
            name: "calculationMethod",
            label: "%",
        },
        data: {
            label: "%",
        },
    },
    {
        panel: "panelB",
        id: "radio_weight",
        label: "gr.",
        inputType: "radio",
        calcuationType: "weight",
        additionalConfiguration: {
            checked: false,
            name: "calculationMethod",
        },
        data: {
            label: "gr",
        },
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
        id: "pnb_weightGr",
        label: "gr. :",
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
