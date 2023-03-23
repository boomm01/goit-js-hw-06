const valueEl = document.querySelector('#value');
let counterValue = 0;

console.log(counterValue)

const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

const handleClickDec = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
  };

const handleClickInc = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
  };


  buttonDec.addEventListener('click', handleClickDec);
  buttonInc.addEventListener('click', handleClickInc);