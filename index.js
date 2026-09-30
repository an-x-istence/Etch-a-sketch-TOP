let defaultGrid = 16;
let userGridChanger = document.querySelector(".change-grid");
let etchContainer = document.querySelector(".container");


function gridGenerator(size) {
    //Dynamically set container width by multiplying number of boxes in a row by the total width each box takes (Set to 50px in css)
    let containerWidth = size * 50;
    
    etchContainer.style.width = `${containerWidth}px`
    //Check how to generate random numbers, use backticks to get the 3 random nubers for rgb into the js
    // Unsure about opacity

    for (i = 0; i < size ** 2; i++) {
        let etchSquare = document.createElement("div");
        etchSquare.addEventListener("mouseover", () => etchSquare.style.backgroundColor = "green")
        etchSquare.classList.toggle("etch-square")
        etchContainer.appendChild(etchSquare)
    }
}

function gridRemover() {
    document.querySelectorAll('.etch-square').forEach(e => e.remove());
}

// Welcome the user with a default 16 x 16 grid
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



