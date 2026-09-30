let defaultGrid = 16;
let userGridChanger = document.querySelector(".change-grid");


let containerWidth = defaultGrid * 50;
let etchContainer = document.querySelector(".container");
etchContainer.style.width = `${containerWidth}px`

for (i = 0; i < defaultGrid ** 2; i++) {
    let etchSquare = document.createElement("div");
    etchSquare.addEventListener("mouseover", () => etchSquare.style.backgroundColor = "green")
    etchSquare.classList.toggle("etch-square")
    etchContainer.appendChild(etchSquare)
}

userGridChanger.addEventListener("click", () => {
    let userGrid = prompt("Enter a grid size between 0 and 100")
    if (Number(userGrid) > 100) {
        alert("Too big. Defaulting to 16 x 16 grid.");
    }
    else if (Number(userGrid) <= 100) {
        alert(`Producing ${userGrid} by ${userGrid}`);
    } else {
        alert("Invalid input. Defaulting to 16 x 16 grid.");   
    }
})



