
  // define the variables used in the function 

  let email = document.querySelector('.email-input');
  let errors = document.querySelectorAll('.error');

// This is the function to validate the email.
const validateEmail = () => {
    if (!email.value.includes('@')) {
        email.style.borderColor = 'hsl(0, 93%, 68%)';

        // THIS IS HOW WE DISPLAY THE ERROR ACTIVE STATES 
        errors.forEach(error => error.classList.add('show'));
        setTimeout(() => errors.forEach(error => error.classList.remove('show')), 3000);
    }

// THIS RELOADS THE PAGE IF THE EMAIL IS VALID 
    else {
        email.style.borderColor = 'hsl(0, 36%, 70%)';
        errors.forEach(error => error.classList.remove('show'));
        window.location.reload();
    }
};
