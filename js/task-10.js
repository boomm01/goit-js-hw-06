function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const refs = {

  buttonCreateEl:document.querySelector('button[data-create]'),
  buttonDestroyEl:document.querySelector('button[data-destroy]'),
  divBoxesAdd:document.querySelector('#boxes'),
  amountEl: document.querySelector('#controls input'),
}

refs.buttonCreateEl.addEventListener('click', addBoxes);
refs.buttonDestroyEl.addEventListener('click', destroyBoxes);



function addBoxes () {
  let amount = refs.amountEl.value;
  if(amount > 0){
    createBoxes(amount)
  }
}

function createBoxes(amount) {
    for(let i = 0; i < amount; i += 1){
      let elem = document.createElement('div');

      elem.style.height = 30 + 10 * i + 'px' ;
      elem.style.width =  30 + 10 * i + 'px';
      elem.style.backgroundColor = getRandomHexColor();

      refs.divBoxesAdd.append(elem);
    }
}

function destroyBoxes() {
  refs.divBoxesAdd.innerHTML = '';
  refs.amountEl.value = ''
}





