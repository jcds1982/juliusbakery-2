// Table headers
const tempHeader = [
    { class: "table__header_action", text: "Acciones" },
    { class: "table__header_ingredient", text: "Ingredientes" },
    { class: "table__header_percentage", text: "%" },
    { class: "table__header_weight_gr", text: "gr." },
    { class: "table__header_weight_kg", text: "Kg." },
];

const CreateGrid = (containerId) => {
    let container = document.getElementById(containerId);

    if (!document.querySelector(".table__header_action")) {
        tempHeader.forEach((header) => {
            container.appendChild(CreateHeader(header));
        });
    }
};

const CreateHeader = (header) => {
    let div = document.createElement("div");
    div.classList.add(header.class);
    div.classList.add("table__cell");
    div.innerHTML = header.text;
    return div;
};
