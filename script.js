const container = document.querySelector(".container");
const btnErase = document.querySelector('#cleanGrid');
const btnMakeGrid = document.querySelector('#makeNewGrid')

btnMakeGrid.addEventListener('click', function getGridSize() {
    let gridSize = prompt('Please enter a value heigher than 0 and less than 100', []);
    if (gridSize === null) {
    return;
    }
    if (gridSize <= 100 && gridSize > 0) {
        makeGrid(gridSize);

    } else {
        alert("Wrong size, please enter a number less than or equal to 100");
        getGridSize(); 
    }
});

btnErase.addEventListener('click', function() {
    eraseGrid();
});

function eraseGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
    cell.style.backgroundColor = '';
});
}

let gridSize = 16;
const containerWidth = container.offsetWidth;
const cellSize = Math.min(containerWidth) / gridSize;

function makeGrid(gridSize){
    container.innerHTML = '';
    const cellSize = containerWidth / gridSize;
    for (i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.style.height = `${gridSize}px`;
        container.appendChild(row);

        for(j = 0; j < gridSize; j++){
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.style.width = `${cellSize}px`
            cell.style.height = `${cellSize}px`
            row.appendChild(cell)
            cell.addEventListener("mouseenter", changeColor);
            // cell.addEventListener("mouseleave", revertColor);
        }
        container.appendChild(row);
    }
}
makeGrid(gridSize);

// Function to change the background color when mouse enters a cell
function changeColor(event) {
    event.target.style.backgroundColor = generateRandomColor();
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    console.log(maxVal)
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
console.log(generateRandomColor()); 