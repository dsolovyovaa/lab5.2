const table = document.getElementById("colorTable");
let cellNumber = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement("td");
        cell.textContent = cellNumber;
        cell.dataset.number = cellNumber; 
        row.appendChild(cell);
        cellNumber++;
    }
    table.appendChild(row);
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const colorPicker = document.getElementById("colorPicker");
table.addEventListener("mouseover", function(event) {
    if (event.target.tagName === "TD" && event.target.dataset.number === "4") {
        event.target.style.backgroundColor = getRandomColor();
    }
});

table.addEventListener("click", function(event) {
    if (event.target.tagName === "TD" && event.target.dataset.number === "4") {
        event.target.style.backgroundColor = colorPicker.value;
    }
});

table.addEventListener("dblclick", function(event) {
    if (event.target.tagName === "TD" && event.target.dataset.number === "4") {
        for (let i = 0; i < 6; i++) {
            const cell = table.rows[i].cells[5 - i];
            cell.style.backgroundColor = colorPicker.value;
        }
    }
});
