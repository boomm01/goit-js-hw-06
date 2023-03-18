const fontSizeControe = document.querySelector('#font-size-control');
const changesText = document.querySelector('#text');


fontSizeControe.addEventListener('input', onControl);


function onControl (event) {
   const valueScrol = event.currentTarget.value;
   changesText.style.fontSize = `${valueScrol}px`;
}

