const inputText = document.querySelector('#name-input')
const outputText = document.querySelector('#name-output')


const changeText = (event) =>{
    if(event.currentTarget.value === ''){
        return  outputText.textContent = 'Anonymous';
    }
   
    return outputText.textContent = event.currentTarget.value;
}


inputText.addEventListener('input', changeText);


