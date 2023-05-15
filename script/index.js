const submitBtn = document.querySelector('.form-signup-btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault;
  const password = document.querySelector('#password');
  const passwordConfirm = document.querySelector('#password-confirm');

  if(password.value !== "" && password.value === passwordConfirm.value) {
    password.style = "border: 1px solid green";
    passwordConfirm.style = "border: 1px solid green";    
  } else {
    password.style = "border: 2px solid red";
    passwordConfirm.style = "border: 2px solid red";
  }
})



