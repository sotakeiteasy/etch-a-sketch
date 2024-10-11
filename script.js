const container = document.querySelector(".container");
const btnErase = document.querySelector('#cleanGrid');
const btnMakeGrid = document.querySelector('#makeNewGrid')
const btnCustomColour = document.querySelector('#customColour');
const btnRandomColour = document.querySelector('#randomColour')
let singleColorMode = false;


btnMakeGrid.addEventListener('click', function getGridSize() {
    let gridSize = prompt('Please enter a value higher than 0 and less than 100', []);
    if (gridSize === null) {
    return;
    }
    if (gridSize <= 100 && gridSize > 0) {
        makeGrid(gridSize);

    } else {
        alert("Incorrect number, please enter a value higher than 0 and less than 100");
        getGridSize(); 
    }
});

btnErase.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
    cell.style.backgroundColor = '';
    });
});

btnCustomColour.addEventListener('click', () => {
    singleColorMode = true;
});

btnRandomColour.addEventListener('click', () => {
    singleColorMode = false;
});


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
function changeColor() {
    if (singleColorMode) {
        const selectedColor = document.getElementById('colorPicker').value;
        this.style.backgroundColor = selectedColor;
    } else {
        const randomColor = getRandomColor();
        this.style.backgroundColor = randomColor;
    }
}

javascript
function getRandomColor() {
    const hueRanges = [
        [0, 60],   // Red to Yellow
        [120, 180], // Green to Cyan
        [240, 300]  // Blue to Purple
    ];
    const randomRange = hueRanges[Math.floor(Math.random() * hueRanges.length)];
    const hue = Math.floor(Math.random() * (randomRange[1] - randomRange[0] + 1)) + randomRange[0];
    
    const saturation = Math.floor(Math.random() * 20) + 80; // 80% - 100%
    const lightness = Math.floor(Math.random() * 20) + 50; // 50% - 70%
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

console.log(generateRandomColor()); 