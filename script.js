/* Javascript */


let gridSize = 16;
let color = "black";
let opacity = 1;
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

    // opacity = 1 prevents opacity from changing
    opacity = 1;

    // resets color to default black
    color = "black";

    // remove all children in gridContainer
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


function getNewGridSize() {

    gridSize = prompt("Pick a number between 2 - 100")

    // callback function if input is invalid
    if ((gridSize > 100) || (gridSize < 2)) {
        alert("ERROR, try again.");
        return getNewGridSize();
    } 

    return gridSize;
}


function getGridSquareColor(color) {

    if (color === "rgb") {
        // rgb value can only be between 0 - 255
        let value = 255;

        // get random value between 0 - 255
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        return `rgb(${r}, ${g}, ${b})`;
    }

    return "black";
}


function draw() {

    // NodeList containing all grid squares
    const changeSquareColor = document.querySelectorAll(".gridSquare");

    // gets each element in the grid square NodeList
    for (let element of changeSquareColor) {

        // if mouse hovers over element in the grid square NodeList, color background
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = getGridSquareColor(color);
            
            // adjust opacity only if opacity = 0
            // opacity can be 0 only when "opacity" button is clicked
            if (opacity < 1) {
                let tempOpacity = Number(element.style.opacity);
                element.style.opacity = tempOpacity + 0.1;
            }
        });
    }
}


function runGame() {
    createGrid(gridSize);
    draw();
}


const newGridSizeButton = document.querySelector("#gridSize");
newGridSizeButton.addEventListener("click", () => {
    getNewGridSize();
    resetGrid();
    runGame();
})


const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    resetGrid();
    runGame();
});


const rgbButton = document.querySelector("#rgb");
rgbButton.addEventListener("click", () => {
        resetGrid();
        // color = rgb allows getGridSquareColor() to take "rgb" as parameter
        color = "rgb";
        runGame();
});


const opacityButton = document.querySelector("#opacity");
opacityButton.addEventListener("click", () => {
    resetGrid();
    // opacity = 0 allows opacity in draw() to be changed
    opacity = 0;
    runGame();
});


runGame();