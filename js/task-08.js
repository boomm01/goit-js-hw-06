const form = document.querySelector('.login-form');
const message = 'Усі поля повинні бути заповнені';

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;

    if(email.value === ''  || password.value === ''){
        alert(message);
    } else{
        const formData = new FormData(event.currentTarget);

        const forData = {email, password};
        console.log(forData);
    }
    event.currentTarget.reset();
    }


    

   

