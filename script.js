/* Javascript */


function createGrid(num) {

    // multiply num by itself to get correct number of squares in grid
    const gridSquareCount = num * num;

    // calculate square size **CHECK**
    const squareSize = (600 / num);

    const gridContainer = document.querySelector("#container");

    // loop creates grid squares based on user input
    for (let i = 0; i < gridSquareCount; i++) {
        const createGridSquare = document.createElement("div");
        createGridSquare.classList = "gridSquare";

        // subtract by 1 to add 0.5px border to box
        createGridSquare.style.height = (squareSize - 1) + "px";
        createGridSquare.style.width = (squareSize - 1) + "px";

        gridContainer.appendChild(createGridSquare);
    }
}


// const gridSize = prompt("Pick a number for grid");

createGrid(16);