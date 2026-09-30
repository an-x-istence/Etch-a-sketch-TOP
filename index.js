let defaultGrid = 16;
let containerWidth = defaultGrid * 50;
let etchContainer = document.querySelector(".container");
etchContainer.style.width = `${containerWidth}px`
for (i = 0; i < defaultGrid ** 2; i++) {
    let etchSquare = document.createElement("div");
    etchSquare.classList.toggle("etch-square")
    etchContainer.appendChild(etchSquare)
}