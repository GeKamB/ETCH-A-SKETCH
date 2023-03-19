const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const board = document.querySelector('.board');
const blackBtn = document.getElementById('black-btn');
const randomBtn = document.getElementById('random-btn');
const clearBtn = document.getElementById('clear-btn');
const palletColor = document.getElementById('base');




// Initialize the grid and color mode
let gridSize = slider.value;
let colo = palletColor.value;
let isRandom = false;


// Display the initial grid size on the output display 
output.textContent = gridSize;

// Function to build the grid with the specified number of squares
function buildGrid(gridSize) {
  board.style.display = 'grid';
  board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < (gridSize * gridSize); i++) {
    let square = document.createElement("div");
    square.classList.add('square');
    board.insertAdjacentElement('beforeend', square);
  }
}


function changeColor(e) {
  if (isRandom) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
  } else {
    e.target.style.backgroundColor = colo;
  }
}

function clearBoard() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = 'white';
  });
}
// build the initial grid with specified size

buildGrid(gridSize);

// to rebuild the grid with the new size when the slider value changes
slider.addEventListener('input', function() {
  gridSize = this.value;
  output.textContent = gridSize;
  board.innerHTML = ''; // Clear the board container
  buildGrid(gridSize);
  
});

palletColor.addEventListener('change', function () {
  colo = this.value;
})
board.addEventListener('mousedown', function () {
  board.addEventListener('mouseover', changeColor);
});
board.addEventListener('mouseup', function () {
  board.removeEventListener('mouseover', changeColor);
})


palletColor.addEventListener('click', function() {
  isRandom = false;
});

randomBtn.addEventListener('click', function() {
  isRandom = true;
});


clearBtn.addEventListener('click', () => clearBoard());

