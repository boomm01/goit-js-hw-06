const inputElemen = document.querySelector('#validation-input');

const onDataLength = Number(inputElemen.dataset.length);




inputElemen.addEventListener('blur', onChangeColor)

function onChangeColor () {
   if(inputElemen.value.length !== onDataLength){
      inputElemen.classList.remove('valid');
      inputElemen.classList.add('invalid');
   } else{ 
      inputElemen.classList.remove('invalid');
      inputElemen.classList.add('valid');}
     
}

