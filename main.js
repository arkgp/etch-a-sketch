let colorMode = 'black';
createGrid(16);
addHover();

function createGrid(userSquare) {

    let square = userSquare;

    if (square > 100) {
        square = 100;
    }

    for (let index = 0; index < square; index++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('grid-row');
        
        for (let index = 0; index < square; index++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            
            let gridInnerSquare = document.createElement('div');
            gridInnerSquare.classList.add('inner-square');

            gridSquare.appendChild(gridInnerSquare);
            rowDiv.appendChild(gridSquare);
        }
        
        const grid = document.getElementById('grid');
        grid.appendChild(rowDiv);   
    }
}

function deleteGrid() {
    const grid = document.getElementById('grid');
    while (grid.childElementCount > 0) {
        grid.removeChild(grid.firstChild);
    }
}

function resetGrid() {
    const gridSquare = document.querySelectorAll('.inner-square');
    gridSquare.forEach( square => {
        square.style.backgroundColor = '#FFF';
        square.style.opacity = '1';
        if (colorMode === 'fade') {
            square.style.backgroundColor = '#000';
            square.style.opacity = '0';
        }
    });
}

function addHover() {
    const gridSquare = document.querySelectorAll('.inner-square');
    gridSquare.forEach( square => square.addEventListener('mouseover', function() {
        if (colorMode === 'black') {
            square.style.backgroundColor = '#000000';
        } else if (colorMode === 'rainbow') {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = '#' + randomColor;
        } else if (colorMode === 'fade') {
            square.style.opacity = `${+square.style.opacity + 0.1}`;
        } else {
            square.style.backgroundColor = '#000000';
        }
        
    }));
}

const resizeButton = document.querySelector('#resize');
resizeButton.addEventListener('click', function() {
    let square = Number(prompt('How many squares do you want?'));
    deleteGrid();
    createGrid(square);
    colorMode = 'black';
    addHover();
});

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);

const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', function() {
    colorMode = 'black'
        const gridSquare = document.querySelectorAll('.inner-square');
    gridSquare.forEach( square =>  {
        square.style.backgroundColor = '#FFF';
        square.style.opacity = '1';
    });
});

const rainbowButton = document.querySelector('#multicolor');
rainbowButton.addEventListener('click', function() {
    colorMode = 'rainbow'
    const gridSquare = document.querySelectorAll('.inner-square');
    gridSquare.forEach( square =>  {
        square.style.backgroundColor = '#FFF';
        square.style.opacity = '1';
    });
});

const fadeButton = document.querySelector('#fade');
fadeButton.addEventListener('click', function() {
    colorMode = 'fade'
    const gridSquare = document.querySelectorAll('.inner-square');
    gridSquare.forEach( square =>  {
        square.style.backgroundColor = '#000000';
        square.style.opacity = '0';
    });

});