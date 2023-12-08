const sizeInput = document.querySelector(".slider__input");
sizeInput.addEventListener("input", _.debounce(changeSize, 300));
const sliderImage = document.querySelector(".slider__image");


function changeSize() {
    const size = Number(sizeInput.value * 6);
    sliderImage.src = `https://via.placeholder.com/${size}x${size}`;
}