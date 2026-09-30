let defaultGrid = 16;
let userGridChanger = document.querySelector(".change-grid");
let etchContainer = document.querySelector(".container");


function gridGenerator(size) {
    let containerWidth = size * 50;
    
    etchContainer.style.width = `${containerWidth}px`

    for (i = 0; i < size ** 2; i++) {
        let etchSquare = document.createElement("div");
        etchSquare.addEventListener("mouseover", () => etchSquare.style.backgroundColor = "green")
        etchSquare.classList.toggle("etch-square")
        etchContainer.appendChild(etchSquare)
    }
}

function gridRemover() {gridRemover();
    document.querySelectorAll('.etch-square').forEach(e => e.remove());
}

gridGenerator(defaultGrid);

userGridChanger.addEventListener("click", () => {
    let userGrid = prompt("Enter a grid size between 0 and 100")
    if (Number(userGrid) > 100) {
        alert("Too big. Defaulting to 16 x 16 grid.");
        gridRemover();
        gridGenerator(defaultGrid);
    }
    else if (Number(userGrid) <= 100) {
        alert(`Producing ${userGrid} by ${userGrid} grid`);
        gridRemover();
        gridGenerator(Number(userGrid));
    } else {
        alert("Invalid input. Defaulting to 16 x 16 grid.");  
        gridRemover();
        gridGenerator(defaultGrid);
    }
})



