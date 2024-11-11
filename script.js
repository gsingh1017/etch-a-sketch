/* Javascript */


let gridSize = 16;
const gridContainer = document.querySelector("#gridContainer");


function createGrid(num) {

    // multiply num by itself to get correct number of squares in grid
    const gridSquareCount = num * num;

    // calculate square size (600px is max width/height)
    const squareSize = (600 / num);

    // loop creates grid squares inside gridContainer based on user input
    for (let i = 0; i < gridSquareCount; i++) {
        const createGridSquare = document.createElement("div");
        createGridSquare.classList = "gridSquare";

        // subtract by 1 to add 0.5px border to grid square
        createGridSquare.style.height = (squareSize - 1) + "px";
        createGridSquare.style.width = (squareSize - 1) + "px";

        gridContainer.appendChild(createGridSquare);
    }
}


function resetGrid() {

    // remove all children in gridContainer
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


function newGridSize() {

    gridSize = prompt("Pick a number between 2 - 100")

    // callback function if input is invalid
    if ((gridSize > 100) || (gridSize < 2)) {
        alert("ERROR, try again.");
        return newGridSize();
    } 

    return gridSize;
}


function draw() {

    // NodeList containing all grid squares
    const changeSquareColor = document.querySelectorAll(".gridSquare");

    // iterates through each element in the grid square node list
    for (let elem of changeSquareColor) {

        // if mouse hovers over element in the grid square NodeList, color background
        elem.addEventListener("mouseenter", () => {
            elem.style.backgroundColor = "green";
        });
    }
}


function runGame() {
    createGrid(gridSize);
    draw();
}


runGame();


const newGridSizeButton = document.querySelector("#gridSize");
newGridSizeButton.addEventListener("click", () => {
    newGridSize();
    resetGrid();
    runGame();
})


const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    resetGrid();
    runGame();
});