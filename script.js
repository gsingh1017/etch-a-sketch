/* Javascript */


function createGrid(num) {

    const selectContainer = document.querySelector("#container");

    // loop creates grid squares based on user input
    for (let i = 0; i < num; i++) {
        const createGridSquare = document.createElement("div");
        createGridSquare.classList = "gridSquare";
        createGridSquare.textContent = i;
        selectContainer.appendChild(createGridSquare);
    }
}

// sets grid shape (16x16 in this example)
// const gridSize = prompt("Pick a number for grid");

createGrid(16);