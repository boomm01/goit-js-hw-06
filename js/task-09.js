function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');


buttonEl.addEventListener('click', addColor)


function addColor () {
  const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    spanColorEl.textContent = color;
}

