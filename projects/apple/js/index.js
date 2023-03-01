const image = document.querySelector(".img");
const container = document.querySelector(".container");


const phones = (phone) => {
    image.src = phone ;
}

const bckg =(color)=>{
    container.style.background = color;
}