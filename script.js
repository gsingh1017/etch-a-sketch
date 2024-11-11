/* Javascript */


function createGrid(num) {

    // multiply num by itself to get correct number of squares in grid
    const gridSquareCount = num * num;

    // calculate square size (600px is max width/height)
    const squareSize = (600 / num);

    const gridContainer = document.querySelector("#gridContainer");

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


createGrid(16);
draw();