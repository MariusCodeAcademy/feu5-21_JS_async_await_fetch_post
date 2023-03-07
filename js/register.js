'use strict';
console.log('register.js file was loaded');

const formEl = document.forms[0];
const els = {
  form: formEl,
  email: formEl.elements.email,
  password: formEl.elements.password,
  repeatPassword: formEl.elements.repeatPassword,
};
console.log('els ===', els);

// event listeners
formEl.addEventListener('submit', handleRegisterSubmit);

// functions
/**
 * function to handle register logic
 * @param {SubmitEvent} e
 */
function handleRegisterSubmit(e) {
  e.preventDefault();
  // naujas objektas is inputs

  const allFormValues = {
    email: els.email.value.trim(),
    password: els.password.value.trim(),
    repeatPassword: els.repeatPassword.value.trim(),
  };

  console.log('allFormValues ===', allFormValues);
}
