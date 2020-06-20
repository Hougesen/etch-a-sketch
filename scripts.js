const container = document.querySelector("#container")
let gridSize = 16
const newGridBtn = document.querySelector("#newGridBtn")
createGrid(gridSize)

newGridBtn.addEventListener("click", function () {
    gridSize = prompt("Enter grid size")
    clearGrid()
    createGrid(gridSize)
})

function clearGrid() {
    while (container.firstElementChild) {
        container.removeChild(container.lastChild)
    }
}


function createGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`


    for (let i = 0; i < (gridSize * gridSize); i++) {
        let gridItem = document.createElement("div");
        gridItem.className = "gridItem";
        gridItem.addEventListener("mouseover", gridMouseOver);




        function gridMouseOver() {
            var randomColor = "#000000".replace(/0/g, function () {
                return (~~(Math.random() * 16)).toString(16);
            });

            gridItem.style.backgroundColor = randomColor
        }
        container.appendChild(gridItem);

    }
}