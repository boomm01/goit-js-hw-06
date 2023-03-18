const form = document.querySelector('.login-form');
const message = 'Усі поля повинні бути заповнені';

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    if(event.currentTarget.email.value === ''  || event.currentTarget.password.value === ''){
        alert(message);
    } else{
        const formData = new FormData(event.currentTarget);

        formData.forEach((email, password) =>{
        console.log( email)
        console.log( password);
    })
    event.currentTarget.reset();
    }


    

   
}
