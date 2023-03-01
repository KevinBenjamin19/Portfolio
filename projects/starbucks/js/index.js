const image = document.querySelector(".starbucks")
const circle = document.querySelector(".circle")

const starbucks_change = (starbucks) => {
    image.src = starbucks;
}

const circle_color = (color) => {
    circle.style.background = color;
}