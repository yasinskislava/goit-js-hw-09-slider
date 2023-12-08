document.addEventListener("mousemove", _.debounce(moveBox, 10));
const box = document.querySelector("#box");
function moveBox(e) {
    const cordX = e.clientX;
    const cordY = e.clientY;
    box.style.marginLeft = `${cordX - 25}px`;
    box.style.marginTop = `${cordY - 25}px`;
}