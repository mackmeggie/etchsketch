const container = document.querySelector('#container');
const square = document.createElement('div');

function clearGrid() {
    let clearsquares = container.querySelectorAll('.square');
    clearsquares.forEach(clearsquares => clearsquares.remove());  
}

function newGrid() {
    makeGrid();
    addColor();
}

function makeGrid() {
    let size=Number(window.prompt('What size grid would you like?'));
    let gridSize = size * size - 1;
    for (let i = 0; i <= gridSize; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        container.style.gridTemplateRows=`repeat(${size}, 1fr)`;
        container.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    }
}

function addColor() {
    const boxesColor = document.querySelectorAll('.square');
    boxesColor.forEach((boxesColor)=> {
        boxesColor.addEventListener('mouseover', function (event){
            event.target.style.backgroundColor='purple'
            });
        }); 
    }

makeGrid();
addColor();
